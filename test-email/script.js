
/**  Enviar 0 */
const btn = document.getElementById('btn-send');
let name = document.querySelector("#name")
let message = document.querySelector("#message")

function emailEmail(){
    /** 1 Validar  */
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        if(!name.value){
            console.log("Erro preencher o campo nome")
            alert("Erro preencher o campo nome")
            return
        }

        if(!message.value){
            console.log("Erro preencher o campo corpo do email")
            alert("Erro preencher o campo corpo do email")
            return
        }

        console.log(name.value)
        console.log(message.value)
    });
    

    /** 2 Enviar  */
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending with success';

        const serviceID = 'default_service';
        const templateID = 'template_xrev5ps';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Success okay!';
                alert('Success okay!');

                /** 3 Enviar  */
                document.getElementById('form').reset()
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
    
}