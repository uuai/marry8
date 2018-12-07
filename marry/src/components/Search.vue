<template>
  <div class="search">
    <div class="search-input" @click="searchPage">
      <img class="searchImg" src="../../static/img/search.png" alt="搜索">
      <input v-show="isShow==0" disabled type="text" placeholder="搜索你感兴趣的内容">
      <input v-show="isShow==1" autofocus type="text" placeholder="搜索你感兴趣的内容">
    </div>
    <div class="search-box">
      <div v-show="isShow==0" class="notice" @click="goNoyic">
        <img src="../../static/img/notice.png" alt="">
        <span class="noticeNum">{{noticeNum}}</span>
      </div>
      <div v-show="isShow==1"  class="cancelBtn"><span>取消</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    props:['isShow'],
    data() {
      return {
        isAppear:0,
        noticeNum: 2,
      }
    },
    watch:{
      isShow:function (n) {
        this.isAppear = n;
      },
    },
    methods: {
      searchPage: function () {
        var name = this.$router.history.current.name;
        console.log(name)
        if(name=="nearbyLink" || name == "findLink" || name=="attentionLink"){
          this.$router.push(
            {
              path:'/search/details',
              query:{
                isAppear:1,
              }
            });
        }

      },
      goNoyic:function () {
        var name = this.$router.history.current.name;
        if(name=="nearbyLink" || name == "findLink" || name=="attentionLink"){
          this.$router.push("/notification");
        }

      }
    },
  }
</script>

<style scoped>
  .search {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 8px;
    background: #fff;
  }

  .search-input {
    flex: 1;
    display: flex;
    box-sizing: border-box;
    padding: 5px 8px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    background: #f1f1f1;
  }

  .search-input > input {
    flex: 1;
    width: 100%;
    background: transparent;
    border: none;
    padding-left:10px;
    outline: none;
    font-size: 11px;
  }

  .searchImg {
    width: 14px;
    height: 14px;
  }

  .notice {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .notice > img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .noticeNum {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    box-sizing: border-box;
    background: #e55583;
    border-radius: 50px;
    font-size: 10px;
    color: #fff;
  }
  .cancelBtn {
    width:35px;
    font-size: 12px;
    text-align: right;
    color: #989889;
  }
</style>
