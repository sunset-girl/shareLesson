<template>
  <div class="box">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536813543226&di=5418e382718a138886128f88593e7560&imgtype=0&src=http%3A%2F%2Fapi.cocoachina.com%2Fuploads%2F20150722%2F1437546862180061.jpg" alt="">
  </div>
</template>


<script>
export default {
  data(){
    return{
      lists:[],
      types:0,
      status:0
    }
  },
  created(){
    document.title = "课程"
    this.my_two_level()
  },
  methods: {
      my_two_level(){
            var name, value;
            var arrs = [];
            var str = location.href; //获取到整个地址
            console.log("shi bu shi" +str);
            var num = str.indexOf("?")
            str = str.substr(num + 1); //取得num+1后所有参数，这里的num+1是下标 str.substr(start [, length ]
            var arr = str.split("&"); //以&分割各个参数放到数组里
            for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
            arrs.push(this[name])
            //这里的ids先假设为468
            localStorage.setItem('status',arrs[0])
            this.status = localStorage.getItem('status')
            // console.log("type shi "+ this.types)
            // alert("status shi "+ this.status)
            // alert("王牌部队")
          setTimeout(()=>{

            let url = "/Wappay/get_order_type?status="+this.status;
          //  alert(url)
           this.$axios.get(url).then((res)=>{
          //  alert(res.data.data.type)
           //alert(res.data.data.status)
             if(res.data.code == 1){
                  if(res.data.data.type == 1){
                        if( res.data.data.status == 1){
                          //jump 课程详情页
                          this.$router.push({
                          path: '/'
                          })

                        }else{
                          alert("支付失败")
                          //jump 加入社群页
                          this.$router.push({
                            path: '/'
                          })

                        }
                      }
                  else if(res.data.data.type == 2){
                      //jump 课程详情页
                      console.log("present2")
                      this.$router.push({
                        path: '/'
                      })
                  }
             }
             else{
                   //空白
                }
          })
            },2000)

            }
           }

          //  if(this.types == 1){
          //     	if( this.status == 1){
          //         //jump 课程详情页
          //         console.log("present1")
          //         this.$router.push({
          //          path: '/'
          //          })

          //     	}else{
          //         alert("支付失败")
          //         //jump 加入社群页
          //         this.$router.push({
          //          path: '/'
          //       })

          //     	}
          //   }else if(this.types == 2){

          //         //jump 课程详情页
          //         console.log("present2")
          //         this.$router.push({
          //          path: '/'
          //      })

          //     }else{
          //         //空白

          //     }
      }
  }
}
</script>
<style lang="scss" scoped>
  .box{
    width: 100%;
    height: 100%;
    background:rgb(226, 226, 226)
  }
  .box img{
    display: table-cell;
    vertical-align: middle;
    margin-left: 6%;
  }
  </style>
