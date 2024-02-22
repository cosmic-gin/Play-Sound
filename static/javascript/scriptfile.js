const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

button1.addEventListener('click', function(){updateButton(button1)});
button2.addEventListener('click', function(){updateButton(button2)});
button3.addEventListener('click', function(){updateButton(button3)});
button4.addEventListener('click', function(){updateButton(button4)});
button5.addEventListener('click', function(){updateButton(button5)});
button6.addEventListener('click', function(){updateButton(button6)});
button7.addEventListener('click', function(){updateButton(button7)});
button8.addEventListener('click', function(){updateButton(button8)});
button9.addEventListener('click', function(){updateButton(button9)});


function updateButton(button) {

  // onYouTubeIframeAPIReady1();
  // onYouTubeIframeAPIReady2();
  // onYouTubeIframeAPIReady3();
  // onYouTubeIframeAPIReady4();
    if (button != button1){
      document.getElementById("txt1").innerHTML = "Play";
      x1();
    }
    if (button != button2){
      document.getElementById("txt2").innerHTML = "Play";
      x2();
    }
    if (button != button3){
      document.getElementById("txt3").innerHTML = "Play";
      x3();
    }
    if (button != button4){
      document.getElementById("txt4").innerHTML = "Play";
      x4();
    }
    if (button != button5){
      document.getElementById("txt5").innerHTML = "Play";
      x5();
    }
    if (button != button6){
      document.getElementById("txt6").innerHTML = "Play";
      x6();
    }
    if (button != button7){
      document.getElementById("txt7").innerHTML = "Play";
      x7();
    }
    if (button != button8){
      document.getElementById("txt8").innerHTML = "Play";
      x8();
    }
    if (button != button9){
      document.getElementById("txt9").innerHTML = "Play";
      x9();
    }
  }


function onYouTubeIframeAPIReady1(){
  var e=document.getElementById("1"),t=document.getElementById("button1");
  e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player1"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt1").innerHTML = "Pause":document.getElementById("txt1").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x1 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player1",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

function onYouTubeIframeAPIReady2(){
  var e=document.getElementById("2"),t=document.getElementById("button2");
  e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player2"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt2").innerHTML = "Pause":document.getElementById("txt2").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x2 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player2",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

function onYouTubeIframeAPIReady3(){
  var e=document.getElementById("3"),t=document.getElementById("button3");
  e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player3"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt3").innerHTML = "Pause":document.getElementById("txt3").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x3 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player3",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

function onYouTubeIframeAPIReady4(){
  var e=document.getElementById("4"),t=document.getElementById("button4");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player4"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt4").innerHTML = "Pause":document.getElementById("txt4").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x4 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player4",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

function onYouTubeIframeAPIReady5(){
  var e=document.getElementById("5"),t=document.getElementById("button5");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player5"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt5").innerHTML = "Pause":document.getElementById("txt5").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x5 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player5",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
 
function onYouTubeIframeAPIReady6(){
  var e=document.getElementById("6"),t=document.getElementById("button6");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player6"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt6").innerHTML = "Pause":document.getElementById("txt6").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x6 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player6",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}

function onYouTubeIframeAPIReady7(){
  var e=document.getElementById("7"),t=document.getElementById("button7");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player7"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt7").innerHTML = "Pause":document.getElementById("txt7").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x7 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player7",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
   
function onYouTubeIframeAPIReady8(){
  var e=document.getElementById("8"),t=document.getElementById("button8");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player8"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt8").innerHTML = "Pause":document.getElementById("txt8").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x8 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player8",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
   
function onYouTubeIframeAPIReady9(){
  var e=document.getElementById("9"),t=document.getElementById("button9");
  t.setAttribute("id","youtube-icon"),e.appendChild(t);
  var a=document.createElement("div");
  a.setAttribute("id","youtube-player9"),e.appendChild(a);
  var o=function(e){var a=e? document.getElementById("txt9").innerHTML = "Pause":document.getElementById("txt9").innerHTML = "Play"};
  e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
  x9 = function(){r.pauseVideo()};
  var r=new YT.Player("youtube-player9",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
   
// function onYouTubeIframeAPIReady(){
//   var e=document.getElementById("2"),t=document.getElementById("button2");
//   t.setAttribute("id","youtube-icon"),t.style.cssText="cursor:pointer;cursor:hand",e.appendChild(t);
//   var a=document.createElement("div");
//   a.setAttribute("id","youtube-player"),e.appendChild(a);
//   var o=function(e){var a=e? document.getElementById("demo").innerHTML = "":document.getElementById("demo").innerHTML = "";
//   t.setAttribute(a)};
//   document.getElementById("demo").innerHTML = a;
//   e.onclick=function(){r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))};
//   var r=new YT.Player("youtube-player",{height:"0",width:"0",videoId:e.dataset.video,playerVars:{autoplay:e.dataset.autoplay,loop:e.dataset.loop},events:{onReady:function(e){r.setPlaybackQuality("small"),o(r.getPlayerState()!==YT.PlayerState.CUED)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o(!1)}}})}
  