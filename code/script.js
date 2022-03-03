const countdown = () => {
    const countDate = new Date("June 24, 2022, 00:00:00").getTime() //getTime in milliseconds
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time converter
    const second = 1000; //Milliseconds in a second
    const minute = second * 60; 
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate
    const textDay = Math.floor(gap / day); //Math.floor pushes it down to a full number
    const textHour = Math.floor((gap % day) / hour); // % gives you the remainder of, if it's perfectly divided it gives you 0
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);


// Toggle button fuctions

let x = document.getElementById('cv');
let y = document.getElementById('portfolio');
let z = document.getElementById('btn');

function portfolio () { // Toggle button slide function for the register form
  x.style.left = '-400px'; // login form slide outside the box while login form is showed
  y.style.left = '50px'; // login form shows up win box
  z.style.left = '110px'; // Toggle button slide to register side
}

function cv () {  // Toggle button slide function for the login form
  x.style.left = '50px';
  y.style.left = '450px';
  z.style.left = '0px';
}
