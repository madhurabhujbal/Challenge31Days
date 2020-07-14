const image = document.querySelector('.image');

image.addEventListener('mousemove', function(e) {
    let width = image.offsetWidth;
    let height = image.offsetHeight;

    //Getting x and y positions when hovered over the image
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    console.log(mouseY + " : " + mouseX);
});