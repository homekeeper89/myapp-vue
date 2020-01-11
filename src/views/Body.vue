<template>
  <div class="body-main">
    <Item v-for="item in watchedItemList" :item="item" :key="item.id"></Item>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Watch} from 'vue-property-decorator';
import Item from '@/components/Item.vue'

@Component({
  components:{
    Item
  }
})
export default class Body extends Vue{
  items:any[]=[{
      id:1,
      title:"Make My Todo App :",
      name:"this name",
      status:'active',
    },
    {
      id:2,
      title:'Make My Service',
      name:'this is my name',
      status:'active',
    },
    {
      id:3,
      title:'Do something good for me',
      name:'this is my name',
      status:'clear',
    }
  ]

  watchedItemList:any[] = this.items;

  @Watch("$route.params.status")
  renderItemListByStatus(status:string|undefined){
    if(!status){
      this.watchedItemList = this.items;
      return;
    }
    this.watchedItemList = this.items.filter((item)=>item.status == status)
  }

}
</script>