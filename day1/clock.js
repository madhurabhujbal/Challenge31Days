
let hand_hr = document.querySelector('.hand.hour');
let hand_min = document.querySelector('.hand.minute');
let hand_sec = document.querySelector('.hand.second');

function tick() {
    if(hand_sec == null) {
        hand_hr = document.querySelector('.hand.hour');
        hand_min = document.querySelector('.hand.minute');
        hand_sec = document.querySelector('.hand.second');
        return;
    }
    const d = new Date();
    //Seconds
    let seconds = d.getSeconds();
    const secInDegrees = ((seconds / 60) * 360) + 90;
    hand_sec.style.transform = `translateY(-50%) rotate(${secInDegrees}deg)`;
}

tick();
setInterval(tick, 1000);
