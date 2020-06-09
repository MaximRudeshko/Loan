import MainSlider from "./modules/sliders/slider-main";
import SliderMini from './modules/sliders/slider-mini';
import Player from "./modules/player";



window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const showUpSlider = new SliderMini({container: '.showup__content-slider',next: '.showup__next',prev: '.showup__prev', activeClass: 'card-active', animated: true});
    showUpSlider.init();

    const moduleSlider = new SliderMini({container: '.modules__content-slider', next: '.modules__info-btns .slick-next', activeClass: 'card-active', animated: true, prev: '.modules__info-btns .slick-prev', autoPlay: true});
    moduleSlider.init();

    const feedSlider = new SliderMini({container: '.feed__slider', next: '.feed__slider .slick-next', prev: '.feed__slider .slick-prev',activeClass: 'feed__item-active'});
    feedSlider.init();
    

    const player = new Player('.play', '.overlay');
    player.init()
})