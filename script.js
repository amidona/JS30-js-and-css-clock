const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; /* "+ 90" is to offset the 90deg we used to set start position */
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secondsDegrees === 90) {
        secondHand.style.transition = `all 0s`;
    } else {
        secondHand.style.transition = `all 0.05s cubic-bezier(.13,4.02,.68,.19)`;
    };

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    if (minutesDegrees === 90) {
        minHand.style.transition = `all 0s`;
    } else {
        minHand.style.transition = `all 0.05s cubic-bezier(.13,4.02,.68,.19)`;
    };

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (hoursDegrees === 90) {
        hourHand.style.transition = `all 0s`;
    } else {
        hourHand.style.transition = `all 0.05s cubic-bezier(.13,4.02,.68,.19)`;
    };
};

setInterval(setDate, 1000);

