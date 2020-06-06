export default class Slider{
    constructor(page,btns){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.currentSlideIndex = 1;
    };

    showSlides(n){
        if(n > this.slides.length){
            this.currentSlideIndex = 1;
        }
        if(n < 1){
            this.currentSlideIndex = this.slides.length;
        }

        this.slides.forEach(item => {
            item.style.display = 'none'
        });

        this.slides[this.currentSlideIndex - 1].style.display = 'block'
    };

    plusSlide(n){
        this.showSlides(this.currentSlideIndex += n)
    };

    render(){
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
        this.showSlides(this.currentSlideIndex)
    }

    
    

}