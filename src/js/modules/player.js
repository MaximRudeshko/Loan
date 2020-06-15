export default class Player{
    constructor(trigger, modalSelector){
        this.btns = document.querySelectorAll(trigger);
        this.modal = document.querySelector(modalSelector);
        this.close = this.modal.querySelector('.close');
    }

    bindTriggers(){
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                if(document.querySelector('iframe#frame')){
                    this.modal.style.display = 'flex'
                }else{
                    const path = item.getAttribute('data-url');
                    this.createPlayer(path);
                }
            })
        })
    }


    bindCloseBtn(){
        this.close.addEventListener('click', (e) => {
                this.modal.style.display = 'none';
                this.player.stopVideo();
        })

        document.querySelector('.overlay').addEventListener('click', e => {
            if (e.target == document.querySelector('.overlay')){
                this.modal.style.display = 'none';
                this.player.stopVideo();
            }
        })
    }

    

    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '360',
            width: '640',
            videoId: `${url}`
        })

        this.modal.style.display = 'flex';
    }

    init(){
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers();
        this.bindCloseBtn();
    }

    

}