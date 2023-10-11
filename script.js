const submit = document.querySelector('#submit');
const content = document.querySelector('.content');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;
    const ConfirmPassword = document.querySelector('#c-password').value;
    const result = `${firstName} ${lastName}, ${email}, ${phone}, ${password}, ${ConfirmPassword}`;
    content.style.color = 'red';
    content.innerHTML = result;
})