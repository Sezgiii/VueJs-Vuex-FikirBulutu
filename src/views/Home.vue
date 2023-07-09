<template>
  <div class="home">
      <div>
        <h1>Fikir Bulutu</h1>
        <transition appear @before-enter="beforeEnter" @enter="enter">
            <div>
              <p>Buluta fikir eklemek ve fikirleri görmek için giriş yapınız.</p>
              <button @click="handleGiris">Misafir Girişi</button>
            </div>
        </transition>
      </div>
  </div>
</template>

<script>
import useLogin from '../composables/useLogin';
import {useRouter} from 'vue-router';
import gsap from 'gsap';


export default {
  name: 'Home',
  setup(){

  const {login} =  useLogin();
  const router = useRouter();

  const handleGiris = async()=>{
    await login();
    router.push({name:'Ekle'});
  }

  const beforeEnter = (el) =>{
    el.style.transform = 'translateY(200px)';
    el.style.opacity = 0;
  };

  const enter =(el, done)=>{
    gsap.to(el, {
      duration:2,
      y:0,
      opacity:1,
      ease: 'back',
      onComplete: done
    });
  }

  return{handleGiris, beforeEnter, enter}
    
  }
}
</script>

<style scoped>
button {
  background-color:  #f78009;
  color:rgb(131, 113, 113);
}
h1{
  color:#b8b6b6;
  
}
p{
  font-size: 18px;
}

</style>