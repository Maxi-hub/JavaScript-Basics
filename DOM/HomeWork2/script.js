// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItemAllEl = document.querySelectorAll('.dropdown-item');
dropdownItemAllEl.forEach(element => {
    element.classList.add('super-dropdown');
    console.log(element);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnEl = document.querySelector('.btn');
const btnSecondaryClass = 'btn-secondary';

const classNameMove = () => {
    if (btnEl.classList.contains(btnSecondaryClass)) {
        btnEl.classList.remove(btnSecondaryClass);
        console.log(btnEl);
    }
    else {
        btnEl.classList.add(btnSecondaryClass);
        console.log(btnEl);
    }
};

classNameMove();


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menuEl = document.querySelector('.menu');
menuEl.remove(menuEl.classList.remove('dropdown-menu'));
console.log(menuEl);


// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const dropdownEl = document.querySelector('div.dropdown');
const linkEl = document.createElement('a');

linkEl.href = "#";
linkEl.textContent = 'link';

dropdownEl.insertAdjacentElement("afterend", linkEl);


// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const superDropdownEl = document.querySelector('#dropdownMenuButton');
superDropdownEl.id = 'superDropdown';
console.log(superDropdownEl);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledbyEl = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaLabelledbyEl.dataset.dd = 3; 
console.log(ariaLabelledbyEl);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggleEl = document.querySelector('.dropdown-toggle');
dropdownToggleEl.removeAttribute('type', 'button');
