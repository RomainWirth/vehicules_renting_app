import defineStore from 'pinia'
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
            this.dataVehicules = []
            try {
                const response = await axios.post(import.meta.env.VITE_API_RESERVATIONS_ENDPOINT + '/reservations/available-vehicules/' + this.startingDate + '/' + this.endingDate)
                console.log(response)
                response.then((response) => console.log(response.status, response.data))
                this.dataVehicules = response.data
            } catch (error) {
                this.error = error
            }
        }
    }
})