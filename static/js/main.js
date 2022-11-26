var isCameraTurnOn = true
function getVideoStream() {
    //clearInterval(getResultDetection);
    let videoStream = document.getElementById("videoStream");
    let url = ""
    if(isCameraTurnOn){
        url = "/startVideo"
        isCameraTurnOn = false;
    }else{
        url = "/stopVideo"
        isCameraTurnOn = true;
    }
    fetch(url)
    .then(response => {
        videoStream.src ="/video_stream";
        alert("Success");
    })
    .catch((error) => {
        alert('Error:', error);
    });;
}



// --------------------- video socket --------------------
var socket = io('http://localhost:5000');
socket.on('connect', function(){
    console.log("Connection has been succesfully established with socket.", socket.connected)
});
const video = document.querySelector("#videoElement");
// video.width = 1100; 
// video.height = 450;
/* <img class="video-heading" src="{{ url_for('video_stream') }}" id="videoStream">
                    <button onclick="getStartCamera()">start</button>
                    <button onclick="getStopCamera()">stop</button>
*/
{/* <video class="video-heading" autoplay="true" id="videoElement"></video>
<canvas id="canvasOutput" style="display:none;"></canvas> */}

function capture(video, scaleFactor) {
    if(scaleFactor == null){
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
        canvas.width  = w;
        canvas.height = h;
    var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
    return canvas;
} 

function sendRequestDetection(){
    var type = "image/jpg"
    var video_element = document.getElementById("videoElement")
    var frame = capture(video_element, 1)
    var data = frame.toDataURL(type);
    data = data.replace('data:' + type + ';base64,', '');
    socket.emit('image', data);
};

socket.on('response_back', function(result){
    // const image_id = document.getElementById('image');
    // image_id.src = image;
    console.log(result);
    const objResult = JSON.parse(result);
    if(objResult.is_money){
        console.log(objResult);
        getResultStreamVideo(numberWithCommas(objResult.money_price) + " " + objResult.currency, objResult.money_accuracy);
        getResultInfoMoneyStreamVideo(objResult.money_price,objResult.currency, JSON.parse(objResult.money_feature),objResult.money_size,objResult.money_type,objResult.country, objResult.money_release);
        getConversionCurrency();
    }
    else{
        getResultStreamVideo("No money", "100 %");
    }
});



function getStartCamera(){
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            window.localStream = stream;
            video.play();
            video.style.visibility = 'visible';
            const FPS = 30;
            setInterval(sendRequestDetection,10000/FPS);
        })
        .catch(function (err0r) {
            console.log(err0r);
            console.log("Something went wrong!");
        });
    }
}

function getStopCamera(){
    window.localStream.getTracks().forEach(function(track) {
        if (track.readyState == 'live' && track.kind === 'video') {
            track.stop();
            video.style.visibility = 'hidden';
            clearInterval(sendRequestDetection);
        }
    });
}






// ---------------------------- Conversion currency ---------------------- 
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const resultConversion = document.getElementById('resultConversion');
const resultInfoConversion = document.getElementById('resultInfoConversion');
//const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate(isInputOne) {
    let currencyOne = currencyEl_one.value;
    let currencyTwo = currencyEl_two.value;
    let currencySend = currencyOne;
    if (!isInputOne) {
        currencySend = currencyTwo;
        currencyTwo = currencyOne;
    }
    if (!currencySend) {
        return;
    }
    console.log(isInputOne + currencyTwo + " - " + currencyOne + " - " + currencySend);
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencySend}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const rate = data.rates[currencyTwo];
            resultConversion.style="display:block";
            resultInfoConversion.style="display:block";
            //rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            if (isInputOne) {
                amountEl_one.value = amountEl_one.value.replaceAll(",", "");
                amountEl_two.value = numberWithCommas((parseFloat(amountEl_one.value) * rate).toFixed(2));
                amountEl_one.value = numberWithCommas(amountEl_one.value);
                if(amountEl_one.value===""){
                    resultConversion.style ="display:none";
                    resultInfoConversion.style="display:none";
                    return;
                }
                resultConversion.innerHTML = `${amountEl_one.value} ${currencySend} = ${amountEl_two.value} ${currencyTwo}`
                resultInfoConversion.innerHTML = `Tỷ giá chuyển đổi thực vào lúc <b>${ new Date(data.time_last_updated * 1000).toLocaleString().replace(','," ngày")}</b>`
            } else {
                amountEl_two.value = amountEl_two.value.replaceAll(",", "");
                amountEl_one.value = numberWithCommas((parseFloat(amountEl_two.value) * rate).toFixed(2));
                amountEl_two.value = numberWithCommas(amountEl_two.value);
                if(amountEl_two.value===""){
                    resultConversion.style ="display:none";
                    resultInfoConversion.style="display:none";
                    return;
                }  
                resultConversion.innerHTML = `${amountEl_two.value} ${currencySend} = ${amountEl_one.value} ${currencyTwo}`
            }
        });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") === "NaN" ? "0" : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Event listeners
currencyEl_one.addEventListener('change', function () {
    calculate(true);
});
amountEl_one.addEventListener('input', function () {
    calculate(true);
});
currencyEl_two.addEventListener('change', function () {
    calculate(false);
});
amountEl_two.addEventListener('input', function () {
    calculate(false);
});

