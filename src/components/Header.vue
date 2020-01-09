<template>
  <div class="header-main">
    <div class="page-header">
      <h1>{{headerTitle}}<small>{{headerSubTitle}}</small></h1>
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">@</span>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  headerTitle:string = "My Todo Project";
  headerSubTitle:string = "Type what You do"

}
</script>