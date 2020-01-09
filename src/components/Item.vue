<template>
  <div class="item-main">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="...">
      </span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">X</button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Item extends Vue {}
</script>