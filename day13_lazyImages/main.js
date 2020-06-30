
let options = {
    threshold: 1 //Indicates how far image should be relative to bottom of page before it loads. with value=1 means loaded image should be fully on screen/in view before next image is loaded

}

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
    //entries are all of the observed items
    entries.forEach(entry => {
        console.log(entry);
    })
}

//Access all images
let imgs = document.querySelectorAll('img.lazy');
imgs.forEach(img => {
    observer.observe(img);
})