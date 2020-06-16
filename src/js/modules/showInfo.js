export default class ShowInfo{
    constructor(triggerSelector){
        this.btns = document.querySelectorAll(triggerSelector);
    }

    bindTriggers(){
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.closest('.module__info-show').nextElementSibling
                message.classList.add('animated', 'slideInDown');
                message.classList.toggle('msg')
            })
        })
    }
}