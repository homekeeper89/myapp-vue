<template>
  <div class="body-main">
    <Item></Item>
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
  
}
</script>