export default class Player{
    constructor(trigger, modalSelector){
        this.btns = document.querySelectorAll(trigger);
        this.modal = document.querySelector(modalSelector);
        this.close = this.modal.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
    }

    bindTriggers(){
        this.btns.forEach((item, i) => {
            try {
                const blockedElem = item.closest('.module__video-item').nextElementSibling;

                if(i % 2 === 0){
                    blockedElem.setAttribute('data-disbled', 'false')
                }
            } catch (error) {}
            
            item.addEventListener('click', () => {
                if(!item.closest('.module__video-item') || item.closest('.module__video-item').getAttribute('data-disabled') !== 'true'){
                    this.activeBtn = item;
                    if(document.querySelector('iframe#frame')){
                        this.modal.style.display = 'flex';
                        if(this.path !== item.getAttribute('data-url')){
                            this.path = item.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path})
                        }
                    }else{
                        this.path = item.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
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
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
        })

        this.modal.style.display = 'flex';
    }

    onPlayerStateChange(state){
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
        const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
        if(state.data === 0){
            if(blockedElem.querySelector('.play__circle').classList.contains('closed')){
                blockedElem.querySelector('.play__circle').classList.remove('closed');
                blockedElem.querySelector('svg').remove();
                blockedElem.querySelector('.play__circle').appendChild(playBtn);
                blockedElem.querySelector('.play__text').textContent = 'play video';
                blockedElem.querySelector('.play__text').classList.remove('attention');
                blockedElem.style.opacity = 1;
                blockedElem.style.filter = 'none'
                blockedElem.setAttribute('data-disbled', 'false')

            }
        }
        } catch (error) {
            
        }
    }

    init(){
        if(this.btns.length > 0){
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}