// --------------------- video socket --------------------

var socket = io('http://localhost:5000');
socket.on('connect', function(){
    console.log("Kết nối với socket thành công.", socket.connected)
});
const video = document.querySelector("#videoElement");
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

// hàm gửi frame video
function sendRequestDetection(){
    var type = "image/jpg"
    var video_element = document.getElementById("videoElement")
    var frame = capture(video_element, 1)
    var data = frame.toDataURL(type);
    data = data.replace('data:' + type + ';base64,', '');
    socket.emit('image', data);
};

// get data nhận diện khi livestream
socket.on('response_back', function(result){
    if(isCamera){
        return;
    }
    const objResult = JSON.parse(result);
    if(objResult.is_money){
        console.log(objResult);
        getResultStreamVideo(numberWithCommas(objResult.money_price) + " " + objResult.currency, objResult.money_accuracy);
        getResultInfoMoneyStreamVideo(objResult.money_price,objResult.currency, JSON.parse(objResult.money_feature),objResult.money_size,objResult.money_type,objResult.country, objResult.money_release);
        getListDetection(objResult.money_list);
        try{
            getConversionCurrency();
        }catch(e){}
    }
    else{
        getResultStreamVideo("Không xác định", "100 %");
    }
});

function getListDetection(result){
    console.log(result);
    if(!result) return;
    let listDetection = document.getElementById("listDetection");
    listDetection.innerHTML = '';

    let divItem;
    let divItemInfo1;
    let divItemInfo2;
    let divItemInfo3;
    debugger;
    result.forEach( value => {

        const infoMoney = JSON.parse(value);
        const feature = JSON.parse(infoMoney.money_feature);
        divItem = document.createElement('div');
        divItem.classList.add("hangxacsuat");
        
        divItemInfo1 = document.createElement('div');
        divItemInfo1.classList.add("hangxacsuatdau");
        divItemInfo1.innerHTML = numberWithCommas(infoMoney.money_price)+ " " + infoMoney.currency;

        divItemInfo2 = document.createElement('div');
        divItemInfo2.classList.add("hangxacsuatgiua");
        let img = document.createElement('img');
        img.src = `/static/images${feature.hinhMatSau}.jpg`;
        divItemInfo2.appendChild(img);

        divItemInfo3 = document.createElement('div');
        divItemInfo3.classList.add("hangxacsuatsau");
        divItemInfo3.innerHTML = infoMoney.money_accuracy;

        divItem.appendChild(divItemInfo1);
        divItem.appendChild(divItemInfo2);
        divItem.appendChild(divItemInfo3);
        
        listDetection.appendChild(divItem);
    })
}


