<template>
  <div class="content">
    <!-- <div class="title">
      <p @click="order()"><img src="../image/left.png" alt=""></p>
      <h3>课程</h3>
    </div> -->
     <div class="lesson" @click="present()">
      <div class="les1"></div>
      <div class="les2">
        <p class="theles">夏季游泳练习班</p>
        <p class="thr">
           课程介绍文字说明课程介绍文字说明程介文字说明
        </p>
      </div>
     </div>
     <!-- <div class="lesson" @click="yujia()"  v-for="item in lists" :key="item.id">
      <div class="les1"><img :src="item.group_avater" alt=""></div>
      <div class="les2">
        <p class="theles">{{item.group_name}}</p>
        <p class="thr">
           {{item.group_introduction}}
        </p>
      </div>
     </div> -->
     <div class="lesson" @click="present()">
      <div class="les1"><img src="../image/inters.png" alt=""></div>
      <div class="les2">
        <p class="theles">舞蹈兴趣基础班</p>
        <p class="thr">
           课程介绍文字说明课程介绍文字说明程介文字说明
        </p>
      </div>
     </div>
      <div class="lesson"  @click="yujia()">
      <div class="les1"></div>
      <div class="les2">
        <p class="theles">夏季游泳练习班</p>
        <p class="thr">
           课程介绍文字说明课程介绍文字说明程介文字说明
        </p>
      </div>
     </div>
     <div class="lesson" @click="present()">
      <div class="les1"><img src="../image/yujiao.png" alt=""></div>
      <div class="les2">
        <p class="theles">瑜伽进阶班</p>
        <p class="thr">
           课程介绍文字说明课程介绍文字说明程介文字说明
        </p>
      </div>
     </div>
     <div class="lesson" @click="yujia()">
      <div class="les1"><img src="../image/inters.png" alt=""></div>
      <div class="les2">
        <p class="theles">舞蹈兴趣基础班</p>
        <p class="thr">
           课程介绍文字说明课程介绍文字说明程介文字说明
        </p>
      </div>
     </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lists:[],
    }
  },
  created(){
    document.title = "课程"
    console.log(document.title)
    this.my_two_level()
  },
  methods: {
    order(){
      this.$router.push({
        path: '/carbon/order'
      })
    },
    present(){
      this.$router.push({
        path: '/carbon/present'
      })
    },
    yujia(){
      this.$router.push({
        path: '/carbon/yujia'
      })
    },
    my_two_level(){
      let url = "/group/my_two_level?page=1"
      this.$axios.get(url).then((res) =>{
        this.lists = res.data.data.list
        console.log(res.data.data.list)
        //  res.data.data.list.map((val,key)=>{
             console.log(val.group_name)
        //    })
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
     background:#fff;
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
        overflow: hidden;
        padding:31px 20px 0 19px;
        background-color: #f7f8f9;
        margin:20px 30px;
        border-radius:10px;
        .les1{
          float: left;
          width: 168px;
          height: 126px;
          background-color: #eaeaea;
          border-radius: 20px;
          margin-right: 25px;
          img{
            width: 100%;
          }
        }
        .les2{
          .theles{
            overflow: hidden;
            font-size: 28px;
            float: left;
            margin-bottom:22px;

          }

          .thr{
            float: left;
            width: 450px;
            font-size: 24px;
            color: #999;
            text-align: left;
            line-height: 40px;
            margin-bottom: 30px;
          }
        }

      }


  }

</style>


