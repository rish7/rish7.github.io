var video, playButton, showTime, cartWrapper, isTraceOn = false;

window.onload = function () {
    var isVideoNotSupport = !document.createElement('video').canPlayType;
    if(isVideoNotSupport){
        alert("Please use latest browser for this demo application");
        return;
    }

    video = document.getElementById("videoTag");
    playButton = document.getElementById("play-pause");
    showTime = document.getElementById("showTime");
    cartWrapper = document.getElementById("cartWrapper");
    var traceCartObject = document.getElementById("traceCartObject");

    playButton.addEventListener("click", playOrPauseAction);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", updateVideoTime);
    traceCartObject.addEventListener("click", onChange);
}

//Event listener for checkbox on change
var onChange = function(){
    isTraceOn = this.checked;
    cartWrapper.innerHTML = "";
};

// Event listener for the play/pause button
var playOrPauseAction =  function () {
    if (video.paused == true) {
        video.play();
        playButton.innerHTML = "Pause ||";
    } else {
        video.pause();
        playButton.innerHTML = "Play ▶︎";
    }
};
//Event listener for video onplay
var onPlay = function(){
    cartWrapper.innerHTML = "";
};
//Event listener for video onpause
 var onPause   = function(){
     var htmlText = createCartObjects();
     if(htmlText == ""){
            htmlText = '<span id="noCartObjectsSpan">Sorry no cart object for current frame</span>';
     }
     cartWrapper.innerHTML = htmlText;
 };
//Event listener for updating show time
 var updateVideoTime = function(){
     showTime.innerHTML = Math.ceil(video.currentTime) +" seconds  of " + Math.ceil(video.duration) + " seconds";
     if(isTraceOn){
        onPause();
     }
 };
 //Helper method to create cart object top on the video
 function createCartObjects(){
     var frame = Math.ceil(video.currentTime);
     var carts = videoFrames[frame.toString()];
     var htmlString = "";
     if(carts && carts.length > 0){
        var length = carts.length;
        for(var i=0;i<length;i++){
            var currentCartObj = carts[i];
            var cartDetails = cartObjects[currentCartObj.cartref];
            var cartElement = '<div class="cartElement" style="'+currentCartObj.style+'"><a href="'+cartDetails.url+'" target="_blank" title="'+ cartDetails.title +'">';
            cartElement += '<img src="'+ cartDetails.src +'"/></a></div>';

            htmlString += cartElement;
        }
     }

     return htmlString;
 };