const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Служит для сообщения информации пользователю')
});

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    prompt('Выводит окно, в котором нужно ввести текст')
});



