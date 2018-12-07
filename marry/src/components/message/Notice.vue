<template>
  <div>
      <div class="NoticeChild-wrap" v-for="(item,index) in arr" :key='index'>
        <div class="NoticeChildImg">
          <img :src="item.img" alt="">
        </div>
        <div class="NoticeChild-Com">
          <p>{{item.name}}</p>
          <p>{{item.num}}人关注你的图片</p>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "notice",
      data(){
        return {
          arr :[
            {
              img:require('../../../static/img/delflow1.png'),
              name:"图片名称",
              num:"312"
            },
            {
              img:require('../../../static/img/delflow1.png'),
              name:"图片名称",
              num:"312"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .NoticeChild-wrap{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
  }
  .NoticeChildImg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .NoticeChildImg>img{
    width: 100%;
    height:  100%;
    display: block;
  }
  .NoticeChild-Com {
    flex: 1;
  }
  .NoticeChild-Com>p:nth-child(1){
    margin-bottom: 15px;
    font-size: 13px;
  }
  .NoticeChild-Com>p:nth-child(2){
    color: #888;
    font-size: 11px;
  }
</style>
