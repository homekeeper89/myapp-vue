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
      <span class="input-group-addon" id="basic-addon1">입력</span>
      <input
        type="text"
        class="form-control"
        placeholder="username"
        aria-describedby="basic-addon1"
        data-cy="header-input-name"
        v-model="username"
      />
      <input
        type="text"
        class="form-control"
        placeholder="title"
        aria-describedby="basic-addon1"
        v-model="title"
        v-on:keyup.enter="addItem"
        data-cy="header-input-title"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Item } from '@/store/interface/item.inteface';

@Component
export default class Header extends Vue {
  headerTitle: string = "My Todo Project";
  headerSubTitle: string = "Type what You do";
  username:string = ""
  title:string =""

  addItem(){
    let item = {
      name:this.username,
      title:this.title,
      status:"waiting",
      id:this.$store.state.itemList.length + 1
    }
    this.$store.commit('addItemToList', item)
  }
}
</script>