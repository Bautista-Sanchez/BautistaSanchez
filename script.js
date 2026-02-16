//--------------------------CONTACT BUTTONS LINK----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const btnGmail = document.getElementById('btn-gmail');

    const btnFiverr = document.getElementsByClassName('button-fiverr')
    const btnContact = document.getElementsByClassName('button-contact')

    btnWhatsapp.addEventListener('click', () => {
        window.open('https://wa.me/5492617233561?', '_blank');
    });
    btnGmail.addEventListener('click', () => {
        const mail = "sanchezbautistadev@gmail.com";
        const subject = "Consulta por servicios web";
        const body = "Buenos días, ví tu página web y me gustaría saber más sobre tus servicios";
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
        }
        
        else {
            window.open(url, '_blank');
        }
    });


});
