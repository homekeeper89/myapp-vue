import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {State, Item} from '@/store/interface/item.inteface';

Vue.use(Vuex);

const store:StoreOptions<State> = {
  state:{
    itemList:[]
  },
  mutations:{},
  actions:{},
  getters:{}
}

export default new Vuex.Store(store)