<template>
  <div class="waterfallsFlow clear">
    <ul class="flow-left" id="flowLeft">
      <li v-for="(item,index) in itemsA" :key="index" @click="flowDetails">
        <div class="flowImg">
          <img :src="item.src">
        </div>
        <p class="flowText">{{item.flowText}}</p>
        <div class="userInfo">
          <div class="userImg">
            <img :src="item.userImg" alt="">
          </div>
          <div @click="awesome(item)">
            <img class="zan" src="../../static/img/zan.png" alt="">
            <span>{{item.zan}}</span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="flow-right" id="flowRight">
      <li  v-for="(item,index) in itemsB" :key="index" @click="flowDetails">
        <div class="flowImg">
          <img :src="item.src">
        </div>
        <p class="flowText">{{item.flowText}}</p>
        <div class="userInfo">
          <div class="userImg">
            <img :src="item.userImg" alt="">
          </div>
          <div @click="awesome(item)">
            <img class="zan" src="../../static/img/zan.png" alt="">
            <span>{{item.zan}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['findIndex'],
    name: "flow",
    data() {
      return {
        waterfallsFlow: [
          {
            src: require('../../static/img/delflow1.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          },
          {
            src: require('../../static/img/delflow2.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg:require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          },
          {
            src: require('../../static/img/delflow3.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          },
          {
            src: require('../../static/img/delflow4.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          }, {
            src: require('../../static/img/delflow4.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          },
          {
            src: require('../../static/img/delflow2.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          },
          {
            src: require('../../static/img/delflow3.png'),
            flowText: "梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼",
            userImg: require('../../static/img/deluserImg.png'),
            usernmae: "懒猫",
            isawesome: false,
            zan: 0,
          }

        ],
        itemsB: [],
        itemsA: [],
        flowIndex:this.findIndex
      }
    },
    watch:{
       findIndex:function(n){
          this.flowIndex = n
       }
    },
    mounted: function () {
      this.getData();
      console.log(this.flowIndex)
    },

    methods: {
      getImg: function (url, callback) {
        var img = new Image();
        img.src = url;
        if (img.compltet) {
          callback(img.width, img.height, Number(img.height) / Number(img.width));
        } else {
          img.onload = function () {
            callback(img.width, img.height, Number(img.height) / Number(img.width));
          }
        }
      },
      //瀑布流展示
      getData() {
        let boxA = document.getElementsByClassName('flow-left')[0].clientHeight;
        let boxB = document.getElementsByClassName('flow-right')[0].clientHeight;
        var list = this.waterfallsFlow;
        var that = this;
        for (var i = 0, len = list.length; i < len; i++) {
          (function (j) {
            that.getImg(list[j].src, function (w, h, r) {
              boxA = document.getElementsByClassName('flow-left')[0].clientHeight;
              boxB = document.getElementsByClassName('flow-right')[0].clientHeight;
              if (boxA > boxB) {
                that.itemsB.push(list[j])
              } else {
                that.itemsA.push(list[j])
              }
            })
          })(i)
        }
      },
      //点赞
      awesome(item) {
        if (!item.isawesome) {
          item.isawesome = !item.isawesome
          item.zan++
        } else {
          item.isawesome = !item.isawesome
          item.zan--
        }
      },
      flowDetails:function () {
        this.$router.push("/flowDetails")
      }
    }

  }
</script>

<style scoped>
  .clear:after {
    content: '';
    display: block;
    clear: both;
  }

  .flow-left, .flow-right {
    float: left;
    width: 49%;
    border-radius: 0 0 5px 5px;
  }

  .flow-left > li, .flow-right > li {
    margin-top: 5px;
    background: #fff;
    box-shadow: 0 0 1px 1px #cacaca;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
  }

  .flow-right {
    margin-left: 2%;
  }

  .flowImg {
    width: 100%;
  }

  .flowImg > img {
    width: 100%;
    display: block;
  }

  .flowText {
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
  }

  .userInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;
    padding-bottom: 8px;
  }

  .userImg {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .userImg > img {
    width: 100%;
    height: 100%;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

  }

  .zan {
    width: 15px;
    height: 15px;vertical-align:middle;

  }
  .zan+span{
    vertical-align: middle;
  }
</style>
