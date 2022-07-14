const input= document.querySelector('input');
const duplicateField=document.querySelector('#duplicateField')

input.addEventListener('input', function() {
    duplicateField.textContent=input.value;
})

const Button= document.querySelector('button');

Button.addEventListener('click', (event) => {
    this.preventDefault;
    console.log(duplicateField.textContent);
    input.value='';
})