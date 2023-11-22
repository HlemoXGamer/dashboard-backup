import axios from "axios";
export async function useTime(){
    return axios.get(`https://worldtimeapi.org/api/ip`);
}