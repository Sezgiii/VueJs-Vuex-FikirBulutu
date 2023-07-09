<template>
  <div class="fikir-liste">
    <h1 >Fikir Listesi</h1>
    <ul>
        <transition-group appear @before-enter="beforeEnter" @enter="enter">
            <li v-for="(fikir,index) in fikirler" :key="fikir.id" :data-index="index">
                <div>{{fikir.fikirAd}}</div>
            </li>
        </transition-group>
    </ul>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import gsap from "gsap";
export default {
    setup(){
        const store = useStore();

        const fikirler = computed(()=>{
            return store.state.fikirler;
        })

        const beforeEnter =(el)=>{
            el.style.opacity =0;
            el.style.transform = "translateY(100px)"
        }

        const enter = (el)=>{
            gsap.to(el,{
                opacity:1,
                y:0,
                duration:0.8,
                delay: el.dataset.index * 0.2,
            })
        }

        return { fikirler, beforeEnter, enter };
    }
}
</script>

<style>
.fikir-liste ul {
    padding: 0;
    display: grid;
    grid-template-columns:1fr 1fr 1fr ;
    grid-gap: 20px;
    max-width: 600px;
    margin: 60px auto;
}
.fikir-liste li {
    list-style-type: none;
    background: #f78009;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
    text-transform: capitalize;
}

.material-icons.md-48{
    font-size: 48px;
}
h1{
    color: #5a5858;
}
</style>