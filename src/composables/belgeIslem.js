import {ref} from 'vue';
import {projectFirestore} from '../firebase/config';


const belgeIslem = (collection) => {
    const error = ref(null);

    const ekle = async(doc) => {
        error.value = null;

        try {
            const res= await projectFirestore.collection(collection).add(doc)
            return res;
        } catch (err) {
            console.log(err.message);
            error.value = 'Belge eklenemedi!';
        }
    }

    const sil = async(id) => {
        error.value = null;

        try {
            const res= await projectFirestore.collection(collection).doc(id).delete()
            return res;
        } catch (err) {
            error.value = 'Belge silinemedi!';
        }
    }

    return {error, ekle, sil};
}
export default belgeIslem;