var intervalId;
// bật camera
function getStartCamera(){
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            window.localStream = stream;
            video.play();
            video.style.visibility = 'visible';
            const FPS = 30;
            intervalId = setInterval(sendRequestDetection,10000/FPS);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

// tắt camera
function getStopCamera(){
    window.localStream.getTracks().forEach(function(track) {
        if (track.readyState == 'live' && track.kind === 'video') {
            track.stop();
            video.style.visibility = 'hidden';
            clearInterval(intervalId);
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
const swap = document.getElementById('swap');

// tính toán kết quả chuyển đổi tiền tệ
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
            const rate = data.rates[currencyTwo];
            resultConversion.style="display:block";
            resultInfoConversion.style="display:block";
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



//------------------- Xử lý streamVideo ---------------------------------

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

// hàm hiển thị kết quả xác xuất video
function getResultStreamVideo(value,accuracy){
    valueMoney.innerHTML = value;
    accuracyMoney.innerHTML = accuracy;
}

// hàm hiển thị thông tin tờ tiền
function getResultInfoMoneyStreamVideo(value,accuracy,feature,size,type,country,date){
    console.log(feature);
    quocgia.innerHTML= country;
    menhgia.innerHTML= numberWithCommas(value);
    donvi.innerHTML= accuracy;
    kichthuoc.innerHTML= size;
    loaitien.innerHTML = type;
    namphathanh.innerHTML = date;
    if(feature.mauChuDao){
        mauchudao.innerHTML = feature.mauChuDao;
        anhmattruoc.src = `/static/images${feature.hinhMatTruoc}.jpg`;
        anhmatsau.src = `/static/images${feature.hinhMatSau}.jpg`;
        return;
    }
    mauchudao.innerHTML = "";
    anhmattruoc.src = ``;
    anhmatsau.src = ``;
}

// chuyển đổi tiền real time khi live camera
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
var isImage= true;
btnVideo.addEventListener('click', function () {
    if(isCamera){
        isCamera = false;
        isImage = true;
        btnVideo.innerHTML = 'VIDEO : BẬT';
        clearInfoDetection();
        turnOffDetectionImage();
        getResultStreamVideo("","");
        getResultInfoMoneyStreamVideo("","","","","","", "");
        getStartCamera();
        return; 
    }
    clearInfoDetection();
    turnOffCamera();
});

// set khi nhận dạng hình ảnh
function turnOnDetectionImage(){
    btnImage.innerHTML = 'HÌNH ẢNH : BẬT';
    document.getElementById("btnDetection").style = "display:inline-block";
    document.getElementById("btnXacXuat").style = "display:none";
    document.getElementById("upload-image").style = "display:block;";
}
function turnOffDetectionImage(){
    btnImage.innerHTML = 'HÌNH ẢNH';
    document.getElementById("upload-image").style = "display:none;";
    document.getElementById("btnDetection").style = "display:none";
    document.getElementById("btnXacXuat").style = "display:inline-block";
}

btnImage.addEventListener('click', function () {
    turnOffCamera();
    try{
        if(isImage){
            isImage = false;
            clearInfoDetection();
            turnOnDetectionImage();
            turnOffCamera();
            clearInterval(intervalId);
            return; 
        }
        isImage = true;
        clearInfoDetection();
        turnOffDetectionImage();
        turnOffCamera();
    }
    catch(e){}
});

// tắt video
function turnOffCamera(){
    btnVideo.innerHTML = 'VIDEO';
    try{
        getStopCamera();
    }catch(e){}
    isCamera = true;
}

function clearInfoDetection(){
    getResultStreamVideo("","");
    getResultInfoMoneyStreamVideo("","","","","","", "");
    document.querySelector(".giatrichuyendoi").innerHTML='';
    document.getElementById("listDetection").innerHTML = "";
}
// -------------------------------------------------- 

// HÌNH ẢNH
var imageUpload = document.getElementById("image-upload");
const dropZone = document.querySelector('#drop-zone');
const imageRemove = document.querySelector('#imageRemove');
var imageUploadDetection = document.getElementById("imageUploadDetection");
var btnDetection = document.getElementById("btnDetection");
const img = document.querySelector('#imageDetection');
let p = document.querySelector('#textUpload');

imageUploadDetection.addEventListener('change', function (e) {
    const clickFile = this.files[0];
    if (clickFile) {
        img.style = "display:block;";
        p.style = 'display: none';
        //imageRemove.style = "display:block;";
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
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    img.style = "display:block;";
    let file = e.dataTransfer.files[0];
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

btnDetection.addEventListener('click', () => {
    predictImage(img.src);
    //loader1.style.display = "block";
});

// dự đoán ảnh
function predictImage(image) {
    //   aboutTheme.style.display = "block";
    //   loader1.style.display = "none";
    //   contentDectection.style.display = "block";
    fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(image)
      })
        .then(resp => {
          if (resp.ok)
            resp.json().then(data => {
                const objResult = JSON.parse(data);
                if(objResult.is_money){
                    getResultStreamVideo(numberWithCommas(objResult.money_price) + " " + objResult.currency, objResult.money_accuracy);
                    getResultInfoMoneyStreamVideo(objResult.money_price,objResult.currency, JSON.parse(objResult.money_feature),objResult.money_size,objResult.money_type,objResult.country, objResult.money_release);
                    try{
                        getConversionCurrency();
                    }catch(e){}
                }
                else{
                    getResultStreamVideo("Không xác định", "100 %");
                    document.querySelector(".giatrichuyendoi").innerHTML='';
                }
            });
        })
        .catch(err => {
          console.log("Error : ", err.message);
        });
}


