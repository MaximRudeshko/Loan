import MainSlider from "./modules/sliders/slider-main"
import Player from "./modules/player";



window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', btns: '.next'});
    slider.render();

    const player = new Player('.play', '.overlay');
    player.init()
})