<template>
  <div>
    <div class="fikirler">
        <input type="text" v-model="yenifikir" placeholder="Yeni Fikir Adı" @keypress.enter="fikirEkle">
        <ul>
            <transition-group tag="ul" name="list" appear >
                <li v-for="fikir in fikirler" :key="fikir.id" @click="fikirSil(fikir.id)"> 
                    {{ fikir.fikirAd }}
                </li>
            </transition-group>
        </ul>
    </div>
    <transition name="modal">
        <Modal v-if="modalGoster"></Modal>
    </transition>
  </div>
</template>

<script>
import {ref,computed} from 'vue';
import {useStore} from 'vuex';
import Modal from '../components/Modal'
export default {
    components:{ Modal },
    setup(){
        const store = useStore()
        const yenifikir = ref("")
        const modalGoster = ref(false)

        const fikirler = computed(()=>{
            return store.state.fikirler;
        })

        const fikirEkle = ()=>{
            if(yenifikir.value){
                store.dispatch("fikirEkleAction", yenifikir.value);
                yenifikir.value="";
            }else{
                triggerModal();
            }
        }

        const triggerModal= ()=>{
            modalGoster.value = true;
            setTimeout(()=>(modalGoster.value = false), 3000 )
        };

        const fikirSil = (id)=> {
            store.dispatch("fikirSilAction", id)
        };

        return { fikirler, yenifikir, fikirEkle, fikirSil, modalGoster, fikirler}
    }
}
</script>

<style>
.fikirler{
    max-width: 400px;
    margin: 20px auto;
    position: relative;
}
input{
    width: 100%;
    padding: 12px;
    border: 1px solid #f78009;
    background: #343434;
    color:#ccc;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    outline: none;
}
.fikirler ul {
    position: relative;
    padding: 0;
}
.fikirler li {
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: #f78009;
    box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    text-transform: capitalize;
}
.fikirler li:hover{
    cursor: pointer;
}

@keyframes titresim {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50%{
        transform: translateY(0px);
        opacity: 1;
    }
    60%{
        transform: translateY(8px);
        opacity: 1;
    }
    70%{
        transform: translateY(-8px);
        opacity: 1;
    }
    80%{
        transform: translateY(4px);
        opacity: 1;
    }
    90%{
        transform: translateY(-4px);
        opacity: 1;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
}

.modal-enter-from{
    opacity: 0;
    transform: translateY(-60px);
}
.modal-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.modal-enter-active{
    animation: titresim 0.5s ease;
}

.modal-leave-from{
    opacity: 1;
    transform: translateY(0);
}

.modal-leave-to{
    opacity: 0;
    transform: translateY(-60px);
}
.modal-leave-active{
    transition: all 0.5s ease;
}
.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-active{
    transition: all 0.4s ease;
}
.list-leave-to{
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active{
    transition: all 0.4s ease;
    position: absolute;
}
.list-move{
    transition: all 0.3s ease;
}


</style>