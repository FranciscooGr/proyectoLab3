document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.figura').forEach(figura => {
        figura.addEventListener('click', function() {
            window.location.href = this.querySelector('img').getAttribute('data-url');
        });
    });
})