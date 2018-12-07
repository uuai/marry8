<template>
  <div>
    <div class="home-nav" v-if="appear">
      <div class="temp"></div>
      <ul class="header-ul">
        <router-link tag="li" v-for="(item,index) in navArr" :key="index" :to="item.href" @click.native="headerNav(index)">
          <span :class="navIndex==index?'tabbarActive':'headerspan'">{{item.navitem}}</span>
        </router-link>
      </ul>
      <app-search :is-show="0"></app-search>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Search from "./Search"
  export default {
    name: "index",
    data() {
      return {
        appear: true,
        navIndex: 1,
        navArr: [{
          navitem: "关注",
          href: "/attention"
        }, {
          navitem: "发现",
          href: "/find"
        }, {
          navitem: "附近",
          href: "/nearby"
        }],
        issearch: false
      }
    },
    components: {
      "app-search":Search
    },
    methods: {
      headerNav: function (index) {
        this.navIndex = index
      },
    }
  }
</script>

<style scoped>
  .header-ul {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 33px;
    line-height: 33px;
    background: #fff;
    z-index: 1;
    font-size: 12px;
  }
  .temp {
    width: 100%;
    height: 34px;
  }
  .headerspan {
    color: #989898;
  }

  .tabbarActive {
    color: #e55583;
  }
</style>
