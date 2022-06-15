<template>
  <div class="container">
  <span unselectable="on" >
  <div class="txt">
    <div class="word word1">薛</div>
    <div class="word">丁</div>
    <div class="word">格</div>
    <div class="word">的</div>
    <div class="word">春</div>
    <div class="word">節</div>
  </div>
  
  <div id="nav">
  </div>
  <router-view :key="$route.fullPath"/>

<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

<nav class="menu" align="center">
  <input type="checkbox" class="menu-open" name="menu-open" id="menu-open"/>
  <label class="menu-open-button" for="menu-open" align="center">
    <span class="hamburger hamburger-1"></span>
    <span class="hamburger hamburger-2"></span>
    <span class="hamburger hamburger-3"></span>
  </label>
  <router-link to="/example5" class="menu-item item">進度</router-link>
  <router-link to="/example4" class="menu-item item">指南</router-link>
  <router-link to="/example3" class="menu-item item">自救</router-link>
  <router-link to="/example2" class="menu-item item">春節</router-link>
  <router-view></router-view>
</nav>
</span>
</div>
</template>

<script >

export default {
  data() {
    
    return {
      
    }
  },
  mounted() {
  },
}
</script>


<style>
@import '../font.css';
@import '../menu.css';
.container{
  width:100vw;
}
.p5Canvas {
  position:fixed;
  width: 100%;
  z-index: 1;
}

.txt{
  position:absolute;
  font-family: "cat";
  font-size:40px;
  width:100vw;
  padding-top:20vh;
  align-self: center;
  color:rgb(213, 228, 148);
  z-index:9999;
}
.word1{
  font-size:55px;
}

span {
 -webkit-user-select: none;   /* for Chrome */
  -moz-user-select: none;  /* for Firefox */
}
</style>