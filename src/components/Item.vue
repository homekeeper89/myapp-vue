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
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Item as itemInterface} from '@/store/interface/item.inteface';

@Component({
})
export default class Item extends Vue {
  @Prop() public readonly item!: itemInterface;

  public removeItem() {
    this.$store.commit('removeItem', this.item.id);
  }

  public changeItemStatus($event: Event) {
    const status = $event.target.checked == true ? 'active' : 'clear';
    console.log(status);
    this.$store.commit('changeItemStatus', {id: this.item.id, status});
  }
}
</script>