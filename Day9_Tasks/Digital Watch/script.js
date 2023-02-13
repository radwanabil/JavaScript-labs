const selectMenu = document.querySelectorAll("select");
const currTime = document.querySelector("h1");
const alarmBtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime, isAlarmSet = false;

for (let i = 12; i > 0; i--) {
    if (i < 10) {
        i = '0' + i
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--) {
    if (i < 10) {
        i = '0' + i
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
    if (i < 10) {
        i = '0' + i
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let AMPM = i == 1 ? "AM" : "PM"
    let option = `<option value="${AMPM}">${AMPM}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}
function time() {
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    var period = '';
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hour == 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    hour = update(hour);
    mins = update(mins);
    secs = update(secs);
    setTimeout(time, 1000);
    currTime.innerText = `${hour}:${mins}:${secs} ${period}`;
    if (alarmTime === `${hour}:${mins}:${secs} ${period}`) {
        alert("ALARM IS RINGING!!!");

    }

}
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
time();


alarmBtn.addEventListener("click", function () {
    if (isAlarmSet) {
        alarmTime = '';
        content.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`

    if (time.includes('Hour') || time.includes('Minute') || time.includes('Seconds') || time.includes('AM/PM')) {
        return alert("Please set alarm correctly!!")
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
})