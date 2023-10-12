import axios from "axios";
export async function useTime(){
    return axios.get(`http://worldtimeapi.org/api/ip`);
}