<template>
  <div class="item-main">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" :checked="item.status=='active'">
      </span>
      <input type="text" class="form-control" :value="item.title + item.name" id="item.id"/>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">X</button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
})
export default class Item extends Vue {
  @Prop() readonly item!:any[];
}
</script>