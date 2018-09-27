<template>
  <div class="content">
    <div class="boxs" style="position:fixed;z-index:100;width:100%;height:100%;background:rgba(0,0,0,0.5); display: block">
      <div class="boxs-son">
        <h1>温馨提示</h1>
        <p class="joins">
          该课程需要加入[ <span>{{group_name}}</span> ]才能学习,现在加入吗?
        </p>
        <p>
          <button class="fir" @click="takes()">加入</button>
          <!-- <button @click="notakes()">取消</button> -->
        </p>
      </div>
    </div>
    <div class="imgs">
      <!-- <img src="../image/header.png" alt=""> -->
      <img v-bind:src="course_cover" />
      <h1 class="clNames">{{coursename}}</h1>
    </div>
    <div class="LesCont">
      <p>{{introduction}}</p>
      <div class="Conts">
        <div class="Cont1"><img src="../image/icon_person_nor.png" alt=""><span>{{people_num}}</span></div>
        <div class="Cont2"><img src="../image/icon_zan_sel.png" alt=""><span>{{praise_num}}</span></div>
        <div class="Cont3"><img src="../image/icon_bi_nor.png" alt=""><span>{{gift_num}}</span></div>
      </div>
    </div>
    <div class="listpic">
      <div class="pics" v-for="items in piclist" :key="items.id">
        <img :src="items.img_url" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coursename: "",
      introduction: "",
      course_cover: "",
      praise_num: "",
      people_num: "",
      gift_num: "",
      visitprice: "",
      member_avater: "",
      member_nickname: "",
      is_purchase: "",
      ids: '',
      piclist: [],
      softys: '',
      group_name: ''
    }
  },
  created() {
    document.title = "加入社群"
    document.body.style.backgroundColor = "rgb(156, 155, 160)"
    this.group_details()
    this.detailcourse()
    this.pics()
  },
  methods: {
    pics() {
      let url = "/course/detailcourse"
      let data = { course_id: localStorage.getItem("ids") }
      this.$axios.post(url, data).then((res) => {
        this.piclist = res.data.data.piclist
      })
    },
    detailcourse() {
      let data = { course_id: localStorage.getItem('ids') }
      let url = "/course/detailcourse"
      // console.log("xixi" + data.course_id)
      this.$axios.post(url, data).then((res) => {
        // console.log(res.data.msg)
        this.coursename = res.data.data.coursename
        this.introduction = res.data.data.introduction
        this.praise_num = res.data.data.praise_num
        this.people_num = res.data.data.people_num
        this.course_cover = res.data.data.course_cover
        this.gift_num = res.data.data.gift_num
        this.visitprice = res.data.data.visitprice
        this.member_avater = res.data.data.member_avater
        this.member_nickname = res.data.data.member_nickname
        this.is_purchase = res.data.data.is_purchase
        console.log(res.data.msg);
        localStorage.setItem("groups", res.data.data.is_group_user)
        localStorage.setItem("clsssOders", res.data.data.group_id)
        console.log("is_purchase" + this.is_purchase)
      })
    },
    group_details(){
      let url = "/group/share_group"
      let data = {group_id:localStorage.getItem('groupid')}
      this.$axios.post(url,data).then((res)=>{
        console.log("group_details"+res.data.msg)
        this.group_name = res.data.data.group_name
      })
      // this.group_name = localStorage.getItem("coursename")
    },
    takes() {
      this.$router.push({
        path: '/carbon/order'
      })
      let data = { group_id: localStorage.getItem('groupid') }
      console.log("class de id shi" + localStorage.getItem("groups"))

    },
    notakes() {
      this.$router.push({
        path: '/carbon/register'
      })
    }
  }
}

</script>
<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}

body {
  // width: 100%;
  // height: 100%;
  // background:rgb(156, 155, 160);
  // background:red;
  // width: 100px;
  // height: 100px;
}

.content {
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 0 auto;
  .boxs-son {
    width: 550px;
    background: #fff;
    margin: 0 auto;
    margin-top: 308px;
    border-radius: 20px;
    padding: 10px 0 10px 0;
  }
  h1 {
    margin: 6% 0;
    font-size: 36px;
    color: #323232;
  }
  .joins {
    margin: 8% 8% 5% 8%;
    font-size: 28px;
    color: #333333;
  }
  button {
    border: 0; // border-top:1px solid rgb(225, 226, 228);
    padding: 10px 80px;
    color: rgb(31, 123, 226);
    background: #fff;
    border-bottom-right-radius: 80%;
  }
  .fir {
    // border-right:1px solid rgb(225, 226, 228);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 80%;

    height: 80px;
    background-color: #ffdd00;
    box-shadow: 0px 10px 16px 0px rgba(255, 221, 0, 0.4);
    border-radius: 16px;
    font-size: 36px;
    color: #323232;
    margin: 2% 0 8% 0;
  }
}

.imgs {
  position: relative;
  img {
    width: 750px;
    height: 348px;
  }
  .clNames {
    position: absolute;
    font-size: 48px;
    color: #fff;
    top: 230px;
    left: 20px;
  }
}

.LesCont {
  width: 100%;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #999999;
  padding: 34px 0 15px 0;
  font-size: 24px;
  text-align: left;
  background: #fff;
  .Conts {
    overflow: hidden;
    margin-top: 29px;
    .Cont1,
    .Cont2,
    .Cont3 {
      float: left;
    }
    .Cont1 {
      position: relative;
      img {
        width: 33px;
        position: absolute;
        left: -28px;
        top: 0px;
      }
      margin:0 310px 0 30px;
    }
    .Cont2 {
      position: relative;
      margin-right: 280px;
      img {
        width: 30px;
        height: 26px;
        position: absolute;
        left: -38px;
        top: 4px;
      }
    }
    .Cont3 {
      position: relative;
      img {
        width: 33px;
        position: absolute;
        left: -40px;
        top: 4px;
      }
    }
  }
}

.listpic {
  .pics {
    width: 750px; // border:1px solid red;
    img {
      width: 750px;
      height: 348px;
    }
  }
}

</style>
