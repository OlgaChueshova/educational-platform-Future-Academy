import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { cloudService } from './Cloud';

class Storage {
    constructor() {
        this.storage = getStorage(cloudService.app);
    }

    uploadFoto(file) {
        const fotoRef = ref(this.storage, `./fotos/${file.name}`);
        return uploadBytes(fotoRef, file);
    }

    uploadVideo(file) {
        const videoRef = ref(this.storage, `./videos/${file.name}`);
        return uploadBytes(videoRef, file);
    }

    getDownloadURL(ref) {
        return this.getDownloadURL(ref);
    }
}

export const storageService = new Storage();