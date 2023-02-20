const recordBtn = document.querySelector(".record"),
    result = document.querySelector(".result"),
    clearBtn = document.querySelector(".clear");

let SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition,
recording = false;

let recognition = new SpeechRecognition();
recognition.continuous = true;

recordBtn.addEventListener('click', ()=>{
    if(!recording){
        recording = true;
        recordBtn.querySelector("p").innerHTML = "Listening...";
        recordBtn.querySelector("img").style.display = 'block'
        recognition.start()
    }
    else{
        recording = false;
        recordBtn.querySelector("p").innerHTML = "Start Listening";
        recordBtn.querySelector("img").style.display = 'none'
        recognition.stop()
    }
} )

recognition.addEventListener('result',(e)=>{
    let curResultIndex = e.resultIndex;
    let transcript = e.results[curResultIndex][0].transcript
    result.textContent += ' ' + transcript
})
recognition.addEventListener('start',()=>{
    console.log('speech recognition active')
})
recognition.addEventListener('end',()=>{
    console.log('speech')
})
clearBtn.addEventListener("click", () => {
    result.textContent = "";
});