if(swap){
    swap.addEventListener('click', () => {
        const temp = currencyEl_one.value;
        currencyEl_one.value = currencyEl_two.value;
        currencyEl_two.value = temp;
        calculate();
    });
}

calculate(true);
// -------------------------------------------------- 



//------------------- handle info streamVideo ---------------------------------

// money detection
var valueMoney = document.querySelector(".giatritien");
var accuracyMoney = document.querySelector(".dochinhxac");

// money info
var quocgia = document.querySelector("#quocgia");
var menhgia = document.querySelector("#menhgia");
var donvi = document.querySelector("#donvi");
var kichthuoc = document.querySelector("#kichthuoc");
var loaitien = document.querySelector("#loaitien");
var mauchudao = document.querySelector("#mauchudao");
var namphathanh = document.querySelector("#namphathanh");
var anhmattruoc = document.querySelector("#anhmattruoc");
var anhmatsau = document.querySelector("#anhmatsau");
function getResultStreamVideo(value,accuracy){
    valueMoney.innerHTML = value;
    accuracyMoney.innerHTML = accuracy;
}


function getResultInfoMoneyStreamVideo(value,accuracy,feature,size,type,country,date){
    quocgia.innerHTML= country;
    menhgia.innerHTML= numberWithCommas(value);
    donvi.innerHTML= accuracy;
    kichthuoc.innerHTML= size;
    loaitien.innerHTML = type;
    mauchudao.innerHTML = feature.mauChuDao;
    namphathanh.innerHTML = date;
    anhmattruoc.src = `/static/images${feature.hinhMatTruoc}.jpg`;
    anhmatsau.src = `/static/images${feature.hinhMatSau}.jpg`;
}


// var getResultDetection = setInterval(() => {
//     fetch("/streamResult")
//         .then(response => {
//             response.text().then(result => { 
//                 //let result = t.split('-');
//                 const objResult = JSON.parse(result);
//                 if(objResult.is_money){
//                     console.log(objResult);
//                     getResultStreamVideo(numberWithCommas(objResult.money_price) + " " + objResult.currency, objResult.money_accuracy);
//                     getResultInfoMoneyStreamVideo(objResult.money_price,objResult.currency, JSON.parse(objResult.money_feature),objResult.money_size,objResult.money_type,objResult.country, objResult.money_release);
//                     getConversionCurrency();
//                 }
//                 else{
//                     getResultStreamVideo("No money", "100 %");
//                 }
//             })
//         });
// }, 1000);




var giatrichuyendoi = document.querySelector(".giatrichuyendoi");

function getConversionCurrency() {
    let donvichuyendoi = document.querySelector("#donvichuyendoi");

    if(!valueMoney.innerHTML) {
        return;
    }
    let num = valueMoney.innerHTML.replaceAll(",","").replaceAll("VND","");

    fetch(`https://api.exchangerate-api.com/v4/latest/VND`)
        .then(res => res.json())
        .then(data => {
            console.log(num);
            const rate = data.rates[donvichuyendoi.value];
            giatrichuyendoi.innerHTML = numberWithCommas((parseFloat(num) * rate).toFixed(2)) +" "+donvichuyendoi.value; 
        });
}




var btnVideo = document.getElementById("btnVideo");
var btnImage = document.getElementById("btnImage");


var isCamera = true;
btnVideo.addEventListener('click', function () {
    if(isCamera){
        isCamera = false;
        btnVideo.innerHTML = 'VIDEO : BẬT';
        getStartCamera();
        return; 
    }
    turnOffCamera();
});


var isImage= true;
btnImage.addEventListener('click', function () {
    turnOffCamera();
    if(isImage){
        isImage = false;
        btnImage.innerHTML = 'HÌNH ẢNH : BẬT';
        return; 
    }
    btnImage.innerHTML = 'HÌNH ẢNH';
    isImage = true;
});


function turnOffCamera(){
    btnVideo.innerHTML = 'VIDEO';
    getStopCamera();
    isCamera = true;
}


// -------------------------------------------------- 




// FILE UPLOADS
const dropZone = document.querySelector('#drop-zone');
const imageRemove = document.querySelector('#imageRemove');
var imageUploadDetection = document.getElementById("imageUploadDetection");
const img = document.querySelector('#imageDetection');
let p = document.querySelector('#textss')

imageUploadDetection.addEventListener('change', function (e) {
    const clickFile = this.files[0];
    if (clickFile) {
        img.style = "display:block;";
        p.style = 'display: none';
        imageRemove.style = "display:block;";
        const reader = new FileReader();
        reader.readAsDataURL(clickFile);
        reader.onloadend = function () {
            const result = reader.result;
            let src = this.result;
            img.src = src;
            img.alt = clickFile.name
        }
    }
})
dropZone.addEventListener('click', () => imageUploadDetection.click());
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

imageRemove.addEventListener('click', (e) => {
    $('#myfile').val('');
    $('#imageDetection').hide();
    p.style = 'display: show';
    imageRemove.style = "display:none;";
    console.log($('#myfile').val());
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    img.style = "display:block;";
    let file = e.dataTransfer.files[0];
    alert("hieu");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        e.preventDefault()
        p.style = 'display: none';
        let src = this.result;
        img.src = src;
        img.alt = file.name
    }
});


