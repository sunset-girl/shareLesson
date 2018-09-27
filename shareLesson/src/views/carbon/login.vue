<template>
  <div class="content">
    <div class="favourable">
      <p class="f1">+86 <img src="../image/triangle.png" alt=""><input type="text" placeholder="请输入手机号" v-model="mobile"></p>
      <p class="f2"><input type="password" placeholder="请输入密码" v-model="passwords"></p>
      <p @click="goregister()" class="regist">注册</p>
    </div>
     <button class="nexts" @click="goSofty()">登录</button>

  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      passwords:"",
      mobile:"",
      code:""
    }
  },
  created(){
    // this.getParam()

  },
  methods: {

    // getParam(){
    //     this.mobile = this.$route.query.mobile
    //     this.code = this.$route.query.code
    // },
    goSofty(){
      if(this.passwords != ""){
        let url = "/login/login"

        let data = {
          username: this.mobile,
          password: this.passwords
        }
        this.$axios.post(url,data).then((res)=>{
          console.log(res.data.data.auth)
          localStorage.setItem("token",res.data.data.auth)
          // console.log(localStorage.getItem("token"))
          // this.$router.push({
          //   path: '/'
          // })
       let data = {course_id:localStorage.getItem('ids')}
       let url = "/course/detailcourse"
        // console.log("xixi" + data.course_id)
        this.$axios.post(url,data).then((res)=>{
          // console.log(res.data.msg)
            localStorage.setItem("groups",res.data.data.is_group_user)
            console.log("shequn"+res.data.data.is_group_user)
           // Toast(res.data.data.is_group_user);
            if(res.data.data.is_group_user == 1){
              console.log("不需要加入课程")
               this.$router.push({
                   path: '/'
               })
            }
            else{
              console.log("需要加入课程")
               this.$router.push({
                   path: '/carbon/softy'
               })
            }
        })
        })
      }
      else{
        alert("请设置密码")
      }
    },
    goregister(){
      this.$router.push({
         path: '/carbon/register'
      })
    }
  }
}
</script>
<style lang="scss" scoped>

  p{
    padding:0;
    margin:0;
  }
  .content{
    outline: none !important;
    width: 100%;
    height: 100%;
    background:#fff;
    .favourable{
        background: #fff;
        margin-bottom:10px;
        line-height: 100px;
        overflow: hidden;
        padding:324px 90px 20px 89px;
        font-size: 28px;
        color: #999;
         .f1{
          border-bottom:1px solid rgb(245, 245, 245);
          text-align: left;
          font-size: 32px;
          position: relative;
          margin-bottom:20px;
          img{
            width: 16px;
            height: 8px;
            position: absolute;
            top:45px;
            left:64px;
          }
          input{
            margin-left:50px;
            width: 322px;
            line-height: 50px;
            border:0;
            font-size: 32px;
            padding-left:10px;
            outline:none;
          }
           input::-webkit-input-placeholder {
                  /* placeholder颜色  */
                  color: rgb(217, 217, 217);
                  /* placeholder字体大小  */
                  font-size: 32px;
                  /* placeholder位置  */
              }
        }
        .f2{
          border-bottom:1px solid rgb(245, 245, 245);
          text-align: left;
          font-size: 32px;
          position: relative;
          margin-bottom: 15px;
          img{
            width: 16px;
            height: 8px;
            position: absolute;
            top:45px;
            left:64px;
          }
          input{
            width: 100%;
            line-height: 90px;
            border:0;
            font-size: 32px;
            padding-left:10px;
            outline: none;
          }
           input::-webkit-input-placeholder {
                  /* placeholder颜色  */
                  color: #ccc;
                  /* placeholder字体大小  */
                  font-size: 32px;
                  /* placeholder位置  */
              }
        }
      }
   .nexts{
          width: 570px;
          height: 100px;
          font-size: 36px;
          line-height: 13px;
          color: #323232;
          background-color: #ffdd00;
          border-radius: 16px;
          border:0;
          margin:37px 30px 18px 30px;
   }
   .regist{
      font-size:32px;
      float: right;
	    color: #ffb300;
      margin-top: -5%;
   }

  }

</style>


