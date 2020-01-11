<template>
  <div class="body-main">
    <Item :title="title" :name="name" :id="id"></Item>
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
  id: Number=1
  title:string="Make My Todo App :"
  name:string="this name"
}
</script>