const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const text = document.getElementById('text');

const operate = function () {
    let result = 0;
    const numOne = parseInt(document.getElementById('num-one').value);
    const numTwo = parseInt(document.getElementById('num-two').value);
    const operator = document.querySelector('.radio-input:checked').value;

    switch (operator) {
        case 'add':
            result = numOne + numTwo;
            break;

        case 'subtract':
            result = numOne - numTwo;
            break;

        case 'multiply':
            result = numOne * numTwo;
            break;

        case 'divide':
            if (numTwo !== 0) {
                result = numOne / numTwo;
            } else {
                result = 'not possible (divide by 0)';
            }
            break;
    }

    text.innerText = `The result is ${result}.`
}


submitBtn.addEventListener('click', operate);

resetBtn.addEventListener('click', () => {
    document.getElementById('num-one').focus();
    text.innerText = 'Results will update here.'
})

