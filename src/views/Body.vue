<template>
  <div class="body-main">
    <Item v-for="item in watchedItemList" :item="item" :key="item.id"></Item>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Item from '@/components/Item.vue';
import {mapGetters} from 'vuex';

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'allItems',
      'itemsOnStatus',
    ],
    ),
  },
})
export default class Body extends Vue {

  public watchedItemList: any[] = [];
  allItems!:any[];
  itemsOnStatus!:any[];

  public created() {
    this.$store.dispatch('initData');
    this.watchedItemList = this.allItems;
  }

  @Watch('$route.params.status')
  public renderItemListByStatus(status: string|undefined) {
    if (!status) {
      this.watchedItemList = this.allItems;
    } else {
      this.watchedItemList = this.itemsOnStatus(status);
    }
  }

}
</script>