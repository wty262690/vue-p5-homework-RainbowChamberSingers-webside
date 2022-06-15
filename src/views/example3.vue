<template>
<span unselectable="on" >
    <router-link to="/" class="back fa fa-angle-double-left"></router-link>
  <div class="btn">  
    <p class="no">沒</p>
    <p class="people">人</p>
    <p class="me">能在我的</p>
      <p class="letter">B</p><p class="letter">G</p><p class="letter"> M</p>
      <p class="winner">裏戰勝我</p>
  </div>
    <div id="app-cover">
        <div id="player">
            <div id="player-track">
                <div id="album-name"></div>
                <div id="track-name"></div>
                <div id="track-time">
                    <div id="current-time"></div>
                    <div id="track-length"></div>
                </div>
                <div id="s-area">
                    <div id="ins-time"></div>
                    <div id="s-hover"></div>
                    <div id="seek-bar"></div>
                </div>
            </div>
            <div id="player-content">
                <div id="album-art">
                    <img src="https://raw.githubusercontent.com/wty262690/vue-p5-finalhomework-git/main/src/photo/spring.png" class="active" id="_1">
                </div>
                <div id="player-controls">
                    <div class="control">
                        <div class="button" id="play-previous">
                            <i class="fa fa-forward"></i>
                        </div>
                    </div>
                    <div class="control">
                        <div class="button" id="play-pause-button">
                            <i class="fa fa-play"></i>
                        </div>
                    </div>
                    <div class="control">
                        <div class="button" id="play-next">
                            <i class="fa fa-backward"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </span>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return{}
  },
  mounted(){

$(function()
{   var currAlbum;
    var audio;
    var currTrackName;
    var currArtwork;
    var playerTrack = $("#player-track"), 
    bgArtwork = $('#bg-artwork'), bgArtworkUrl, 
    albumName = $('#album-name'), trackName = $('#track-name'), 
    albumArt = $('#album-art'), 
    sArea = $('#s-area'), seekBar = $('#seek-bar'), trackTime = $('#track-time'), insTime = $('#ins-time'), sHover = $('#s-hover'), 
    playPauseButton = $("#play-pause-button"),  i = playPauseButton.find('i'), tProgress = $('#current-time'), tTime = $('#track-length'), 
    seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0, buffInterval = null, tFlag = false,
    albums = ['春節自救指南'], 
    trackNames = ['上海彩虹室內合唱團'],
    albumArtworks = ['_1','_2','_3','_4','_5'],
    trackUrl = ['https://raw.githubusercontent.com/wty262690/vue-p5-finalhomework-git/main/src/sound/ranbow_newyear.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'], playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fa fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-play');
                audio.pause();
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#'+currArtwork).addClass('active');
            bgArtworkUrl = $('#'+currArtwork).attr('src');

            bgArtwork.css({'background-image':'url('+bgArtworkUrl+')'});
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
	{	
    audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});
}
}
</script>

<style>
@import './player.css';
.btn{
  color:rgb(213, 228, 148);
  left:10vw;
  top:100px;
  display:inline-block;
  text-align:left;
  font-size:50px;
  font-family:'cat';
  position:absolute;
  z-index:2;
  height:200vh;
}
.no{
  display:inline-block;
  text-align:center;
  margin:0;
  padding:0;
  position:relative;
  font-size:400px;
}
.people{
  color:rgb(192,44,56);
  margin:0;
  top:-0.5vh;
  left:25vw;
  position:relative;
  font-size:150px;
}
.me{
    
  width:21vw;
  margin:0;
  top:-13vh;
  left:40vw;
  position:relative;
  font-size:40px;
  letter-spacing:40px;
}
.letter{
  color:white;
  width:5vw;
  margin:0;
  top:-7vh;
  left:35vw;
  position:relative;
  font-size:300px;
  letter-spacing:40px;
}
.winner{
  width:5vw;
  margin:0;
  top:-50vw;
  left:25vw;
  position:relative;
  font-size:150px;
  letter-spacing:20px;
}
.back{
  position:fixed;
  z-index: 9999;
  font-size:50px;
  left:2vw;
  text-decoration: none;
  color:rgb(213, 228, 148);
}
</style>