export default class Forms{
    constructor(forms){
        this.forms = document.querySelectorAll(forms);
        this.message = {
            success: 'Спасибо, мы скоро с вами свяжемся!',
            loading: 'Загрузка...',
            failure: 'Ошибка'
        };
        this.path = './assets/question.php'
    }

    async postData(url, data){
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
    
        return await res.text()
    }

    checkMailInput(){
        const inputs = document.querySelectorAll("[type = 'email']");

        inputs.forEach(input => {
            input.addEventListener('keypress', function(e){
                if(e.key.match(/[^a-z 0-9 @ \.]/ig)){
                    e.preventDefault()
                }
            })
        })
    }

    initMask(){
        function createMask(event){

            const setCursorPosition = (pos, elem) => {
                elem.focus();
    
                if(elem.setSelectionRange){
                    elem.setSelectionRange(pos,pos)
                }else if(elem.createTextRange){
                    const range = elem.createTextRange();
    
                    range.collapse(true);
                    range.moveEnd('character', pos);
                    range.moveStart('character', pos);
                    range.select()
                }     
            }
    
            let matrix = '+1 (___) ___-___',
                  i = 0,
                  def = matrix.replace(/\D/g, ''),
                  val = this.value.replace(/\D/g, '');
    
            if(def.length >= val.length){
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a){
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
            })
    
            if(event.type === 'blur'){
                if(this.value.length == 2){
                    this.value = ''
                }
            }else{
                setCursorPosition(this.value.length, this)
            }
        }
    
        let inputs = document.querySelectorAll('[name = "phone"]');
    
            inputs.forEach(item => {
                item.addEventListener('input', createMask);
                item.addEventListener('blur', createMask);
                item.addEventListener('focus', createMask);
    
            })
    }

    init(){

        this.checkMailInput();
        this.initMask();


        this.forms.forEach(item => {
            item.addEventListener('submit', e => {
                e.preventDefault();
                

                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    color:grey;
                    margin-top: 10px;
                    font-size:18px;
                `;
                item.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item)

                this.postData(this.path, formData)
                .then((res) => {
                    console.log(res);
                    statusMessage.textContent = this.message.success
                })
                .catch(() => {
                    statusMessage.textContent = this.message.failure
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove()
                    },2000)
                })

            })
        })

    }
}