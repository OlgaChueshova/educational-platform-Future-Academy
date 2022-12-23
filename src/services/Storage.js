import { snapshotEqual } from 'firebase/firestore';
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

    uploadFotoArray(file) {
        const sliderRef = ref(this.storage, `./slider/${file.name}`);
        const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
        return uploadBytes(sliderRef, bytes);
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