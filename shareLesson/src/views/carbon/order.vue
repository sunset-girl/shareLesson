<template>
  <div class="content">
    <!-- <div class="title">
      <p @click="expends()"><img src="../image/left.png" alt=""></p>
      <h3>订单详情</h3>
    </div> -->
    <div class="lesson">
      <div class="name">
        <p class="n1">社群名称</p>
        <p class="n2">{{group_name}}</p>
      </div>
      <div class="money">
        <p class="m1">社群金额</p>
        <p class="m2">{{group_intomoney}}</p>
      </div>
      <div class="pay">
        <p class="p1">支付金额</p>
        <p class="p2">{{group_intomoney}}</p>
      </div>
    </div>
  <!--   <div class="favourable">
      <p class="f1">优惠活动</p>
      <p class="f2"><img src="../image/rights.png" alt=""></p>
    </div> -->
    <div class="paymen">
      <!-- <div><p class="p1"><img src="../image/zhifu.png" alt="">支付宝支付</p><input type="radio" name="radio" value="1"></div>
      <div><p class="p2"><img src="../image/6.png" alt="">微信支付</p><input type="radio" name="radio" value="2"></div>
      <div><p class="p3"><img src="../image/1.png" alt="">Apple Pay</p><input type="radio" name="radio" value="3" checked></div> -->
       <div>
         <p class="p2"><img src="../image/6.png" alt="">微信支付</p>
         <div id="check">
            <span><input v-on:change="watchs()" v-model="changes"  type="checkbox" class="input_check" id="check1"><label for="check1"></label></span>
         </div>
       </div>
    </div>
    <button class="button" @click="lessonOrder()">确认</button>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      changes:0,
      group_intomoney:"",
      group_name:""
    }
  },
  created(){
    document.title = "订单详情"
    console.log(document.title)
    this.first()
    // this.xuanran()
  },
  methods: {
    // xuanran(){

    //        let url = "/wappay/makeorder"
    //        let data = {
    //          extinfo:localStorage.getItem('groupid'),
    //          amount: this.group_intomoney,
    //          real_amount: this.group_intomoney,
    //          type:1,
    //          payway:1
    //       }
          // console.log("amount"+data.amount)
          // console.log("real_amount"+data.real_amount)

          //  let url = "http://asteroids.api.chengmikeji.com/api/wappay/makeorder?extinfo="+data.extinfo+"&amount="+data.amount+"&real_amount="+data.real_amount+"&type="+data.type+"&payway="+data.payway+"&Authorization="+ window.localStorage.getItem('token');
          //  window.location.href = "http://asteroids.api.chengmikeji.com/api/wappay/makeorder?extinfo="+data.extinfo+"&amount="+data.amount+"&real_amount="+data.real_amount+"&type="+data.type+"&payway="+data.payway+"&Authorization="+ window.localStorage.getItem('token');

    //        this.$axios.post(url,data).then((res)=>{
    //          console.log("渲染页面"+res.data.msg)
    //        })
    // },
    // expends(){
    //      this.$router.push({
    //        path: '/carbon/expends'
    //     })
    // },
    watchs(){
      // this.changes = !this.change;
      if(this.changes){
        document.getElementsByTagName("button")[0].style.backgroundColor="#ffdd00";
        document.getElementsByTagName("button")[0].style.color="#000";
        this.changes = 1
        console.log("changes"+this.changes)
      }
      else{
        document.getElementsByTagName("button")[0].style.backgroundColor="rgb(221, 221, 221)";
        document.getElementsByTagName("button")[0].style.color="rgb(249, 249, 248)";
        this.changes = 0
        console.log("changes"+this.changes)
      }
    },
    lessonOrder(){
      // console.log(this.changes)
      //  if(this.changes == 1){
      //   this.$router.push({
      //     path: '/carbon/present'
      //   })
      //  }
       if(this.changes == 1){
      if(this.group_intomoney == 0){
           console.log("免费哟")
           let url = "/group/user_add_group"
           let data = {
           group_id:localStorage.getItem('groupid')
          }
           this.$axios.post(url,data).then((res)=>{
             if(res.data.code == 1){
               this.$router.push({
                 path: '/'
               })
             }
             else if(res.data.code == 0){
                this.$router.push({
                 path: '/carbon/login'
               })
             }
              // console.log("加入社群成功"+res.data.code)

           })

      }
      else{
        if(this.isInWx()){     //微信中
              // $("#hint").show();
              // alert("这是微信中")
              let url = "/wappay/makeorder?extinfo="+localStorage.getItem('groupid')+"&amount="+this.group_intomoney+"&real_amount="+this.group_intomoney+"&type=1&4";

             // let data = {
              //     extinfo:localStorage.getItem('groupid'),
              //     amount: this.group_intomoney,
              //     real_amount: this.group_intomoney,
              //     type:1,
              //     payway:1
              //   }
              // this.$axios.get(url).then((res)=>{
                  // console.log("渲染页面"+res.data.msg)
                   window.location.href = "http://asteroids.api.chengmikeji.com/api/wappay/makeorder?extinfo="+localStorage.getItem('groupid')+"&amount="+this.group_intomoney+"&real_amount="+this.group_intomoney+"&type=1&payway=4&Authorization="+ window.localStorage.getItem('token')

                // })
        }
        else{
            // alert("这是微信外")
              let url = "/wappay/makeorder"
              let data = {
                extinfo:localStorage.getItem('groupid'),
                amount: this.group_intomoney,
                real_amount: this.group_intomoney,
                type:1,
                payway:4
              }
              this.$axios.post(url,data).then((res)=>{
                console.log("渲染页面"+res.data.msg)
                window.location.href = res.data.data
              })
         }

          // console.log("amount"+data.amount)
          // console.log("real_amount"+data.real_amount)

          //  let url = "http://asteroids.api.chengmikeji.com/api/wappay/makeorder?extinfo="+data.extinfo+"&amount="+data.amount+"&real_amount="+data.real_amount+"&type="+data.type+"&payway="+data.payway+"&Authorization="+ window.localStorage.getItem('token');
          //  window.location.href = "http://asteroids.api.chengmikeji.com/api/wappay/makeorder?extinfo="+data.extinfo+"&amount="+data.amount+"&real_amount="+data.real_amount+"&type="+data.type+"&payway="+data.payway+"&Authorization="+ window.localStorage.getItem('token');



            // console.log("微信中")
              // if(publicFun.isInWx()){     //微信中
              //     $("#hint").show();
              //     console.log("这是微信中")

              //   }
              //   else{
              //     console.log("这是微信外")
              //   }

        }
      // console.log(this.changes)

       }
    },
    isInWx(){
            var agent = window.navigator.userAgent.toLowerCase();
            return agent.match(/MicroMessenger/i) == 'micromessenger';
        },
    //     isInIos(){
    //         var userAgentInfo = navigator.userAgent ,
    //             Agents = ["iPhone" , "iPad", "iPod"];
    //         for(var v = 0; v < Agents.length; v++) {
    //             if (userAgentInfo.indexOf(Agents[v]) > 0) {
    //               return true;
    //             }
    //         }
    //         return false;
    //     }
    // },
    // startApp(){
    //      if(this.isInWx()){     //微信中
    //         $("#hint").show();

    //     }
    //     else if(this.isInIos()){
    //         openApp('SmallPlanet://'+ GetRequest()['id'],function(opened){
    //             if ( opened == 0){
    //                 window.location.href = 'https://itunes.apple.com/cn/app/id1403690439?mt=8'
    //             }
    //         })
    //     }
    //     else{
    //         openApp('asteroid_group://'+ GetRequest()['id'],function(opened){
    //             if ( opened == 0){
    //                 window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.study.ansteroid&channel=0002160650432d595942&fromcase=60001'
    //             }
    //         })
    //     }
    // },

     //购买课程前页面接口
    first(){
       // let data = {group_id:localStorage.getItem("groups")}
        let data = {group_id:localStorage.getItem('groupid')}
        console.log("class de id shi"+localStorage.getItem("groups"))
        let url = "/group/add_group_first"
        this.$axios.post(url,data).then((res)=>{
            this.group_name = res.data.data.group_name
            this.group_intomoney = res.data.data.group_intomoney
            console.log("group_intomoney"+this.group_intomoney)
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
      // .title{
      //   background: #fff;
      //   margin-bottom:20px;
      //   line-height: 13px;
      //   overflow: hidden;
      //   padding:0 33px 0 30px;
      //   font-size: 36px;
      //   color: #333333;
      //   p img{
      //     float:left;
      //     width: 19px;
      //     height: 32px;
      //     margin-top:30px;
      //   }
      // }
      .lesson{
         background: #fff;
         margin:0 0 10px 0;
         padding:0 33px 0 30px;
         font-size: 28px;
         line-height: 100px;
         color: #323232;
         .name,.money,.pay{
           border-bottom: 1px solid #dfdfdf;
           overflow: hidden;
           .n1,.m1,.p1{
             float: left;
           }
           .n2,.m2,.p2{
             float:right;
             color: #999999;
           }
         }
         .pay{
           border:0;
         }
      }
      .favourable{
        background: #fff;
        margin-bottom:10px;
        line-height: 100px;
        overflow: hidden;
        padding:0 33px 0 30px;
        font-size: 28px;
        .f1{
          float: left;
        }
        .f2{
          float:right;
          width: 19px;
          height: 33px;
          img{
            width: 19px;
            height: 32px;
          }
        }
      }
      .paymen{
        background: #fff;
        line-height: 100px;
        font-size: 28px;
        overflow: hidden;
        padding:0 33px 0 30px;
         p{
           float: right;
         }
        .p2{
          float: left;
          margin-right: 429px;
          img{
            width: 37px;
            height: 36px;
            margin-right: 29px;
          }
        }



      }
      button{
        position:absolute;
        bottom:0;
        width: 690px;
      	height: 100px;
        font-size: 36px;
        line-height: 13px;
        color: #323232;
        background-color: rgb(221, 221, 221);
        color:rgb(249, 249, 248);
	      // box-shadow: 0px 4px 18px 0px rgba(255, 179, 0, 0.4);
	      border-radius: 16px;
        left:0%;
        border:0;
        margin:0 30px 60px 30px;
      }
  }
  #check {margin: 20px auto;}
  #check .input_check {position: absolute;width: 42px;height: 42px;visibility: hidden;}
  #check span {position: relative;}
  #check .input_check+label {display: inline-block;width: 42px;height: 42px;background: url('../image/gou.png') no-repeat;background-position: -101px 0px;border: 1px solid #999;
      border-radius:50%;
  }
  #check .input_check:checked+label {background-position:center;  background-size:42px 42px; }
</style>


