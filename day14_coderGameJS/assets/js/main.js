//Settings
const FPS = 1000/60; //calculating frame rate per second. 1sec/60 i.e 60 frames/sec

//Save file, saving to local storage
let save = {
    bytes: 0,
    totalBytes: 0,
    bps: 0,
    player: {
        level: 0,
        nextLevel: 100,//bytes until next level
        increase: 3 //how many times bytes should be up for next level. eg. after level1, going to next level will need 3*100 bytes
    },
    power_ups: [], //option of cookie-clicker. similar to coding. As we type on keyboard, it appers on screen
    upgrades: [
        {
            name: "Intern",
            cost: 50,
            increase: 1.15, //how much the cost goes up every time when an intern is purchased
            value: 0.1, //worth of intern
            quantity: 0,
            unlocksAt: 0
        },
        {
            name: "Junior Developer",
            cost: 100,
            increase: 1.2,
            value: 0.5,
            quantity: 0,
            unlocksAt: 1
        }
    ]
}

//Get main elements
const bytes_el = document.getElementById('bytes');
const bps_el = document.getElementById('bps');
const upgrades_el = document.getElementById('upgrades');

/* Event Listeners */
document.addEventListener('keypress', coding);

/* Functions */
function increaseBytes(bytes) {//Increase bytes value by 'X'
    save.bytes +=bytes;
    totalBytes += bytes;
}

function coding() {
    increaseBytes(1);
}

function render() {
    //Render upgrades
    upgrades_el.innerHTML = "";//clears list to prevent duplication
    save.upgrades.forEach(display_upgrades);
}

function display_upgrades(upgrade, i) {// i here is index
    if(upgrade.unlocksAt <= save.player.level) {
        let button = document.createElement('button');
        button.classList.add('c-button');
        button.innerText = `${upgrade.name} (${upgrade.cost})`;
        button.addEventListener('click', () => purchase_upgrade(upgrade, i));
        upgrades_el.appendChild(button);
    }
}

//Call to functions
render();