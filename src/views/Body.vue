<template>
  <div class="body-main">
    <Item v-for="item in items" :item="item" :key="item.id"></Item>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
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
    }
  ]
}
</script>