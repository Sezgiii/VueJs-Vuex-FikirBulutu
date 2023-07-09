import { createStore } from 'vuex'
import belgelerGetir from "../composables/belgelerGetir"
import belgeIslem from "../composables/belgeIslem"

const {error, documents } = belgelerGetir("fikirler")
const {ekle,sil,hata} = belgeIslem("fikirler")

export default createStore({
  state: {
    fikirler:documents,
  },
  getters: {
  },
  mutations: {
    ekleMutation(state,fikir){
      let fikirN ={
        fikirAd : fikir,
      }

      ekle(fikirN)
    },

    silMutation(state,id){
      sil(id)
    }
  },
  actions: {
    fikirEkleAction(context,fikir){
      context.commit("ekleMutation", fikir)
    },
    fikirSilAction(context,id){
      context.commit("silMutation", id)
    }
  },
  modules: {
  }
})
