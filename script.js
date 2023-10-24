function calculateAge() {
    var dob = document.getElementById("dob").value;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += monthDays;
    }

    var result = document.getElementById("result");
    var ageInMonths = document.getElementById("ageInMonths");
    var ageInWeeks = document.getElementById("ageInWeeks");
    var ageInDays = document.getElementById("ageInDays");

    result.innerHTML = "Age: " + age + " years, " + months + " months, " + days + " days";
    result.style.color = "#07c957";

    ageInMonths.innerHTML = "Age in Months: " + (age * 12 + months) + " months";
    ageInWeeks.innerHTML = "Age in Weeks: " + Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7)) + " weeks";
    ageInDays.innerHTML = "Age in Days: " + Math.floor((today - birthDate) / (1000 * 60 * 60 * 24)) + " days";
}

function updateClock() {
    var clockElement = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > 12) {
        hours -= 12;
        meridian = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
