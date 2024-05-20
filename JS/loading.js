function loadingthisPedro(time, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
        if(callback){
            callback();
        }
    });
}

async function pedroIsLoading() {
    await loadingthisPedro();
    window.location.href = '../HTML/home.html';
}

function showLoadtime(startingTime, ...countdown) {
    countdown.forEach((number, index) => {
        const timeDiv = document.createElement('div');
        timeDiv.classList.add('time');
        timeDiv.textContent = number;
        document.getElementById('timeContainer').appendChild(timeDiv);

        setTimeout(() => {
            timeDiv.style.display = 'block';
        }, (index + 1) * 1000);
        
        setTimeout(() => {
            timeDiv.style.display = 'none';
            if (index == countdown.length - 1) {
                pedroIsLoading();
            }
        }, (index + 2) * 1000);
    });
}

function theCallbackfunctionN0302(number) {
    console.log(`Number ${number} displayed`);
}

const timingContaining = 5000;
const countdownNumbers = Array.from({ length: timingContaining / 1000 }, (_, i) => timingContaining / 1000 - i);

showLoadtime(timingContaining, ...countdownNumbers);