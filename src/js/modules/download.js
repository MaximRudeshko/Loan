export default class Download{
    constructor(triggers){
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/evolve.jpg';
    }

    downloadFile(path){
        const link = document.createElement('a');
/*         link.addEventListener('click', e => {
            e.preventDefault ()
        }) */
        link.setAttribute('href', path);
        link.setAttribute('download', 'picture');

        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        link.remove()
    }

    bindTriggers(){
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                this.downloadFile(this.path)
            })
        })
    }
}