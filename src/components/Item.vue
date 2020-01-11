<template>
  <div class="item-main">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" :checked="item.status=='active'" @change="changeItemStatus">
      </span>
      <input type="text" class="form-control" :value="item.title + item.name" id="item.id"/>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem">X</button>
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

  removeItem() {
    console.log(this.item.id);
    this.$store.commit('removeItem',this.item.id);
  }

  changeItemStatus($event:Event) {
    let status = $event.target.checked == true ? "active" : "clear";
    console.log(status);
    this.$store.commit("changeItemStatus", {id:this.item.id, status:status});
  }
}
</script>