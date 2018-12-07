<template>
  <div class="details-wrap">
     <van-swipe class="carouselWrap" :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(item,index) in carousel" :key="index">
        <img class="carouselImg" :src="item" alt="轮播">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ carouselIndex + 1 }}/4
      </div>
    </van-swipe>
    <div class="info">
      <div>
        <img class="infoImg" :src="info.img" alt="">
        <span class="username">{{info.username}}</span>
      </div>
      <button v-if="info.isattention" class="attentionBtn" @click="attentionBtn">+关注</button>
      <button v-else class="attentionBtn" @click="attentionBtn">取消关注</button>
    </div>
    <div class="infoDetails">
      <P class="infoSignature">{{info.signature}}</P>
      <p class="signatureCom">{{info.signature}}</p>
      <div>
        <span class="infoTime">{{info.infoTime}}</span>
        <p class="commentZan">
          <span>{{info.keep}}收藏</span>
          <span style="margin-left: 10px">{{info.zan}}点赞</span>
        </p>
      </div>
    </div>
    <div class="comment">
      <ul class="comment-wrap">
        <li class="commentLi" v-for="(item,index) in comment" :key="index">
          <img class="commentImg" :src="item.img" alt="">
          <div class="coment-com">
            <p class="userComment">{{item.userComment}}</p>
            <p class="commentCom">{{item.commentCom}}</p>
            <p class="commentData">{{item.commentData}}</p>
            <ul>
              <li class="commentLi" v-for="(r,index) in item.reply" :key="index">
                <img class="commentImg" :src="item.img" alt="">
                <div class="coment-com">
                  <p class="userComment">
                    <span>{{r.userComment}}</span>
                    <span style="color: #333;">回复</span>
                    <span>{{item.userComment}}</span>
                  </p>
                  <p class="commentCom">{{r.commentCom}}</p>
                  <p class="commentData">{{r.commentData}}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <p class="seeAll">查看全部88条评论</p>
    <div class="Popular">
      <p class="PopularTitle">
        <span class="titleText">热门日记</span>
      </p>
      <!--瀑布流-->
      <flow></flow>
      <div class="temp"></div>
    </div>
    <div class="slider">
      <div class="slider-home" @click="goHome">
        <img class="sliderIcon" src="../../../static/img/silder-home.png" alt="">
        <span>首页</span>
      </div>
      <div class="slider-share">
        <img class="sliderIcon" src="../../../static/img/silder-share.png" alt="">
        <span>分享</span>
      </div>
      <div class="slider-footer">
        <div v-if="ispl" class="slider-box">
          <div class="slider-footer-list" @click="sliderzan">
            <img v-if="iszan" src="../../../static/img/silder-zan2.png" alt="">
            <img v-else src="../../../static/img/silder-zan.png" alt="">
            <span>点赞&nbsp;{{zan}}</span>
          </div>
          <div class="slider-footer-list" @click="sliderpl">
            <img src="../../../static/img/slider-pl.png" alt="">
            <span>评论&nbsp;{{pl}}</span>
          </div>
          <div class="slider-footer-list" @click="slidersc(0)">
            <img v-if="issc" class="silder-sc" src="../../../static/img/silder-sc2.png" alt="">
            <img v-else class="silder-sc" src="../../../static/img/silder-sc.png" alt="">
            <span>收藏&nbsp;{{sc}}</span>
          </div>
        </div>
        <div v-else class="commentInput">
          <input autofocus type="text" placeholder="输入你的评论">
          <button type="button" class="commentsend" @click="commentsend">发送</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Flow from "../Flow"
    export default {
        name: "flow-details",
      data() {
        return {
          imgHeight: null,
          carouselIndex:0,
          carousel: [
            require('../../../static/img/delflow1.png'),
            require('../../../static/img/delflow2.png'),
            require('../../../static/img/delflow3.png'),
          ],
          info: {
            img: require('../../../static/img/deluserImg.png'),
            username: '时尚前沿',
            isattention: false,
            signature: '梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼',
            signature2: '梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼梦幻巴黎婚礼',
            infoTime: "2018-11-10",
            zan: "1",
            keep: "2"
          },
          comment: [
            {
              img: require('../../../static/img/deluserImg.png'),
              userComment: "此乃用户",
              commentCom: "好好看",
              commentData: "8102-11-23",
              reply: [
                {
                   img: require('../../../static/img/deluserImg.png'),
                  userComment: "此乃昵称",
                  commentCom: "好好看",
                  commentData: "8102-11-23",
                }
              ]
            }
          ],
          zan: 0,
          iszan: true,
          pl: 0,
          ispl: true,
          sc: 0,
          issc: true,
        }
      },
      components: {
        'flow': Flow
      },
      methods: {
        onChange(index) {
          this.carouselIndex = index;
        },
        //关注
        attentionBtn: function (index) {
          if (!this.info.isattention) {
            this.info.isattention = !this.info.isattention
          } else {
            this.info.isattention = !this.info.isattention
          }
        },
        //点赞
        sliderzan: function () {
          this.zan = this.iszan ? this.zan + 1 : this.zan - 1;
          this.iszan = !this.iszan;
        },
        //收藏
        slidersc: function () {
          this.sc = this.issc ? this.sc + 1 : this.sc - 1;
          this.issc = !this.issc;
        },
        //评论
        sliderpl: function () {
          this.ispl = !this.ispl
        },
        //发送
        commentsend: function () {
          this.ispl = !this.ispl
        },
        goHome:function () {
          this.$router.push("/")
          console.log('去首页')
        }
      }
    }
