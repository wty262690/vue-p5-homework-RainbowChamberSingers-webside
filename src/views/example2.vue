<template>
<span unselectable="on" >
  <router-link to="/" class="back fa fa-angle-double-left"></router-link>
  <div id="demo"></div>
    <el-calendar v-model="value">
      <template #dateCell="{data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).slice(1).join('m') }}
        </p>
        <p class="pick">{{ data.isSelected ? 'ฅ ฅ': '' }}</p>
      </template>
    </el-calendar>
</span>
</template>


<script>
    export default {
    data() {
      
      return {
        value: null,
      }
    },
    created(){
      
      var countDownDate = new Date("Feb 10, 2021 0:0:0").getTime();
            
      // Update the count down every 1 second
      var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + " : " + hours + " : "
      + minutes + " : " + seconds ;

      // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
      }, 1000);
  },
   unmounted () {
    this.value = null;
  },
}
</script>


<style>
p{
  margin-bottom: 0;
}
#app {
  margin:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgb(213, 228, 148);
  position:absolute;
}
.el-calendar{
  position:relative;
  z-index:2;
  letter-spacing:3px;
  font-family: "english";
  background-color:rgba(0, 0, 0, 0);
  width:80vw;
  left:10vw;
  top:-30px;
  text-align: center;
}
.el-button{
  border:0px;
  border-bottom:1.5px solid;
  border-color:rgb(20, 20, 20,0);
  background-color:rgba(0, 0, 0, 0);
  color:rgb(213, 228, 148);
}
.el-calendar__header{
  border-bottom:0px;
}
.is-selected {
  color: #ffffff;
}
.pick{
  text-align: right;
  font-size:40px;
  margin:0;
}
.el-button:focus, .el-button:hover{
  background-color:rgba(255, 255, 255, 0);
  color:rgb(213, 228, 148);
  border-bottom: 1.5px solid;
}
#demo{
  left:10vw;
  position: relative;
  width:100%;
  text-align:center;
  font-family: "english";
  padding-top:10vh;
  font-size:100px;
  z-index:3;
}
.el-calendar__title{
  font-size:18px;
  color:rgb(213, 228, 148);
}
.el-calendar-table td{
  border-radius: 15%;
  border-color:rgb(184, 56, 77);
  border-left:0px;
  border-top:0px;
  border-right:0px;
  border-bottom:0px;
}
.el-calendar-table tr:first-child td{
  border-top:0px;
}
.el-calendar-table tr td:first-child{
  border-left:0px;
}
.el-calendar-table td.is-selected{

  background-color:rgb(184, 56, 77);
}
 .el-calendar-table .el-calendar-day:hover{
  background-color:rgb(184, 56, 77);
   border-radius: 15%;
 }
 .el-backtop, .el-calendar-table td.is-today{
   color:white;
 }
 .el-calendar-table:not(.is-range) td.next, .el-calendar-table:not(.is-range) td.prev{
   color:rgb(104, 110, 78);
 }
.back{
  position:absolute;
  z-index: 4;
  font-size:50px;
  left:2vw;
  text-decoration: none;
  color:rgb(213, 228, 148);
}
.el-button--mini{
  font-size:14px;
}
</style>