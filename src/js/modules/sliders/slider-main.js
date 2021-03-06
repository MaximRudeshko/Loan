import Slider from './slider';

export default class MainSlider extends Slider{
    constructor(page, btns, moduleNexts, modulePrevs){
        super(page,btns, moduleNexts, modulePrevs);
    }

    showSlides(n){
        if(n > this.slides.length){
            this.currentSlideIndex = 1;
        }
        if(n < 1){
            this.currentSlideIndex = this.slides.length;
        }

        try {
            this.hansonBlock.style.opacity = 0;
            if(n === 3){
               setTimeout(() => {
                this.hansonBlock.style.opacity = 1;
                this.hansonBlock.classList.add('animated', 'slideInUp');
               },3000)
            }else{
                this.hansonBlock.classList.remove('slideInUp');
            }
        } catch (e){}

        this.slides.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });

        this.slides[this.currentSlideIndex - 1].style.display = 'block';
    };

    plusSlide(n){
        this.showSlides(this.currentSlideIndex += n);

    };

    bindTriggers(){
        this.btns.forEach(item => {
            item.addEventListener('click', (e) => { 
                this.plusSlide(1)
            })

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentSlideIndex = 1;
                this.showSlides(this.currentSlideIndex);
            })
        })

        this.moduleNexts.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlide(1)
            })
        })

        this.modulePrevs.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlide(-1)
            })
        })
    }

    render(){
        if(this.container){
            try {
                this.hansonBlock = document.querySelector('.hanson');
            } catch (error) {}
    
            this.showSlides(this.currentSlideIndex);
            this.bindTriggers();
        }
    }

}