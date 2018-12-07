<template>
  <div class="System-wrap">
    <ul class="System-ul">
      <li class="System-li" v-for="(item,index) in arr"  @click="toggleSystem(index)" :key="index" >
        <div class="System-title">
          <p>{{item.systemType}}</p>
          <p>{{item.data}}</p>
        </div>
        <transition name="mysystem">
          <div class="systemCom">{{item.systemCom}}</div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "system",
      data(){
        return {
          arr :[
            {
              systemType:'获赞和收赞',
              data:'2018',
              systemCom:"你的赞上千啦！巴拉巴拉巴拉巴拉巴拉巴拉",
            },
            {
              systemType:'评论',
              data:'2017',
              systemCom:"你的赞上千啦！巴拉巴拉巴拉巴拉巴拉巴拉"
            }
          ],
          showAll:false,
        }
      },
      mounted:function () {

      },

      methods:{
        toggleSystem:function (index) {
          var systemCom = document.getElementsByClassName("systemCom")[index];
          var h = systemCom.getBoundingClientRect().height;
          if(this.showAll){
            console.log("auto");
            systemCom.style.height = "auto";
            this.showAll =!this.showAll;
          }else {
            console.log("0");
            systemCom.style.height = "0";
            this.showAll =!this.showAll;
          }
        },
      }
    }
</script>

<style scoped>
  .System-li {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    background: #ffffff;
    box-sizing: border-box;
    padding: 8px;
  }
  .System-title {
    font-size: 11px;
    position: relative;
  }
  .System-title:before{
    position: absolute;
    right:0;
    top: 50%;
    transform: translateY(-50%) rotateZ(-90deg);
    content: '';
    display: block;
    width: 23px;
    height: 23px;
    background: url("./static/img/arrow.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

  }
  .System-title>p:nth-child(2){
    color: #888;
    margin: 10px 0 15px;
  }
  .systemCom {
    font-size: 11px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .mysystem-leave-active,.mysystem-enter-active{
    transition:  all 1s ease;
  }
  .mysystem-leave-active,.mysystemx-enter{
    height:0px !important;
  }
</style>
