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
        <div class="Cont1"><img src="../image/icon_person_nor.png" alt=""><span>1234</span></div>
        <div class="Cont2"><img src="../image/icon_zan_sel.png" alt=""><span>65</span></div>
        <div class="Cont3"><img src="../image/icon_bi_nor.png" alt=""><span>1248</span></div>
      </div>
    </div>
    <div class="teachers">
      <div class="teach1"><img src="../image/teacher.png" alt=""></div>
      <div class="teach2"><p>朱斜阳</p><span>金牌讲师</span></div>
    </div>
    <div class="bottoms">
      <div class="frees">
        <img src="../image/icon_bi_nor.png" alt="">
        <span>128</span>
      </div>  
      <button class="glods" @click="order()">立即参与</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      coursename:"",
      introduction:"",
      course_cover:"",
      praise_num:"",
      people_num:"",
      gift_num:"",
      visitprice:"",
      member_avater:"",
      member_nickname:""
    }
  },
created(){
  this.detailcourse()
  document.body.style.backgroundColor = "rgb(244, 244, 244)"
},
  methods: {
    order(){
      this.$router.push({
        path: '/carbon/order'
      })
    },
     GetRequest() {
	   var url = location.search; //获取url中"?"符后的字串
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	      }
	   }
	   return theRequest;
  	},
     detailcourse(){
      //  var baseUrl = "http://asteroids.api.todoaso.cn"
      // $().ready(function(){
      //   $.ajax({
      //     url:baseUrl+"/index/index/share?type=2&id=" +  GetRequest()['id'],
      //     async:false,
      //     type:"get",
      //     success:function(res){
      //       var data = res.data
      //       $('body').show()
      //       $('.course_cover').attr('src',data.course_cover)
      //       $('.course_name').text(data.course_name)
      //       $('.course_introduction').text(data.course_introduction)
      //       $('.people font').text(data.course_people_num)
      //       $('.focus font').text(data.course_praise_num)
      //       $('.universe font').text(data.course_gift_num)
      //       $('.member_avater').attr('src',data.member_avater)
      //       $('.member_nickname').text(data.member_nickname)
      //       $('.jin').text(data.jin)
      //     }
      //   });
      // })

        let url = "/index/index/share?type=2&id=" +  this.GetRequest()['id']
        console.log("yo")
        this.$axios.get(url).then((res)=>{
          console.log(res.data.code)
             this.coursename = res.data.data.coursename
             this.introduction = res.data.data.introduction
             this.praise_num = res.data.data.praise_num
             this.people_num = res.data.data.people_num
             this.gift_num = res.data.data.gift_num
             this.visitprice = res.data.data.visitprice
             this.member_avater = res.data.data.member_avater
             this.member_nickname = res.data.data.member_nickname
        })
    },

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
          position: relative;
          img{
            width: 33px;
            position: absolute;
            left:-24px;
            top: 0px;

          }
          margin:0 250px 0 24px;
        }
         .Cont2{
           position: relative;
           margin-right: 260px;
          img{
            width: 30px;
            height: 26px;
            position: absolute;
            left:-34px;
            top: 4px;
          }
        }
        .Cont3{
          position: relative;
          img{
            width: 33px;
            position: absolute;
            left:-34px;
            top: 4px;
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
      margin:0px 0 35px 72px;
      float: left;
      img{
        width: 33px;
        position: absolute;
        top:40px;
        left:30px;
      }
      span{
        font-size:28px;
        color: #999999;
        display: inline-block;
        margin-top:40px;
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


