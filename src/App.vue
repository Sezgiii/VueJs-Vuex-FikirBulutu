<template>
  <div>
      <div class="nav" v-if="user">
         <router-link :to="{name: 'Ekle'}">Fikir Ekle</router-link> |
        <router-link :to="{name: 'Fikirler'}">Fikirler</router-link>
        <button @click="handleCikis">Çıkış yap</button>
      </div>
      <div class="nav" v-else>
        <router-link :to="{name: 'Home'}">Anasayfa </router-link> |
         <router-link :to="{name: 'Hakkimizda'}">Hakkımızda</router-link>
      </div>
    <router-view/>
  </div>
</template>

<script>
import useLogout from './composables/useLogout';
import getUser from './composables/getUser';
import {useRouter} from 'vue-router';

export default {
  setup() {
    const {user} = getUser();
    const {logout} = useLogout();

    const router = useRouter();

    const handleCikis = async()=>{
      await logout();
      router.push({name:'Home'});
    }

  return {handleCikis, user}

  },
}
</script>


<style>
body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  text-align: center;
  color:#ccc;
  margin: 0;
  background: gray;
}
.nav{
  padding: 30px;
  
}
.nav a {
  font-weight: bold;
  text-decoration: none;
  color:rgb(80, 83, 85);
}
.nav a.router-link-exact-active{
  color:#f78009;
}
button{
  border:1px solid #f78009;
  border-radius: 10px;
  background: #f78009 ;
  padding: 7px;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
}

</style>
