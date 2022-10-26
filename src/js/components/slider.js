// const slider = $(document).ready(function () {
//     $('.carousel__wrapper').slick({
//         infinite: true,
//         speed: 1200,
//         autoplay: true,
// prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left-arrow.png" alt="prev"></button>',
// nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right-arrow.png" alt="next"></button>',
//         responsive: [
//             {
//                 breakpoint: 850,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                     arrows: false,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                     arrows: false,
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    prevButton: document.querySelector('.tiny-prev'),
    nextButton: document.querySelector('.tiny-next'),
    autoplayButtonOutput: false,
});

document.querySelector('.tiny-prev').onclick = function () {
    slider.goTo('tiny-prev');
};

document.querySelector('.tiny-next').onclick = function () {
    slider.goTo('tiny-next');
};
export default slider;