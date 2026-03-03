document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('feedback');
    const userEmail = document.getElementById('userEmail');
    const userFullName = document.getElementById('userFullName');
    const agreement = document.getElementById('agreement');
    const textField = document.getElementById('textField');
    const MESSAGE = 'Форма была успешно отправлена';

    userEmail.addEventListener('input', function () {
        removeErrors(userEmail);
    });

    userFullName.addEventListener('input', function () {
        removeErrors(userFullName);
    });

    agreement.addEventListener('input', function () {
        clearCheckBoxErrors(agreement);
    });

    textField.addEventListener('input', function () {
        removeErrors(textField);
    });

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        clearErrors();

        let isValidForm = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(userEmail.value.trim())) {
            isValidForm = false;
            showError('Почта введена некорректно', userEmail);
        }

        if(userFullName.value.trim().split(/\s+/).length < 2) {
            isValidForm = false;
            showError('Должно быть минимум 2 слова', userFullName);
        }

        if(textField.value.trim().split(/\s+/).length < 3) {
            isValidForm = false;
            showError('Опишите проблему подробнее (минимум 3 слова)', textField);
        }

        if(!agreement.checked) {
            isValidForm = false;
            showCheckBoxError('Необходимо поставить галочку', agreement);
        }

        if(isValidForm) {
            alert(MESSAGE);
            form.reset();
        }
    });


    function clearErrors(){
        const errors = document.querySelectorAll('.help.is-danger');
        errors.forEach(el => el.remove());

        const inputs = document.querySelectorAll('.input, .textarea');
        inputs.forEach(el => el.classList.remove('is-danger'));
    }


    function removeErrors(name){
        name.classList.remove('is-danger');

        const errors = name.parentElement.querySelector('.help.is-danger');
        if(errors){
            errors.remove();
        }
    }


    function clearCheckBoxErrors(name){
        const position = name.closest('.field');

        const errors = position.querySelector('.help.is-danger');

        if(errors){
            errors.remove();
        }

    }


    function showError(message, name) {
        name.classList.add('is-danger');

        const error = document.createElement('p');
        error.className = 'is-danger help';
        error.textContent = message;

        name.parentElement.appendChild(error);
    }


    function showCheckBoxError(message,  name) {
        const position = name.closest('.field');

        const error = document.createElement('p');
        error.className = 'is-danger help';
        error.textContent = message;

        position.appendChild(error);
    }
});