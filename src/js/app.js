import Swiper, {Pagination, Navigation} from 'swiper';

// import './jquery.event.frame.js';
// import './jquery.parallax.min.js';
import './random-dot.js';

Swiper.use([Pagination, Navigation]);


document.addEventListener('DOMContentLoaded', ()=> {


    const materialsSlider = new Swiper('.materials-slider-container', {
        slidesPerView: 3,
        spaceBetween: 35,
        navigation: {
            prevEl: '.materials-prev',
            nextEl: '.materials-next'
        },
        breakpoints: {
            320: {
                slidesPerView: 1.15,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2.94,
                spaceBetween: 23,
            },
            
            1600: {
                slidesPerView: 2.94,
                spaceBetween: 35,
            }
        }
    })


    const btns = document.querySelectorAll(".acc-btn");

    // fn
    function accordion() {
        // this = the btn | icon & bg changed
        this.classList.toggle("is-open");

        // the acc-content
        const content = this.nextElementSibling;

        // IF open, close | else open
        if (content.style.maxHeight) { content.style.maxHeight = null; content.classList.toggle('active')}
        else { content.style.maxHeight = content.scrollHeight + "px"; content.classList.toggle('active') };
    }

    // event
    btns.forEach((el) => el.addEventListener("click", accordion));

    const burgerMenu = document.querySelector('.burger-menu'),
          closeMenu = document.querySelector('.menu-close')
    burgerMenu.addEventListener('click', ()=> {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('.menu').classList.add('active')
    })
    closeMenu.addEventListener('click', ()=> {
        document.querySelector('body').style.overflow = null
        document.querySelector('.menu').classList.remove('active')
    })
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('body').style.overflow = null
            document.querySelector('.menu').classList.remove('active')
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            // const topOffset = document.querySelector('header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });


    if (window.innerWidth > 992) {

        window.addEventListener("scroll", onScroll);

        function onScroll() {
            for (var item of document.querySelectorAll(".paralax")) {
                elementVisible(item);
            }
        }
        
        function elementVisible(el) {
            let top = el.offsetTop;
            let height = el.offsetHeight;
            let bottom = top + height;
            let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
            let IsBeforeTop = bottom < window.pageYOffset;
            
            if (!IsOverBottom && !IsBeforeTop) {
                el.querySelector('.parallax__layer').style.transform = 'translateY(-10%)'
                el.querySelector('.parallax__layer').style.transition = 'all 10s'
                // el.classList.add("show");
                // console.log(el);
            } else {
                el.querySelector('.parallax__layer').style.transform = null
                el.querySelector('.parallax__layer').style.transition = 'all 3s'
                
            }
        }

    }

    
   

    

})


