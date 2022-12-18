import { initializeApp } from "firebase/app";
import {API_KEY, APP_ID} from '../constants/envValues'

export class CloudService {
    constructor() {
        this.Config = {
            apiKey: API_KEY,
            authDomain: "future-academy-36385.firebaseapp.com",
            projectId: "future-academy-36385",
            storageBucket: "future-academy-36385.appspot.com",
            messagingSenderId: "432812923360",
            appId: APP_ID,
            measurementId: "G-GTTQNMELVE"
        };

        const app = initializeApp(this.Config);
    }
}

export const cloudService = new CloudService()