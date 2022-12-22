import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { cloudService } from './Cloud';

class Storage {
    constructor() {
        this.storage = getStorage(cloudService.app);
    }

    uploadFoto(file) {
        const fotoRef = ref(this.storage, `./foto/${file.name}`);
        return uploadBytes(fotoRef, file);
    }

    uploadFotos(files) {
        const fotoRef = ref(this.storage, `./fotos/${files.name}`);
        return uploadBytes(fotoRef, files);
    }

    uploadVideo(file) {
        const videoRef = ref(this.storage, `./video/${file.name}`);
        return uploadBytes(videoRef, file);
    }

    getDownloadURL(ref) {
        return getDownloadURL(ref);
    }
}

export const storageService = new Storage();