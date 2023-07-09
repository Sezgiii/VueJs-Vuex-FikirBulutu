import {ref} from "vue";
import {projectFirestore} from "../firebase/config";

const belgelerGetir = (collection) => {
    const documents = ref(null)
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection)

    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            results.push({...doc.data(), id:doc.id})
        })

        documents.value = results;
        error.value = null;
    }, (err) => {
        console.log(err.message);
        documents.value = null
        error.value = 'Verilere erişilemedi!'

    })
    return {documents, error}
}
export default belgelerGetir;