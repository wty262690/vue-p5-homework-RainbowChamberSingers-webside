<template>
<div class="page5" >
    <span unselectable="on" >
      <router-link to="/"  class="back fa fa-angle-double-left"></router-link>
    <div class="title">年節專用戰術</div>
    <div class="pword">
        <div class="bigitem ">話題預測</div>
        <div class="contain"  v-for="item in newitem" :key="item">
            <div class="item">{{item.new}}</div>
          </div>
        <div>
        <input type="text" name="firstname" v-model="addnew.new" />
        </div>
        <button class="fa fa-plus" aria-hidden="true" @click = "ccc()"></button>
    </div>
    <div class="yword">
        <div class="bigitem">年前準備</div>
        <p class="final">預期完成度</p>
            <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
            <div>
              
            <el-button-group>
                <el-button icon="fa fa-chevron-down" @click="decrease"></el-button>
                <el-button icon="fa fa-chevron-up" @click="increase"></el-button>
            </el-button-group>
            </div>
        <div class="smallitem">
            <a href="https://www.youtube.com/user/TBSCTS">華視 </a>
            <a href="https://www.youtube.com/user/setnews159">三立 </a>
            <a href="https://www.youtube.com/channel/UCBuHkb1AS_yRQ71meFNQ3VQ">年代 </a>
            <a href="https://www.youtube.com/channel/UCp2f7tGJGN6R9Muxipem8Nw">寰宇 </a>
            <a href="https://www.youtube.com/user/NTDAPTV">新唐人 </a>
            <a href="https://www.youtube.com/channel/UCTqPBBnP2T57kmiPQ87986g">眼球中央電視台 </a>
            <a href="https://www.youtube.com/user/twnexttv">壹電視 </a>
            <a href="https://www.youtube.com/channel/UCpu3bemTQwAU8PqM4kJdoEQ">中天 </a>
            <a href="https://www.youtube.com/user/TVBS">TVBS </a>
            <a href="https://www.youtube.com/user/newsebc">東森 </a>
            <a href="https://www.youtube.com/user/chinatvnews">中視 </a>
            <a href="https://www.youtube.com/user/ttvnewsview">台視 </a>
            <a href="https://www.youtube.com/user/FTVCP">民視 </a>
            </div>
    </div>
    </span>
</div>
</template>


<script>
  export default {
    data() {
      var countDownDate = new Date("Feb 10, 2021 0:0:0").getTime();
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      return {
        percentage: 100-days,
        colors: [
          {color: 'rgb(192,44,56)', percentage: 20},
        ],
        addnew: {
          new: "",
        },
        newitem: [
          {new: "CVOID19",},
          {new: "政治",},
          {new: "股票",},
          {new: "房市",},
          {new: "工作",},
          {new: "學校",},
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 2;
        if (this.percentage > 99) {
          this.percentage = 99;
        }
      },
      decrease() {
        this.percentage -= 2;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },
      ccc(){
        var tmp= Object.assign({}, this.addnew);
        this.newitem.push(tmp);
        this.addnew.new="";
        this.percentage -=2;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    },
  }
</script>





<style scoped>
.page5{
    color:rgb(213, 228, 148);
    font-size:30px;
    position:relative;
    z-index: 2;
    font-family:"normalc"
}
.title{
    width:100vw;
    padding-top:10vh;
    font-size:70px;
    font-family:"cat";
}
.smallitem{
    padding-top:2vh;
    font-size:20px;
    line-height: 40px;
}
.item{
    text-align: center;
    color:white;
}
.bigitem{
    text-align:center;
    padding-top:100px;
    padding-bottom:30px;
    font-size:30px;
    font-family:"normalc";
    color:white;
}
.contain{
    font-size:18px;
    text-align: left;
    padding-top:5px;
    padding-bottom:20px;
}
.el-button{
  color:white;
  background-color:rgba(0, 0, 0, 0);
  border:0;
  top:25px;
  padding:5px ;
  padding-top:0px;
}
.el-progress{
  top:50px;
}
.el-progress__text{
  color:rgb(255, 255, 255);
  font-family:"english";
  letter-spacing: 5px;
}
a{
  color:white;
  text-decoration: none;
}
.smallitem a:hover{
  border-bottom:1px solid white;
}
.pword{
  position:absolute;
  width:50vw;
  vertical-align: middle;
}
.yword{
  position:absolute;
  left:45vw;
  width:40vw;
  vertical-align: middle;
}
i{
  color:white;
  font-size:19px;
}
.final{
  margin:10px;
  margin-top:0px;
  font-size:17px;
  color:white;
}
.back{
  position:fixed;
  z-index: 9999;
  font-size:50px;
  left:2vw;
  text-decoration: none;
  color:rgb(213, 228, 148);
}
input{
  margin-bottom:20px;

}
button{
  background-color:rgba(0, 0, 0, 0);
  color:white;
  border:0px;
  padding-top:2px;
  margin-bottom:50px;
}
input{
  background-color:rgba(0, 0, 0, 0);
  border:0px;
  border-bottom:1px solid white;
  width:100px;
}
input:-internal-autofill-selected {
  background-color:rgba(0, 0, 0, 0);
}

</style>