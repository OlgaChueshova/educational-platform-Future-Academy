import { cloudService } from "./Cloud";
import {  getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc, } from 'firebase/firestore';

export class Database {
    constructor() {
        this._database = getFirestore(cloudService.app);
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
    
  getDocument(collectionKey, id) {
    const documentRef = doc(this._database, collectionKey, id);
    return getDoc(documentRef).then((data) => data.data())
  }

}

export const dataBase = new Database();