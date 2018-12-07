<template>
  <div v-show="tabbarShow">
    <div class="tabbar">
      <router-link :to="{name:'indexLink'}" tag="div" class="tabberList" @click.native="tabbarList(0)">
        <div class="tabbaricon">
          <img v-show="tabbarIndex==0" src="../../static/img/tabbaricon2.png" alt="首页">
          <img v-show="tabbarIndex!=0" src="../../static/img/tabbaricon1.png" alt="首页">
        </div>
        <span :class="tabbarIndex==0?'tabbarActive':''">首页</span>
      </router-link>
      <li  class="tabberList" @click="tabbarList(1)">
        <div class="tabbaricon">
          <img v-show="tabbarIndex==1" src="../../static/img/tabbaricon4.png" alt="发布">
          <img v-show="tabbarIndex!=1" src="../../static/img/tabbaricon3.png" alt="发布">
        </div>
        <span :class="tabbarIndex==1?'tabbarActive':''">发布</span>
      </li>
      <router-link :to="{name:'myLink'}" tag="div" class="tabberList" @click.native="tabbarList(2)">
        <div class="tabbaricon">
          <img v-show="tabbarIndex==2" src="../../static/img/tabbaricon6.png" alt="我的">
          <img v-show="tabbarIndex!=2" src="../../static/img/tabbaricon5.png" alt="我的">
        </div>
        <span :class="tabbarIndex==2?'tabbarActive':''">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import bus from "../assets/eventBus"
  export default {
    name: "tabbar",
     props:['appear'],
    data(){
      return{
        tabbarIndex: 0,
        tabbarShow: this.appear
      }
    },
    methods:{
      tabbarList: function (index) {
        if(index==1){
          bus.$emit('cahngeRelease',1);
          console.log(index)
        }
        this.tabbarIndex = index
      },
    },
    watch:{
      appear:function (n) {
        console.log("执行了")
         this.tabbarShow = n
       }
    }
  }
</script>

<style scoped>
  .tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 3px 0;
    background: #fff;
    border-top: 1px solid #f1f1f1;
  }
   .temp {
     width: 100%;
     height: 55px;
   }
  .tabberList {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }

  .tabbaricon {
    width: 21px;
    height: 21px;
  }

  .tabbaricon > img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .tabbarActive {
    color: #e55583;
  }
</style>
