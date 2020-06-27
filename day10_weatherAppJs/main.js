const api = {
    key: "446cc30bc37be1228e1d55b09335aeb6",
    baseurl: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) { //13 is keycode for Enter button
        //getResults(searchbox.value);
        console.log(searchbox.value);
    }
}