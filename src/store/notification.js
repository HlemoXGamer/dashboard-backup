import { getUserNotifications, update } from "@/apis/notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { defineStore } from "pinia";
import { Howl } from 'howler';
import Pusher from "pusher-js";
import notificationSound from "@/assets/notification.wav";
const  sound = new Howl({
  src: [notificationSound],
});
export const useNotificationStore = defineStore("notifications", {
  state: () => ({ items: [], total: 0, init: false, channel: "" }),
  getters: {
    items(state) {
      return state.items;
    },
    total(state) {
      return state.total;
    },
  },
  actions: {
    initPusher() {
      if (!this.$state.init) {
        const pusher = new Pusher("269cf0af26cc414b447e", { cluster: "eu" });
        const userData = window.localStorage.getItem("userData");
        if (userData) {
          const data = JSON.parse(userData);
          const channel = `restaurant.${data.type == "restaurant" ? data.branch_id : data.id}`;
          pusher.connection.bind("error", ({error}) => {
            console.error("Pusher Error", error)
          })
          pusher.connection.bind("connected", (connection_msg) => {
            console.log("🟢 Pusher Connected 🟢")
          })
          pusher.connection.bind("disconnected", (connection_msg) => {
            console.log("🔴 Pusher Disconnected 🔴")
          })
          pusher.subscribe(channel);
          pusher.bind("restaurant", (notification_data) => {
          // this.$state.pusher = pusher;
          this.$state.channel = channel;
          this.INCREAMENT_NOTIFICATION();
          LocalNotifications.schedule({
            notifications: [
              {
                title: "Notification",
              },
            ],
          });
          if(typeof data !== "undefined" && data.type == "restaurant"){
            if(notification_data.o_status == "paid"){
              sound.stop()
              sound.play()
            }
            if(notification_data.o_status == "cancelled"){
              this.getNotifications("restaurant", true)
            }
          }else{
            sound.stop()
            sound.play()
          }
          this.PUSH_NOTIFICATION(notification_data);
          });
          this.SET_INIT(true);
        }
      }
    },
    getNotifications(payload, noCountUpdate = false) {
      getUserNotifications(payload).then(({ data }) => {
        this.SET_NOTIFICATION(data.data);
        if(noCountUpdate === false){
          this.SET_TOTAL(
            data.data.filter((item) => item.is_active === 1)?.length || 0,
          );
        }
        this.initPusher();
      });
    },
    updateNotifications(payload) {
      update(payload).then(() => {
        this.SET_TOTAL(0);
      });
    },
    INCREAMENT_NOTIFICATION() {
      this.$state.total += 1;
    },
    DECREAMENT_NOTIFICATION() {
      this.$state.total -= 1;
    },
    SET_TOTAL(total) {
      this.$state.total = total;
    },
    SET_NOTIFICATION(payload) {
      this.$state.items = payload;
    },
    SET_INIT(payload) {
      this.$state.init = payload;
    },
    PUSH_NOTIFICATION(payload) {
      this.$state.items.push(payload);
    },
    RESET_PUSHER() {
      // this.$state.pusher.disconnect();
      this.$state.init = false;
    }
  },
});
