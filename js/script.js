const contact_btn = document.querySelector('.profile__btn');
const form_overlay = document.querySelector('.form-overlay')
const form = document.querySelector('.form')
console.log(form)

let openForm = () => {
    form_overlay.style.display = 'block';
    form.style.display = 'block';
}
let closeForm = () => {
    form_overlay.style.display = 'none';
    form.style.display = 'none';
}

contact_btn.addEventListener('click', openForm);
form_overlay.addEventListener('click', closeForm);


const send = form.querySelector('.form__btn');
console.log(send)

form.addEventListener('submit', function(event){
    event.preventDefault();
    const nameInput = form.querySelector('.form__input_name');
    const emailInput = form.querySelector('.form__input_email');
    const message = form.querySelector('.form__textarea');
    let array = [];
    array.push(nameInput, emailInput, message);
    array.forEach(item => {
        console.log(item.value)
    })
})