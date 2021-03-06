import MainSlider from "./modules/sliders/slider-main";
import SliderMini from './modules/sliders/slider-mini';
import Player from "./modules/player";
import Difference from "./modules/difference";
import Forms from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";



window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulePageslider = new MainSlider({container: '.moduleapp', btns: '.next'})
    modulePageslider.render()

    const showUpSlider = new SliderMini({container: '.showup__content-slider',next: '.showup__next',prev: '.showup__prev', activeClass: 'card-active', animated: true});
    showUpSlider.init();

    const moduleSlider = new SliderMini({container: '.modules__content-slider', next: '.modules__info-btns .slick-next', activeClass: 'card-active', animated: true, prev: '.modules__info-btns .slick-prev', autoPlay: true});
    moduleSlider.init();

    const feedSlider = new SliderMini({container: '.feed__slider', next: '.feed__slider .slick-next', prev: '.feed__slider .slick-prev',activeClass: 'feed__item-active'});
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Forms('form').init();
    

    new Player('.play', '.overlay').init()
    new Player('.module__video-item .play', '.overlay').init();

    new ShowInfo('.plus').bindTriggers();

    new Download('.download').bindTriggers();
})