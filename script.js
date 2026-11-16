ExperienceBtn = document.getElementById("ExperienceBtn");
myAudio = document.getElementById("myAudio");
myAudio2 = document.getElementById("myAudio2");
myVideo = document.getElementById("myVideo");
counter = 0

ExperienceBtn.addEventListener("click", RunExperience);

myVideo.addEventListener("ended", switchContent);

EndExperienceBtn.addEventListener("click", EndExperience);

function RunExperience() {
    myAudio.play();
    myAudio2.play();
    document.querySelector("body").style.backgroundImage = "url('media/bg_image.jpg')";
    document.querySelector("body").style.backgroundSize = "cover";
     document.querySelector("body").style.color = "white";
}

function EndExperience() {
    myAudio.pause();
    myAudio2.pause();
    myAudio.currentTime = 0;
    myAudio2.currentTime = 0;
     document.querySelector("body").style.backgroundImage = "none";
}

function switchContent() {    
    counter++
    
    if (counter == 1) {
        myVideo.src = "media/FerrisWheel.mp4";
    }
    if (counter == 2) {
        myVideo.src = "media/FolkloricDance.mp4";
        counter = 0;
    }
}