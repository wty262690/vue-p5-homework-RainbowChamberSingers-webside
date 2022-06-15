<template>
<span unselectable="on" >
    <router-link to="/" class="back fa fa-angle-double-left"></router-link>
    <div class="inturd">
    <img class="left" src="https://raw.githubusercontent.com/wty262690/vue-p5-finalhomework-git/main/src/photo/left.png" style="float:left; margin: 5px;" />
    <p class="songname">春節自救指南</p>
    <p>What I Do Is For Your Own Good</p>
    <p class="char">上海彩虹室內合唱團</p>
    
    <p>
        <span>演唱</span>：上海彩虹室內合唱團
        <span>詞曲</span>：金承志
        <span>指揮</span>：金承志
        <span>鋼伴</span>：白苑彤
        <span>混音</span>：莫家偉
    </p>
    </div>
    
    <img class="right" src="https://raw.githubusercontent.com/wty262690/vue-p5-finalhomework-git/main/src/photo/newright.png" style="float:right; margin: 5px;" />
    <div class="inturd detall">
        <p class="word">那一天，人類終於回想起了，曾經春節回家的恐怖，還有被各路親戚超負荷關心所支配的那份屈辱</p>
        <p class="word">《春節自救指南》是由上海彩虹室內合唱團自主研發的神奇藥丸，專治父母逼婚、親戚圍堵、熊孩爆炸、隔壁老王等春節頑疾。</p>
        <p class="word">如您曾接受過全家靈魂深處的拷問、曾被親戚的超負荷關愛電磁炮所擊中，請務必服此良藥。</p>
    </div>
</span>
</template>

<style>
.inturd{
    font-family:"normalc";
    font-size:18px;
    padding-top:10px;
    position:relative;
    z-index: 2;
    color:white;
}
.detall{
    padding-top:50vh;
    padding-left:15vw;
}
.word{
    text-align:center;
}
img{
    position:relative;
    z-index: 2;
    top:-20px;
}
.songname{
    color:rgb(213, 228, 148);
    padding-top:15vh;
    margin-bottom:0px;
    font-size:60px;
    font-family:"cat";
    letter-spacing: 10px;
}
p{
    letter-spacing: 4px;;
}
.back{
  position:fixed;
  z-index: 9999;
  font-size:50px;
  left:2vw;
  text-decoration: none;
  color:rgb(213, 228, 148);
}
span{
    font-size:25px;
}
.char{
    color:rgb(175, 177, 159);
    padding-bottom:15px;;
}
</style>