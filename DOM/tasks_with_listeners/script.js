// 1. При изменении значения в input с id="from", значение содержащееся в нем моментально отображается в span. То есть при печати в input'е тег span также меняется.
const inputEl = document.querySelector('input[id="from"]');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', function (e) {
    spanEl.textContent = inputEl.value;
});


// 2. При клике на кнопку с классом messageBtn к элементу с классом message:
// - добавляем два класса: animate_animated и animate_fadeInLeftBig
// - устанавливаем данному элементу стиль visibility в значение 'visible'.
const btnEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');

btnEl.addEventListener('click', function (e) {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.style.visibility = 'visible';
});


// 3. При отправке формы проверяем, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не отправляется, также подсвечиваются незаполненные поля (устанавливается класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле,то при вводе в данное поле, производится проверка:
// - Если поле пустое, данное поле подсвечивается (уставнавливается класс error данному полю).
// - Если поле было чем-либо заполнено, подсветка (класс error) убирается.
const formEl = document.querySelector('form');
const buttonEl = formEl.querySelector('button');
buttonEl.type = 'submit';
const inputFormEl = formEl.querySelectorAll('.form-control');

formEl.addEventListener('submit', function (e) {  // в html на кнопке должен стоять type="submit"
    inputFormEl.forEach(element => {
        if (element.value.trim() === '') {
            element.classList.add('error');
            element.style.border = '3px solid red';
            e.preventDefault(); // при ошибке приостанавливает отправку формы
        } else {
            element.classList.remove('error');
            element.style.border = '1px solid black';
        }
    })
});

//or
buttonEl.addEventListener('click', function (e) {
    e.preventDefault();
    let allFieldsFilled = true;

    inputFormEl.forEach(element => {
        if (element.value.trim() === '') {
            element.classList.add('error');
            element.style.border = '3px solid red';
            allFieldsFilled = false;
            
        } else {
            element.classList.remove('error');
            element.style.border = '1px solid black';
        }
    })
    if(allFieldsFilled){
        formEl.submit();
    }
});

//or 
inputFormEl.forEach(element => {
    element.addEventListener('input', function () {
        if (element.value.trim() !== '') {
            element.classList.remove('error');
            element.style.border = '1px solid black';
        } else {
            element.classList.add('error');
            element.style.border = '3px solid red';
        }
    });
});