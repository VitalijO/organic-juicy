//burger menu
const menuIcon = document.querySelector(".menu-icon"),
header = document.querySelector("header"),
body = document.querySelector('body');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    body.classList.toggle('no--scroll');
})


/* slider
 arrows */

const sliderArrows = document.querySelector('.slider-arrows');
const slidesAllItems = sliderArrows.querySelectorAll('.slider-arrows__item');
prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
next = sliderArrows.querySelector('.slider-arrows__arrow--right');

prev.addEventListener('click', ()=>showSliderArrows(-1));

next.addEventListener('click', ()=>showSliderArrows(1));

 let currentIndex = 0;
 
function showSliderArrows(n) {
currentIndex += n;

if (currentIndex < 0)currentIndex=slidesAllItems.length-1;  
if (currentIndex >= slidesAllItems.length)currentIndex=0; 
 
slidesAllItems.forEach(item=>item.style.display = "none");
slidesAllItems[currentIndex].style.display="block";
}

function autoSlide() {
    showSliderArrows(1);
}

 
let autoSlideInterval = setInterval(autoSlide, 4000);

// Зупинка автоматичного слайдера при наведенні миші та відновлення при знятті наведення
sliderArrows.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

sliderArrows.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(autoSlide, 5000);
});



 showSliderArrows(0);


// slider dots 
const sliderDots = document.querySelector('.slider__dots'),
    slidesDots= sliderDots.querySelectorAll('.slider-dots__item');//images
    wrapperDots = sliderDots.querySelector('.slider-dots__nav') ; // dots icon


const dots = []

for(let i=0; i<slidesDots.length; i++){
    const dot = document.createElement('button');
    dot.dataset.slideNumber = i;
 
    dot.classList.add('slider-dots__nav-item')
    if(i==0)dot.classList.add('slider-dots__nav-item--active')
    if(i!=0 )slidesDots[i].style.display = 'none';
    wrapperDots.append(dot);
    dot.addEventListener('click', showSliderDots);
    dots.push(dot);

}
    
function showSliderDots(e){
    
    const currentNumberImg = e.target.dataset.slideNumber; // create soome constant
    slidesDots.forEach(item=>item.style.display = 'none');
    slidesDots[currentNumberImg].style.display='block';
    dots.forEach(dot=>dot.classList.remove('slider-dots__nav-item--active'));
    e.target.classList.add('slider-dots__nav-item--active')
}

