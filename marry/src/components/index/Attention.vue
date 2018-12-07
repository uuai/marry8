<template>
  <div class="attention-wrap">
    <ul class="attention-ul">
      <li v-for="(item,index) in attention" :key="index" @click="attentionDetails">
        <div class="attentionImg">
          <img :src="item.src" alt="">
        </div>
        <p class="position">{{item.position}}</p>
        <p class="advisory">{{item.advisory}}</p>
        <p class="fanNumDiary">
          <span>{{item.fanNum}}粉丝</span>
          <span>{{item.diary}}日记</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "attention",
      data() {
        return {
          attention: [
            {
              src: require('../../../static/img/delflow1.png'),
              position: '婚礼策划师',
              advisory: "梦幻巴黎婚礼",
              fanNum: 2,
              diary: 2,
            },
            {
                src: require('../../../static/img/delflow1.png'),
              position: '婚礼策划师',
              advisory: "梦幻巴黎婚礼",
              fanNum: 2,
              diary: 2,
            },
            {
              src: require('../../../static/img/delflow1.png'),
              position: '婚礼策划师',
              advisory: "梦幻巴黎婚礼",
              fanNum: 2,
              diary: 2,
            }
          ]
        }
      },
      methods: {
        attentionDetails: function () {
          this.$router.push("/attentionDetails");
          console.log(this.$router)
          //vm.$emit('showpublic', {type: 'tabbar'})
        }
      },
    }
</script>

<style scoped>
  .attention-wrap {
    box-sizing: border-box;
    padding: 5px;
  }
  .attention-ul {
    display: flex;
  }
  .attention-ul>li{
    flex: 1;
    width: 31%;
    box-sizing: border-box;
    border:1px solid #f1f1f1;
    padding: 10px;
    background: #fff;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .attention-ul>li:nth-child(2n){
    margin:0 2%;
  }
  .attentionImg {
    width: 45px;
    height: 45px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 auto;
  }
  .attentionImg>img{
    width: 100%;
    height: 100%;
    display: block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .advisory,.position {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    text-align: center;
  }
  .advisory{
    color: #989898;
    font-size: 10px;
  }
  .fanNumDiary {
    color: #989898;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    font-size: 10px;
  }
</style>
