<template>
  <div class="content">
    <div class="imgs">
      <img src="../image/header.png" alt="">
    </div>
    <div class="LesCont">
      <p>课程介绍文字说明课程介绍文字说明程介绍文说明课程介绍文字
          说明课程介绍课程介绍文字说明课程介绍文字说明程介绍文说明
          课程介绍文字说明课程介绍
      </p>
      <div class="Conts">
        <div class="Cont1"><img src="../image/icon_person_sel.png" alt=""><span>1234</span></div>
        <div class="Cont2"><img src="../image/icon_zan_nor.png" alt=""><span>65</span></div>
        <div class="Cont3"><span>1248</span></div>
      </div>
    </div>
    <div class="teachers">
      <div class="teach1"><img src="../image/teacher.png" alt=""></div>
      <div class="teach2"><p>朱斜阳</p><span>金牌讲师</span></div>
    </div>
   <div class="bottoms">
      <div class="frees">
        <span>免费</span>
      </div>

      <button class="glods" @click="order()">立即参与</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){
    document.body.style.backgroundColor = "rgb(244, 244, 244)"
  },
  methods: {
     order(){
      this.$router.push({
        path: '/carbon/lessonOrder'
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
    width: 100%;
    height: 100%;
    background:rgb(244, 244, 244);
    .imgs{
      img{
        width: 750px;
        height: 348px;
      }
    }
    .LesCont{
      width: 672px;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0px;
      color: #999999;
      padding: 34px 42px 15px 28px;
      font-size: 24px;
      text-align: left;
      background: #fff;
      .Conts{
        overflow: hidden;
        margin-top: 29px;
        .Cont1,.Cont2,.Cont3{
          float: left;
        }
        .Cont1{
          img{
            width: 32px;
            height: 32px;
            position: absolute;
            top:0;
            left:-22px;
          }
          position: relative;
          margin-right:259px;
        }
         .Cont2{
           margin-right: 256px;
           position: relative;
          img{
            width: 30px;
            height: 26px;
            position: absolute;
            left:-34px;
            top: 5px;
          }
        }
      }
    }
     .teachers{
        background: #fff;
        margin-top: 10px;
        overflow: hidden;
        .teach1{
          float:left;
          img{
              width: 100px;
              height: 100px;
              margin:30px 25px 30px 30px;
          }
        }
        .teach2{
            float: left;
            p{
              font-size: 36px;
              color: #323232;
              margin:43px 0 17px 0;
            }
            span{
              font-size: 24px;
            	color: #999999;
            }
          }
      }
  }
   .bottoms{
    position: absolute;
    bottom:0;
    width: 100%;
    height: 98px;
    background: #fff;
    .frees{
      display: inline-block;
      margin:30px 0 35px 78px;
      float: left;
      img{
        width: 33px;
        height: 23px;
      }
      span{
        font-size:28px;
        color: #999999;
      }
    }
    .glods{
      border:0;
      width: 533px;
      height: 98px;
      font-size: 28px;
      float: right;
      overflow: hidden;
      background: url("../image/tab.png") no-repeat;
      background-size: 533px 98px;
    }

  }
</style>


