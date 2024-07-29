const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    // Seconds
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // Minutes
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    // Hours
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

    console.log(`hour : ${hours} minute : ${mins} second : ${seconds}`);
}

setInterval(setDate, 1000);