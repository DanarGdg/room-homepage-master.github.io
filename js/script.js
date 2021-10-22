const chk = document.getElementById('chk');
const hamburger = document.getElementById('hamburger');
const ul = document.querySelector('nav ul');
const heroimg = document.querySelector('.image-hero-section')
const arrows = document.querySelectorAll("#arrowLeftDekstop, #arrowRightDekstop, #arrowRightMobile, #arrowLeftMobile")
const headText = document.querySelector('aside h1');
const text = document.querySelector('aside p')
const arrowsRight = document.querySelectorAll('#arrowRightDekstop, #arrowRightMobile');
const arrowsLeft = document.querySelectorAll('#arrowLeftDekstop, #arrowLeftMobile');

hamburger.addEventListener('click', function() {
    if(chk.checked == false){
        ul.classList.add('slide')
        hamburger.setAttribute('src', 'images/icon-close.svg')
    }else{
        ul.classList.remove('slide')
        hamburger.setAttribute('src', 'images/icon-hamburger.svg')
    }
})

let counter = 1;

arrowsLeft.forEach(arrowLeft => {
    arrowLeft.addEventListener('click', () => {
        counter--;
        if(counter < 1){
            counter = 3;
        }
        heroimg.style.background = 'url(./images/desktop-image-hero-' + counter + '.jpg) no-repeat'
    })

    arrowsLeft[0].addEventListener('click', () => {
        heroimg.style.background = 'url(./images/mobile-image-hero-' + counter + '.jpg) no-repeat'
    })
})

arrowsRight.forEach(arrowRight => {
    arrowRight.addEventListener('click', () => {
        counter++;
        if(counter > 3){
            counter = 1;
        }
        heroimg.style.background = 'url(./images/desktop-image-hero-' + counter + '.jpg) no-repeat'
    })

    arrowsRight[0].addEventListener('click', () => {
        heroimg.style.background = 'url(./images/mobile-image-hero-' + counter + '.jpg) no-repeat'
    })
})

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (counter == 1) {
            headText.innerText = "Discover innovative ways to decorate";
            text.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
        }else if(counter == 2){
            headText.innerText = "We are available all across the globe";
            text.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
        }else if(counter == 3){
            headText.innerText = "Manufactured with the best materials";
            text.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
        }
        heroimg.style.transition = "background 0.2s ease-in-out";
        heroimg.style.backgroundSize = "cover"
    })
});