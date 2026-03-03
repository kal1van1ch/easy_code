document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});

function showError(input, message) {
    input.classList.add('is-danger');
    const help = document.createElement('p');
    help.classList.add('help', 'is-danger');
    help.textContent = message;
    input.parentNode.parentNode.appendChild(help);
}
