import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from '@/store/interface/item.inteface';
import {AxiosResponse} from 'axios';
import AxiosService from '@/service/axios.service';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    itemList: [],
  },
  mutations: {
    addItemToList(state: State, item: Item) {
      state.itemList.push(item);
    },
    changeItemStatus(state, { id, status }: { id: number, status: 'active' | 'clear' | 'waiting' }) {
      state.itemList[id - 1].status = status;
    },
    removeItem(state, id: number) {
      state.itemList.splice(id - 1, 1);
    },
    setItemList(state, itemList: Item[]) {
      state.itemList = itemList;
    },
  },
  actions: {
    async initData({commit}) {
      const response: AxiosResponse<{itemList: Item[]}> = await AxiosService.instance.get('/sample/todo.json');
      commit('setItemList', response.data.itemList);
    },
  },
  getters: {
    allItems(state) {
      return state.itemList;
    },
    itemsOnStatus: (state) => (status: 'active' | 'clear' | 'waiting') => {
      return state.itemList.filter((item) => item.status == status);
    },
  },
};

export default new Vuex.Store(store);
