import {defineStore} from "pinia";
import User from "~/types/User";

type State = {
    currentUser: User,
}

export const useUser = defineStore('user', {
    state: () => <State>({
        currentUser: {},
    }),
    getters: {},
    actions: {
        refreshCurrentUser: async function () {
            const config = useRuntimeConfig();
            this.currentUser = await fetch(`${config.public.API_BASE_URL}/user/@current`, {
                credentials: 'include'
            }).then((res) => res.json()) as User;
        }
    },
})
