import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { API_KEY } from '../../constants/envValues'

export class Database {
    constructor() {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "future-academy-36385.firebaseapp.com",
            projectId: "future-academy-36385",
            storageBucket: "future-academy-36385.appspot.com",
            messagingSenderId: "432812923360",
            appId: "1:432812923360:web:3e083d71caa945925a3385",
            measurementId: "G-GTTQNMELVE"
        };

        const app = initializeApp(firebaseConfig);
        this._database = getFirestore(app);
    }

    create(collectionKey, body) {
        const collectionRef = collection(this._database, collectionKey);
        return addDoc(collectionRef, body);
    }

    read(collectionKey) {
        const collectionRef = collection(this._database, collectionKey);
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        })
    }

    update(collectionKey, id, body) {
        const document = doc(this._database, collectionKey, id);
        return updateDoc(document, body);
    }

    delete(collectionKey, id) {
        const document = doc(this._database, collectionKey, id);
        return deleteDoc(document);
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}