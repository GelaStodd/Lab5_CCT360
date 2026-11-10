ExperienceBtn = document.getElementById("ExperienceBtn");
myAudio = document.getElementById("myAudio");
myVideo = document.getElementById("myVideo");

ExperienceBtn.addEventListener("click", RunExperience);

myVideo.addEventListener("ended", switchContent);


function RunExperience() {
    myAudio.play();
}

function switchContent() {
    myVideo.src = "media/FerrisWheel.mp4";
}