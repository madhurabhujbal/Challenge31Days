
let options = {
    threshold: 1 //Indicates how far image should be relative to bottom of page before it loads. with value=1 means loaded image should be fully on screen/in view before next image is loaded

}

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
    //entries are all of the observed items
    entries.forEach(entry => {
        //console.log(entry);
        if (entry.isIntersecting) {
            //We first take the image and change its source where we want to lazy load the image
            const img = entry.target;
            const img_src = img.dataset.src;//taking data from data-src in html
            console.log("Lazy loading", img);
            img.src = img_src;
            observer.unobserve(img);
        }
    })
}

//Access all images
let imgs = document.querySelectorAll('img.lazy');
imgs.forEach(img => {
    observer.observe(img);
})