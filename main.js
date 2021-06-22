'use strict';

const listBox = document.querySelector('.listBox');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__addBtn');


function onAdd() {
    const text = input.value;
    // console.log(text);
    if (text === '') {
        input.focus();
        return;
    }
    const list = createList(text);
    listBox.appendChild(list);
    list.scrollIntoView({block:'center'});

    input.value = '';
    input.focus();
}

function createList(text) {
    const listRow = document.createElement('li');
    listRow.setAttribute('class', 'list__row');

    const list = document.createElement('div');
    list.setAttribute('class', 'list');

    const toDo = document.createElement('span');
    toDo.setAttribute('class', 'list__todo');
    toDo.innerText = text;

    const listBtn = document.createElement('div');
    listBtn.setAttribute('class', 'list__btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'list__delete');
    deleteBtn.innerHTML = '<i class="fas fa-minus-circle"></i>'
    deleteBtn.addEventListener('click', () => {
        listBox.removeChild(listRow);
    });

    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'list__complete');
    completeBtn.innerHTML = '<i class="fas fa-check-circle"></i>'
    completeBtn.addEventListener('click', () => {
        toDo.style.textDecoration = 'line-through';
        toDo.style.color = 'rgb(151, 154, 163)';
    });


    const listDivider = document.createElement('div');
    listDivider.setAttribute('class', 'list__divider');

    listBtn.appendChild(deleteBtn);
    listBtn.appendChild(completeBtn);

    list.appendChild(toDo);
    list.appendChild(listBtn);

    listRow.appendChild(list);
    listRow.appendChild(listDivider);
    return listRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});