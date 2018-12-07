<template>
  <div class="ReleasePhoto">
    <div class="textarea-list">
      <p class="textarea-title">添加标题:</p>
      <textarea maxlength="30" class="textarea-title-com" @input="descInput" v-model.trim="desc"></textarea>
      <p class="textNum">{{remnant}}/30字</p>
    </div>
    <div class="textarea-list" style="margin-top: 10px;padding-bottom: 12px">
      <p class="textarea-title">说说你的心得吧~</p>
      <textarea class="textarea-experience"></textarea>
    </div>
    <div class="Release-wrap">
      <div class="ReleaseChoose">
        <button @click="ReleaseChoose(0)" type="button" :class="chooseIndex==0?'btnactive':''">公开</button>
        <button @click="ReleaseChoose(1)" type="button" :class="chooseIndex==1?'btnactive':''">私密</button>
      </div>
      <div class="unpload">
        <p class="textarea-title">上传图片</p>
        <ul class="fileUpWrap">
          <li v-for="(item,index) in fileUp" :key="index" class="fileImg">
            <img :src="item" alt>
          </li>
          <li class="fileImg">
            <van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
              <img class="add" src="/static/img/add.png" alt>
            </van-uploader>
          </li>
        </ul>
      </div>
      <p class="textarea-title">选择发布频道</p>
      <ul class="releaseType">
        <li
          v-for="(item,index) in releaseType"
          @click="onRelease(index)"
          :class="typeIndex==index?'ontype':''"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
    <div class="temp"></div>
    <div class="ReleaseFooter">
      <button class="cancelRelease">取消</button>
      <button class="ReleaseConfirm">发布日记</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "release-photo",
  data() {
    return {
      remnant: 30,
      desc: "",
      fileUp: [
        require("../../../static/img/delflow1.png"),
        require("../../../static/img/delflow2.png"),
        require("../../../static/img/delflow3.png")
      ],
      chooseIndex: 0,
      typeIndex: 0,
      releaseType: ["策划", "策划2", "策划3", "策划4", "策划5", "策划6"]
    };
  },
  methods: {
    descInput: function() {
      var txtVal = Number(this.desc.length);
      if (txtVal <= this.remnant) {
        this.remnant = 30 - txtVal;
      }
    },
    onRead(file) {
      console.log(file);
      if (file) {
        this.fileUp.push(file.content);
      }
    },
    ReleaseChoose: function(i) {
      this.chooseIndex = i;
    },
    onRelease: function(i) {
      this.typeIndex = i;
    }
  }
};
</script>

<style scoped>
/*发布照片*/
.textarea-list {
  background: #fff;
  box-sizing: border-box;
  padding: 0 12px;
}
.textarea-title {
  height: 30px;
  line-height: 30px;
  font-size: 11px;
}
.textarea-list > textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 11px;
  resize: none;
  display: block;
}
.textarea-title-com {
  height: 50px;
}
.textNum {
  height: 30px;
  line-height: 30px;
  text-align: right;
  font-size: 11px;
  color: #888;
}
.Release-wrap {
  background: #fff;
  box-sizing: border-box;
  padding: 0 12px;
}
.textarea-experience {
  height: 100px;
}
.ReleaseChoose {
  width: 100%;
  text-align: right;
}
.ReleaseChoose > button {
  width: 40px;
  height: 20px;
  border: 1px solid #f1f1f1;
  font-size: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  outline: none;
}
.ReleaseChoose > .btnactive,
.releaseType > .ontype {
  background: #e55583;
  color: #fff;
}
.releaseType {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.releaseType > li {
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  padding: 4px 8px;
  margin: 0 5px 5px 0;
  font-size: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.fileUpWrap {
  display: flex;
  flex-wrap: wrap;
}
.fileImg {
  width: 24%;
  height: 70px;
  margin: 5px 0.5% 0;
}
.van-uploader {
  width: 100%;
  height: 100%;
}
.fileImg > img,
.add {
  width: 100%;
  height: 100%;
  display: block;
}
.add {
  object-fit: contain;
}
.fileImg > img {
  object-fit: cover;
}
.ReleaseFooter {
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 11px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ccc;
}
.cancelRelease {
  width: 30%;
}
.ReleaseConfirm {
  width: 70%;
  height: 100%;
  background: #e55583;
  color: #fff;
}
</style>
