<template>
  <div>
    <search :is-show="isShow"></search>
    <p class="searchTitle">查找可能感兴趣的会员</p>
    <div class="search-com">
      <ul class="attention-search-box">
        <li class="attention-list" v-for="(item,index) in searchArr" :key='index'>
          <div class="list-img">
            <img :src="item.img" alt="">
          </div>
          <div class="obj-num">
            <p class="attentionObj">{{item.attentionObj}}</p>
            <p class="attentionNum">{{item.attentionNum}}关注</p>
          </div>
          <button v-if="item.isattention" class="search-list-btn" @click="addAttention(item)">+关注</button>
          <button v-else class="search-list-btn" @click="addAttention(item)">已关注</button>
        </li>
      </ul>

    </div>
    <!--未关注展示-->
    <div v-if="searchArr<=0" class="not">
      <div class="notImg">
        <img src="../../../static/img/not.png" alt="">
      </div>
      <p>快去搜索！！！</p>
    </div>
  </div>
</template>

<script>
    import Search from "../Search"
    export default {
        name: "search-details",
      data() {
        return {
          isShow:0,
          searchArr: [
            {
              img: require('../../../static/img/delflow1.png'),
              attentionObj: '策划',
              attentionNum: 123,
              isattention: true,
            },
            {
              img: require('../../../static/img/delflow1.png'),
              attentionObj: '策划',
              attentionNum: 123,
              isattention: false,
            }
          ]
        }
      },
      components: {
        'search': Search
      },
      created(){
        this.isShow = this.$route.query.isAppear;
      },
      methods: {
        addAttention: function (data) {
          if (data.isattention) {
            data.isattention = !data.isattention
          } else {
            data.isattention = !data.isattention
          }
        }
      }
    }
</script>

<style scoped>
  .searchTitle {
    width: 100%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 8px;
    font-size: 11px;
    background: #fff;
    margin: 5px 0;
  }
  .attention-list {
    display: flex;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .list-img {
    width:40px;
    height:40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 10px;
  }
  .list-img >img{
    width: 100%;
    height: 100%;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .obj-num {
    flex-grow:1;
    font-size: 15px;
  }
  .attentionNum {
    font-size: 11px;
    color: #888;
  }
  .attentionObj {
    margin-bottom: 10px;
    font-size: 11px;
  }
  .search-list-btn {
    width: 50px;
    height: 23px;
    line-height:23px;
    background:#e55583 ;
    color: #fff;
    border-radius: 5px;
    font-size: 10px;
    outline: none;
  }
</style>
