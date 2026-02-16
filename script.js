document.addEventListener('DOMContentLoaded', () => {
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const btnGmail = document.getElementById('btn-gmail');

    btnWhatsapp.addEventListener('click', () => {
        window.open('https://wa.me/5492617233561?', '_blank');
    });
    btnGmail.addEventListener('click', () => {
        const mail = "sanchezbautistadev@gmail.com";
        const subject = "Consulta por servicios web";
        const body = "Buenos días, ví tu página web y me gustaría saber más sobre tus servicios";
        const url = `https://mail.google.com/ma
        
        il/?view=cm&fs=1&to=&su=${subject}&body=${body}`;

        window.open(url, '_blank');
    });


});

