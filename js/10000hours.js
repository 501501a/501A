const startButton = ducument.querySelector(".start_btn");
const openButton = ducument.querySelector(".modal_btn");
const closeButton = ducument.querySelector(".close_btn");
const shareButton = ducument.querySelector(".share_btn");
const result = ducument.querySelector(".result");
const modal = ducument.querySelector(".#modal");
const loading = ducument.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;        
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue. focus();
        return fales;
    } else if(timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요')
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function()){
        loading.style.display = 'none';
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
}

function copyurl() {
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.Value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사 되었습니다");
}

shareButton .addEventlistener('click', copyurl);
openButton .addEventlistener('click', openModal);
closeButton .addEventlistener('click', closeModal);
startButton .addEventlistener('click', calculator);