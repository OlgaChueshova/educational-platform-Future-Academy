import { initializeApp } from "firebase/app";
import {API_KEY, APP_ID} from '../constants/envValues'

export class CloudService {
    constructor() {
        this.Config = {
            apiKey: "AIzaSyBjKxISWq9yonbb26YmYIiGNnj9330nKW8",
            authDomain: "future-academy-36385.firebaseapp.com",
            projectId: "future-academy-36385",
            storageBucket: "future-academy-36385.appspot.com",
            messagingSenderId: "432812923360",
            appId: "1:432812923360:web:3e083d71caa945925a3385",
            measurementId: "G-GTTQNMELVE"
        };

        const app = initializeApp(this.Config);
    }
}

export const cloudService = new CloudService()