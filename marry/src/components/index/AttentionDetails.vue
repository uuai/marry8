<template>
  <div>
  <div class="detailsWrap2">
    <img class="bg" :src="bg" alt="">
    <div class="detailsBox">
      <div class="detailsUser">
        <img :src="detailsUser" alt="">
      </div>
      <p class="detailsName">{{detailsName}}</p>
      <div class="details-box2">
        <div class="details-list">
          <p>{{gz}}</p>
          <p>关注</p>
        </div>
        <div class="details-list">
          <p>{{fs}}</p>
          <p>粉丝</p>
        </div>
        <div class="details-list">
          <p>{{zasc}}</p>
          <p>获赞与收藏</p>
        </div>
      </div>
    </div>
  </div>
  <div class="details-header2">
    <button v-if="isAttention" class="detail-Attention" @click="addAttention">取消关注</button>
    <button v-else class="detail-Attention2" @click="addAttention">+关注</button>
    <p class="details-region">
      <span class="region">江苏南京</span>
    </p>
    <p class="details-signature">想留不能留才最寂寞</p>
  </div>
  <div>
    <p class="details-content">
      <span class="conTitle">日记</span>
      <span class="num">12</span>
    </p>
  </div>
  <!--瀑布流-->
  <flow></flow>
  </div>
</template>

<script>
  import Flow from '../Flow'
    export default {
        name: "attention-details",
      data() {
        return {
          bg: require('../../../static/img/delflow1.png'),
          detailsUser: require('../../../static/img/delflow1.png'),
          detailsName: '还是我',
          gz: 22,
          fs: 22,
          zasc: 2222,
          isAttention: true,
        }
      },
      components: {
        'flow': Flow
      },
      methods: {
        addAttention: function () {
          this.isAttention = !this.isAttention
        }
      }
    }
</script>

<style scoped>
  .detailsWrap2 {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .detailsWrap2 >.bg{
    width: 100%;
    height: 100%;
  }
  .detailsBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .detailsUser {
    width: 55px;
    height:55px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 15px  auto ;
    border: 1px solid #e55583;
    box-shadow: 0 0 5px #fff;
  }
  .detailsUser>img{
    width: 100%;
    height: 100%;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .detailsName {
    text-align: center;
    color: #fff;
  }
  .details-box2 {
    color: #fff;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 25px 0;
    font-size: 11px;
  }
  .details-list {
    flex: 1;
    text-align: center;
    border-right: 1px solid #fff;
  }
  .details-list>p:nth-child(2){
    margin-top: 5px;
  }
  .details-list:nth-child(3){
    border-right: none;
  }
  .details-header2 {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    padding: 5px 0;
  }
  .detail-Attention {
    display: block;
    width: 80px;
    height: 23px;
    line-height: 23px;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    font-size: 10px;
    outline: none;
    margin: 0 auto;
  }
  .detail-Attention2 {
    display: block;
    width: 80px;
    height: 23px;
    line-height: 23px;
    background:#e55583 ;
    color: #fff;
    border-radius: 5px;
    font-size: 10px;
    outline: none;
    margin: 0 auto;
  }
  .details-region {
    text-align: center;
    font-size: 11px;
  }
  .region{
    display: inline-block;
    position: relative;
    padding-left: 10px;
    margin:10px auto;
  }
  .region:after{
    position: absolute;
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
  .details-signature {
    text-align: center;
    font-size: 10px;
  }
  .details-content {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 11px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .conTitle {
    border-left: 2px solid #e55583;
    padding-left: 15px;
  }
  .num{
    display: inline-block;
    position: relative;
    padding-left: 15px;
  }
  .num:after {
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
</style>