</script>

<style scoped>
  .details-wrap {
    width: 100%;
  }
  .carouselWrap {
    width: 100%;
    height: 180px;
    position: relative;
  }
  .custom-indicator {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
  }
  .carouselImg {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    background: #fff;
  }
  .infoImg {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border: 1px solid #e55583;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    object-fit: cover;
  }
  .username{
    display: inline-block;
    vertical-align: middle;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .attentionBtn {
    width: 60px;
    height: 20px;
    border: 1px solid #e55583;
    color:#e55583;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 10px;
    outline: none;
  }
  .infoDetails {
    box-sizing: border-box;
    padding:  6px 10px;
    background: #fff;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 10px;
  }
  .infoSignature {
    height: 30px;
    line-height:30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .signatureCom {
    margin-bottom: 11px;
    color: #888;
    font-size: 11px;
    line-height: 18px;
  }
  .commentZan {
    float: right;
    font-size: 10px;
  }
  .infoTime ,.commentZan{
    color: #888;
    font-size: 10px;
  }
  .commentLi {
    display: flex;
    font-size: 10px;
    background: #fff;
    box-sizing: border-box;
    padding:10px;
  }
  .commentImg {
    width: 35px;
    height:35px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 10px;
  }
  .coment-com {
    flex: 1;
  }
  .coment-com >p{
    margin-bottom: 10px;
    font-size: 10px;
  }
  .userComment {
    color: #2F4289;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
  }
  .commentData {
    font-size: 10px;
    color: #888;
  }
  .seeAll {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 10px;
    text-align: center;
    background: #fff;
    color: #888;
  }
  .PopularTitle {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    font-size: 12px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .titleText {
    border-left: 2px solid #e55583;
    padding-left: 15px;
  }
  .slider-home ,.slider-share{
    width: 36px;
    height: 36px;
    background: rgba(0,0,0,0.5);
    position: fixed;
    bottom: 45px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: #fff;
  }
  .slider-home {
    left: 10px;
  }
  .slider-share {
    right: 10px;
  }
  .sliderIcon {
    display: inline-block;
    width: 13px;
    height:13px;
    margin-bottom: 5px;
  }
  .slider-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
  }
  .slider-box{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .slider-footer-list {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #fff;
  }
  .slider-footer-list>img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .slider-footer-list>span{
    vertical-align: middle;
  }
  .slider-footer-list>.silder-sc {
    width: 35px;
    height: 35px;
  }
  .commentInput {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background: #fff;
    display: flex;
  }
  .commentInput>input{
    flex: 1;
    font-size: 12px;
    outline: none;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .commentsend {
    width: 60px;
    height: 30px;
    background:#e55583 ;
    color: #fff;
    font-size: 12px;
    margin-left: .1rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    outline: none;
  }
  .temp{
    width: 100%;
  }
</style>
