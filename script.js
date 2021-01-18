// Minimum and maximum numbers those will be generated randomly
const minimum = 0;
const maximum = 100;

const randomNumber = () => {
  // Returns a random integer from 0 to 50
  return Math.floor(Math.random() * maximum) + minimum;
};

// First number
const first = randomNumber();
const second = randomNumber();
document.getElementById('first').textContent = first;
// Second number
document.getElementById('second').textContent = second;

const submitBtn = document.getElementById('submitAnswer');

// Function to check if user inserted a number 
const isNumber = (e) => {
  const messageEl = document.getElementById('message');
  if (isNaN(e.value)) {
    messageEl.innerText= 'Please insert a number!';
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
    messageEl.innerText = '';
  }
}

// Function to check if the addition is right
const checkAddition = () => {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const rightAnswer = first + second;
  // Get user's answer from input element (string) and parse it into number;
  if (userAnswer === rightAnswer) {
    alert('Horray you got it right!');
  } else {
    alert(`The answer is wrong`);
  }
}
