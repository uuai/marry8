<template>
  <div>
    <div class="editInfo">
      <div class="editImg">
         <img :src="infoImg" alt="">
      </div>
      <span>用户昵称</span>
      <van-uploader class="editFile" :after-read="onRead"></van-uploader>
    </div>
    <van-cell-group>
      <van-field type="text" v-model="username" label="昵称" placeholder="请输您的昵称" />
      <van-field  type="text" readonly v-model="sex"  label="性别" placeholder="请选择性别" @click="openSex" />
    </van-cell-group>
    <van-cell-group style="margin-top: 5px;">
      <van-field type="text"  readonly v-model="dateTime"  label="生日" placeholder="请选择时间" @click="openDateTime" />
      <van-field type="text"  readonly v-model="area"  label="地址" placeholder="请选择地址" @click="openArea" />
      <van-field type="text"  v-model="signature"  label="签名" placeholder="请输入你的签名" />
    </van-cell-group>
    <!--性别-->
       <van-popup v-model="sexPicker"  position="bottom" :overlay="true">
            <van-picker  show-toolbar :columns="sexColumns" @change="onsexChange" @confirm="closeSex"
                        @cancel="cancelSex"/>
       </van-popup>
    <!--时间-->
    <van-popup v-model="dataTimePicker" position="bottom" :overlay="true">
      <van-datetime-picker  v-model="currentDate" type="date" :min-date="minDate" :formatter="formatter"
                            @change="dataTimeChange" @confirm="closedataTime" @cancel="canceldataTime"/>
    </van-popup>
    <!--地址-->
    <van-popup v-model="areaPicker" position="bottom" :overlay="true">
      <van-area :area-list="areaList" @confirm="closeArea" @cancel="cancelArea" @change="areaChange" />
    </van-popup>
    <div class="saveGroup">
      <button class="saveForm" type="button" @click="saveForm">保存</button>
    </div>
  </div>
</template>

<script>
    import area from "../../../static/area/area"
    export default {
        name: "edit",
      data() {
        return {
          infoImg: require('../../../static/img/deluserImg.png'),
          username:"",
          signature: '',
          //性别
          sex: "男",
          sexPicker: false,
          sexColumns: ['男', '女', '保密'],
          //时间
          dateTime: "",
          minDate: new Date(1950, 1, 1),
          currentDate: new Date(),
          dataTimePicker: false,
          //地区
          areaPicker: false,
          area: '',
          areaList: area
        }
      },
     methods:{
       // 上传头像
       onRead(file) {
         if(file){
           this.infoImg =file.content;
         }

         console.log(file)
       },
       //性别
       openSex: function () {
         this.sexPicker = true
       },
       onsexChange(picker, value, index) {
         this.sex = value
       },
       closeSex: function (value, index) {
         this.sexPicker = value
         this.sexPicker = false
       },
       cancelSex: function () {
         this.sexPicker = false
       },
       //地区
       openArea: function () {
         this.areaPicker = true
       },
       areaChange(picker, values) {
         if (picker != null) {
           this.area = picker.getValues()[0].name + picker.getValues()[1].name + picker.getValues()[2].name;
         }
       },
       closeArea: function (value) {
         console.log(value)
         if (value != null) {
           this.area = value[0].name + value[1].name + value[2].name;
         } else {
           this.area = value;
         }
         this.areaPicker = false
       },
       cancelArea: function () {
         this.areaPicker = false
       },
       //时间
       openDateTime: function () {
         this.dataTimePicker = true
       },
       formatter(type, value) {
         if (type === 'year') {
           return `${value}年`;
         } else if (type === 'month') {
           return `${value}月`
         } else if (type === 'day') {
           return `${value}日`
         }
         return value;
       },
       dataTimeChange: function (picker, value, index) {
         var dateArr = picker.getValues()[0] + picker.getValues()[1] + picker.getValues()[2]
         this.dateTime = dateArr
       },
       closedataTime: function (value) {
         if (value !== null && typeof value === 'object') {
           let year = value.getFullYear()
           let month = value.getMonth() + 1
           let date = value.getDate()
           this.dateTime = `${year}年${month}月${date}日`
         } else {
           this.dateTime = value
         }
         this.dataTimePicker = false
       },
       canceldataTime: function () {
         this.dataTimePicker = false
       },
       // 保存
       saveForm: function (e) {
         if(!this.username){
           this.$toast({
             message: "昵称不能为空",
             type:'text'
           })
         }else if (!this.dateTime) {
           this.$toast({
             message: "请选择生日",
             type:'text'
           })
         } else if (!this.area) {
           this.$toast({
             message: "请选择地区",
             type:'text'
           })
         } else {
           console.log(this.dateTime, this.area)
         }
         e.preventDefault();
       }
     }
    }
</script>

<style scoped>
  .editInfo {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    background: #fff;
    font-size: 11px;
  }
  .editImg {
    width: 40px;
    height: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 10px;

  }
  .editImg >img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .editInfo:after{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform:translateY(-50%) rotateZ(-90deg);
    width: 20px;
    height: 20px;
    background: url("/static/img/arrow.png") no-repeat center right;
    background-size: 100% 100%;
  }
  .editFile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .editFile >input[type='file']{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    opacity: 0;
  }
  .saveGroup {
    width: 100%;
    margin-top: .4rem;
  }
  .saveForm {
    display: block;
    width:150px;
    height: 30px;
    background: #e55583;
    color: #fff;
    font-size: 12px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: 0 auto;
  }

</style>
