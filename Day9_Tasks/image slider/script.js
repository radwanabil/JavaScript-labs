var img = document.getElementById('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
var slides = ['img2.jpg', 'img3.jpg', 'img1.jpg'];

var Start = 0;
var index = 0;
var totalImages = slides.length;
function slider() {
    if (Start < slides.length) {
        Start = Start + 1;
    }
    else {
        Start = 1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[Start - 1] + ">";

}
setInterval(slider, 2000);

prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;

        if (index == totalImages) {
            index = 0;
        }
        img.innerHTML = "<img src=" + slides[index] + ">";
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
        img.innerHTML = "<img src=" + slides[index] + ">";
    }
}
