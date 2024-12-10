const clearBtn = document.getElementById("clearBtn");
const generateBtn = document.getElementById("generateBtn");
const inputBox = document.getElementById("inputBox");
const answer = document.getElementById("answer");
let min = 1;
let max = 100;

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const amount = parseInt(inputBox.value);

    if (isNaN(amount) || amount <= 0) {
        answer.textContent = 'Please enter a positive number.';
        return;
    }
    const randomNum = [];
    
    for (let i = 0; i < amount; i++) {
          randomNum.push(Math.floor(Math.random() * max) + min);
    }
    answer.textContent = `${randomNum.join(', ')}`;
});

clearBtn.addEventListener('click', () => {
    inputBox.value = '';
    answer.textContent = '';
});
