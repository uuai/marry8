<template>
  <div>
    <div class="my-page">
      <img class="my-bg" :src="mybg" alt="">
      <div class="my-wrap">
        <div class="myUser">
          <img :src="myUser" alt="">
        </div>
        <p class="myName">{{detailsName}}</p>
        <div class="my-box">
          <div class="my-list">
            <p>{{gz}}</p>
            <p>关注</p>
          </div>
          <div class="my-list">
            <p>{{fs}}</p>
            <p>粉丝</p>
          </div>
          <div class="my-list">
            <p>{{zasc}}</p>
            <p>获赞与收藏</p>
          </div>
        </div>
        <div class="fileBg">
          <img src="../../static/img/mybg.png" alt="">
          <input type="file" size="20">
        </div>
      </div>
    </div>
    <div class="my-header">
      <button class="my-Attention" @click="edit">编辑个人资料</button>
      <p class="my-region-box">
        <span class="my-region">江苏南京</span>
      </p>
      <p class="my-signature">想留不能留才最寂寞</p>
    </div>
    <div>
      <div class="my-content">
        <span class="my-conTitle">日记</span>
        <span class="my-num">12</span>
        <p class="my-group">
          <span @click="chooseType(0)" type="button" :class="isType==0?'chooseActive':''">全部</span>
          <span @click="chooseType(1)" type="button" :class="isType==1?'chooseActive':''">公开</span>
          <span @click="chooseType(2)" type="button" :class="isType==2?'chooseActive':''">私密</span>
        </p>
      </div>
    </div>
    <!--瀑布流-->
    <flow></flow>
  </div>
</template>

<script>
  import Flow from "./Flow"
    export default {
        name: "my",
      data() {
        return {
          myUser:require('../../static/img/delflow1.png') ,
          mybg:require('../../static/img/delflow1.png') ,
          detailsName: '还是我',
          gz: 22,
          fs: 22,
          zasc: 2222,
          isType:-1,
        }
      },
      methods: {
        chooseType:function (i) {
          this.isType = i
        },
        edit: function () {
            this.$router.push("/edit")
        }
      },
      components:{
          'flow':Flow
      }
    }
</script>

<style scoped>
  .my-page {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .my-page >.my-bg{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .my-wrap{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .fileBg {
    position: absolute;
    top: 10px;
    right: 15px;
    width: 18px;
    height: 14px;
  }
  .fileBg>img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .fileBg>input[type='file'] {
    display: inline-block;
    width: 22px;
    height: 18px;
    position: absolute;
    top: 0;
    right: 25px;
    opacity: 0;
    font-size: 12px;
  }
  .myUser {
    width: 55px;
    height:55px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 20px auto 10px;
    border: 1px solid #e55583;
    box-shadow: 0 0 5px #fff;
  }
  .myUser>img{
    width: 100%;
    height: 100%;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    object-fit: cover;
  }
  .myName {
    text-align: center;
    color: #fff;
  }
  .my-box {
    color: #fff;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 25px 0;
    font-size: 11px;
  }
  .my-list {
    flex: 1;
    text-align: center;
    border-right: 1px solid #fff;
  }
  .my-list>p:nth-child(2){
    margin-top: 5px;
  }
  .my-list:nth-child(3){
    border-right: none;
  }
  .my-header {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    padding: 5px 0;
  }
  .my-Attention {
    display: block;
    width: 80px;
    height: 23px;
    line-height: 23px;
    box-sizing: border-box;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    font-size: 10px;
    outline: none;
    margin: 0 auto;
  }
  .my-region-box {
    text-align: center;
    font-size: 11px;
  }
  .my-region{
    display: inline-block;
    position: relative;
    padding-left: 10px;
    margin:10px auto;
  }
  .my-region:after{
    position: absolute;
    top: 0px;
    left: -7px;
    content: '';
    display: block;
    width: 13px;
    height:13px;
    background: url("./static/img/region.png") no-repeat left center;
    background-size: 100% 100%;
  }
  .my-signature {
    text-align: center;
    font-size: 10px;
  }
  .my-content {
    width: 100%;
    height: 35px;
    line-height: 35px;
    box-sizing: border-box;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 11px;
    background: #fff;
    padding: 0 10px;
  }
  .my-conTitle {
    border-left: 2px solid #e55583;
    padding-left: 15px;
  }
  .my-num{
    display: inline-block;
    position: relative;
    padding-left: 15px;
  }
  .my-num:after {
    content: '';
    display: block;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background:#e55583 ;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .my-group {
    float: right;
  }
  .my-group>span[type='button']{
    box-sizing: border-box;
    padding: 4px 8px;
    border: 1px solid #f1f1f1;
    font-size: 10px;
    outline: none;
  }
  .my-group>.chooseActive{
    background: #e55583;
    color: #fff;
  }
</style>
