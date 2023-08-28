/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ============== Menu Show ================*/
/* Validate if constent exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ============== Menu Hidden ================*/
/* Validate if constent exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-mwnu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the bg-header class to
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/

const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
  });


/*=============== CHOOSE FAQ ===============*/

const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item
faqItems.forEach((item) => {
    const faqHeader = item.querySelector('choose__faq-header')

    // 2. Select each button click
    faqHeader.addEventListener('click', () =>{
        // 5. Call the toggleItem function
        toggleItem(item)
    })
})

//create fuunction to dispaly the content
const toggleItem = (item) => {
    // 3.1 Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 4. add max - height to the content and add the faq-open class
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open');
}

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/