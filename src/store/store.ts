import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/interface/item.inteface';

Vue.use(Vuex)

const store: StoreOptions<State> = {
  state: {
    itemList: [
      {
        id: 1,
        title: "Make My Todo App :",
        name: "this name",
        status: 'active',
      },
      {
        id: 2,
        title: 'Make My Service',
        name: 'this is my name',
        status: 'active',
      },
      {
        id: 3,
        title: 'Do something good for me',
        name: 'this is my name',
        status: 'clear',
      }
    ]
  },
  mutations: {
    addItemToList(state: State, item: Item) {
      state.itemList.push(item);
    },
    changeItemStatus(state, { id, status }: { id: number, status: "active" | "clear" | "waiting" }) {
      state.itemList[id-1]['status'] = status;
    },
    removeItem(state, id: number) {
      state.itemList.splice(id-1, 1);
    }
  },
  actions: {

  },
  getters: {
    allItems(state) {
      return state.itemList;
    },
    itemsOnStatus:(state)=>(status: "active" | "clear" | "waiting")=>{
      return state.itemList.filter((item)=>item.status == status);
    }
  }
}

export default new Vuex.Store(store)