<template>
  <VRow v-if="dataFetched">
    <VCol cols="6" class="mb-5">
      <h3>{{$t('Delivery Name')}}</h3>
    </VCol>
    <VCol cols="6" class="mb-5">
      <h3>{{ delivery.name }}</h3>
    </VCol>

    <VCol cols="6" class="mb-5">
      <h3>{{$t('Phone Number')}}</h3>
    </VCol>
    <VCol cols="6" class="mb-5">
      <h3>{{ delivery.phone }}</h3>
    </VCol>

    <VCol cols="6" class="mb-5">
      <h3>{{$t('Working Days')}}</h3>
    </VCol>
    <VCol cols="6" class="mb-5">
      <h3>
        <VChip v-for="day in delivery.days" style="margin-right: 5px">
          {{ day.name }}
        </VChip>
      </h3>
    </VCol>

    <VCol cols="6" class="mb-5">
      <h3>{{$t('Working Hours')}}</h3>
    </VCol>
    <VCol cols="6" class="mb-5">
      <h3>{{ delivery.start }} To {{ delivery.end }}</h3>
    </VCol>

    <VCol cols="6" class="mb-5">
      <h3>{{ $t('Status') }}</h3>
    </VCol>
    <VCol cols="6" class="mb-5">
      <VSwitch
        :loading="loading"
        :disabled="loading"
        @change="toggleActive"
        v-model="isActive"
        :inset="false"
      />
    </VCol>
  </VRow>
</template>
<script setup>
import axios from "@axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
// Toast Notification
import { useToast } from "vue-toastification";
const toast = useToast();

const delivery = ref();
const route = useRoute();
const loading = ref(false);
const dataFetched = ref(false); // Add a ref to track if data is fetched
const isActive = ref(true);
const FetchDelivery = () => {
  axios
    .get(`/restaurant-apis/deliverymen/${route.params.id}`)
    .then((response) => {
      console.log(response.data.data);
      delivery.value = response.data.data;
      dataFetched.value = true; // Set dataFetched to true after fetching data
      isActive.value = response.data.data.is_active === 1;
    })
    .catch((error) => {
      console.error("An error occurred", error);
    });
};

const setActive = () => {
  // Toggle the is_active value
  delivery.value.is_active = !delivery.value.is_active;

  // Send a PUT request to update the is_active value on the server
  axios
    .put(`restaurant-apis/toggleActivation/deliverymen/${route.params.id}`, {
      is_active: delivery.value.is_active ? 1 : 0, // Convert true to 1 and false to 0
    })
    .then((response) => {
      toast.success("Activation status updated successfully");
    })
    .catch((error) => {
      toast.error("An error occurred while updating activation status");
    });
};

const toggleActive = () => {
  loading.value = true;
  setActive();
  loading.value = false;
};

onBeforeMount(() => {
  if (userRole == "restaurant") {
    FetchDelivery();
  }
});
</script>
