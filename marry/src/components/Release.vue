<template>
  <div v-show="appearRelease==0">
    <van-actionsheet
      v-model="show"
      cancel-text="取消"
      :actions="actions"
      @select="onSelect"/>
  </div>
</template>

<script>
  import bus from "../assets/eventBus"
    export default {
        name: "release",
      props: ['appear'],
      data() {
        return {
          appearRelease: 0,
          show: false,
          actions: [{
            name: '从相册中选择',
            className: 'van-active',
            id: 0,
          },
            {
              name: '拍摄',
              className: 'van-active',
              id: 1,
            },
          ]
        };
      },
      mounted: function() {
        bus.$on('cahngeRelease', function(data) {
          if (data == 1) {
            this.show = true;
          }
        }.bind(this))
      },
      methods: {
        openRelease: function() {
          this.show = true;
        },
        onSelect(item) {
          if (item.id == 0) {
            this.$router.replace("/releasePhoto")
            console.log('从相册中选择')
          } else {
            this.$router.replace("/releaseVideo")
            console.log('拍摄')
          }
          // 点击选项时默认不会关闭菜单，可以手动关闭
          this.show = false;
        }
      },
      watch: {
        appear: function(n) {
          this.tabbarShow = n;
        }
      }
    }
</script>

<style>
  /*发布  此处页面css为全局*/
  .van-actionsheet__name{
    color: #e55583 !important;
  }
</style>
