<template>
  <div class="content">
    <div class="favourable">
      <p class="f1">+86 <img src="../image/triangle.png" alt=""><input type="text" placeholder="请输入手机号" v-model="phones"></p>
      <p class="f2"><input type="text" placeholder="请输入验证码" v-model="yanzhen"> <button>发送</button></p>
    </div>
    <div class="paymen">

    </div>
     <button class="nexts" @click="passwords()">下一步</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      yanzhen: "",
      phones: "",
    }
  },
  methods: {
    passwords(){
      if(this.phones !== ""){
        if( this.yanzhen !== ""){
          this.$router.push({
            path: '/carbon/password'
          })
        }
        else{
          alert("请输入验证码")
        }
      }
      else {
        alert("请输入手机号")
      }


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
    width: 100%;
    height: 100%;
    background:#fff;
    .favourable{
        background: #fff;
        margin-bottom:10px;
        line-height: 100px;
        overflow: hidden;
        padding:100px 90px 34px 89px;
        font-size: 28px;
        color: #999;
        .f1,.f2{
          border-bottom:1px solid rgb(245, 245, 245);
          text-align: left;
          font-size: 32px;
          position: relative;
          img{
            width: 16px;
            height: 8px;
            position: absolute;
            top:45px;
            left:64px;
          }
          input{
            margin-left:50px;
            width: 392px;
            line-height: 50px;
            border:0;
            font-size: 32px;
            padding-left:10px;
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
          margin-top:20px;
          input{
            margin:0;
          }
          button{
            	width: 94px;
	            height: 50px;
	            background-color: #ffdd00;
	            border-radius: 8px;
              border:0;
              font-size: 24px;
              color:#000;
              float: right;
              margin-top:20px;
              line-height: 50px;
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

  }

</style>


