import {ref} from 'vue';
import { projectAuth } from '@/firebase/config';

const error = ref(null);

const login = async () => {
    error.value = null;
    
    try {
        const res = await projectAuth.signInAnonymously();
        error.value = null;
        return res;
        
    } catch (err) {
        console.log(err.value);
        error.value = 'Giriş yapılamadı!';
    }
}

const useLogin = ()=> {

    return {error, login}
}

export default useLogin;
