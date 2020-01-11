import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {State, Item} from '@/store/interface/item.inteface';

Vue.use(Vuex)

const store :StoreOptions<State> = {
  state:{ 
    itemList:[]
  },
  mutations:{
    addItemToList(state:State, item:Item){
      state.itemList.push(item);
    },
    changeItemStatus(state, {id, status}:{id:number, status:"active"|"clear"|"waiting"}){
      state.itemList[id].status = status;
    },
    removeItem(state, id:number){
      state.itemList.splice(id,1);
    }
  },
  actions:{

  },
  getters:{
    getAllItem(state){
      return state.itemList;
    },
    getItemOnStatus(state, status:"active"|"clear"|"waiting"){
      return state.itemList.filter((item)=>item.status === status);
    }
  }
}

export default new Vuex.Store(store)