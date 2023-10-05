import {defineStore} from 'pinia'
import axios from "axios";

export const useRentingPeriodStore = defineStore({
    id: 'rentingPeriod',
    state: () => ({
        dataVehicules: [],
        startingDate: null,
        endingDate: null,
        error: null
    }),
    // getters: {
    //     getDates: (state) => {
    //         state.startingDate()
    //     }
    // },
    actions: {
        async getAvailableVehicules() {
            // this.dataVehicules = []
            console.log(this.dataVehicules)
            let url = import.meta.env.VITE_API_RESERVATIONS_ENDPOINT + '/reservations/available-vehicules/' + this.startingDate + '/' + this.endingDate
            const request = new Request (
                url,
                {
                    method: "GET",
                    headers: new Headers(),
                    mode: "cors",
                    cache: "default"
                }
            )
            try {
                /*
                const response = await fetch(request)
                if(!response.ok) {
                    throw new Error('Request failed with status : ' + response.status)
                }
                const data = await response.json()
                console.log(data)
                this.dataVehicules = data
                //*/
                //*
                await axios.get(url)
                    .then(
                        (response) => {
                            console.log(response.data)
                            this.dataVehicules = response.data
                            console.log(this.dataVehicules)
                        })
                //*/
            } catch (error) {
                this.error = error
                console.log(this.error)
            }
        }
    }
})