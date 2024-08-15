const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
        body.classList.add('shadow-effect');

        setTimeout(function() {
            body.classList.remove('shadow-effect');
        }, 600); 
    });
});
