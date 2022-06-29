var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();//we are creating a object called recogonition which has the properties of SpeechRecogonition

function start() {
    document.getElementById("textbox").innerHTML = "";//we are clearing out the text area 
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;// What ever we speak we will save it in the content variable.

    document.getElementById("textbox").innerHTML = Content;//Whatever we speak it gets displayed in the textbox
    console.log(Content);
    
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
        setTimeout(function () {
            take_selfie();
            save();
        }, 5000);
    }
}




function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);//We are creating object called utterthis it has properties SpeechSynthesisUtterance

    synth.speak(utterThis);

    Webcam.attach(camera);
}
    


camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});


function take_selfie() {
    Webcam.snap(function (data_uri) {//Snap Function takes the snap of the live preview and saves in the variable data_uri
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';//We are displaying the picture
        console.log("hello");
    });
}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;//We are saving 
    link.href = image;
    link.click();
}

