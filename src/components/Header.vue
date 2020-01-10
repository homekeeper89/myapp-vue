<template>
  <div class="header-main">
    <div class="page-header header-main__title">
      <h1>
        {{headerTitle}}
        <small>{{headerSubTitle}}</small>
      </h1>
    </div>
    <div class="header-main__nav">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active">
          <router-link to="/">All</router-link>
        </li>
        <li role="presentation">
          <router-link to="/active">Active</router-link>
        </li>
        <li role="presentation">
          <router-link to="/clear">clear</router-link>
        </li>
      </ul>
    </div>
    <div class="input-group header-main__inputGroup">
      <span class="input-group-addon" id="basic-addon1">@</span>
      <input
        type="text"
        class="form-control"
        placeholder="username"
        aria-describedby="basic-addon1"
        data-cy="header-input-name"
      />
      <input
        type="text"
        class="form-control"
        placeholder="title"
        aria-describedby="basic-addon1"
        data-cy="header-input-title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  headerTitle: string = "My Todo Project";
  headerSubTitle: string = "Type what You do";
}
</script>