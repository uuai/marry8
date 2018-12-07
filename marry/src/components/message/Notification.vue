<template>
  <div class="Notification-wrap">
    <ul class="Notification-ul">
      <li class="Notification-li" @click="goZan">
        <span>获赞和收赞</span>
        <span class="circle"></span>
      </li>
      <li class="Notification-li" @click="gopl">
        <span>评论</span>
        <span class="circle"></span>
      </li>
      <li class="Notification-li" @click="gogz">
        <span>关注</span>
        <span class="circle"></span>
      </li>
      <li class="Notification-li" @click="goxx">
        <span>通知消息</span>
        <span class="circle"></span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "notification",
      methods:{
        goZan:function () {
          this.$router.push("/notice")
        },
        gopl:function () {
          this.$router.push("/notice")
        },
        gogz:function () {
          this.$router.push("/notice")
        },
        goxx:function () {
          this.$router.push("/system")
        }
      }
    }
</script>

<style scoped>
  .Notification-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    line-height: 40px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 12px;
    position: relative;
  }
  .Notification-li:before{
    position: absolute;
    right:3px;
    top: 50%;
    transform: translateY(-50%) rotateZ(-90deg);
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: url("./static/img/arrow.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

  }
  .circle {
    display: inline-block;
    width: 8px;
    height: 8px;
    background:#e55583 ;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
