const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
    selected.classList.toggle('active');
})

optionList.forEach(i => {
    i.addEventListener('click', () => {
        selected.innerHTML = i.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
        selected.classList.remove('active');
    })
})