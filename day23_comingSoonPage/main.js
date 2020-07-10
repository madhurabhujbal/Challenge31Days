//Setup End Date for countdown (getTime == Time in miliseconds)
let launchDate = new Date("July 11, 2020 12:00:00").getTime();

//Setup timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
    //Get current time
    let now = new Date().getTime();

    //Get difference in time to get time left until reaches 0
    let t = launchDate - now;

    //Check if time is above 0
    if(t > 0) {
        //Setup days, hours, seconds and minutes

        //Algorithm to calculate days
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //Prefix any number below 10 with '0'
        if (days < 10) {
            days = "0" + days;
        }
    }
}