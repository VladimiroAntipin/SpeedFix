//CHANGE THE HEADER BG-COLOR AT SCROLLING
const header = document.querySelector('.header');

const initialColor = 'rgba(26, 26, 26, 0)';
const finalColor = 'rgba(26, 26, 26, 1)';

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY) * 100;
    const backgroundColor = `rgba(26, 26, 26, ${scrollPercentage / 1})`;
    header.style.background = backgroundColor;
});

//FORM VALIDATION 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const checkbox = document.getElementById('checkbox');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form');

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const checkboxChecked = checkbox.checked;

  // CHECK NAME INPUT
  if (nameValue === '') {
    nameError.classList.remove('active');
  } else if (nameValue.length < 3) {
    nameError.classList.add('active');
    nameError.textContent = 'Name must be at least 3 characters long';
  } else {
    nameError.classList.remove('active');
  }

  // CHECK EMAIL INPUT
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue === '') {
    emailError.classList.remove('active');
  } else if (!emailRegex.test(emailValue)) {
    emailError.classList.add('active');
    emailError.textContent = 'Invalid email address';
  } else {
    emailError.classList.remove('active');
  }

  // ENABLE THE SUBMIT BUTTON IF ALL THE CONDITION ARE SATISFIED
  if (nameValue !== '' && emailRegex.test(emailValue) && checkboxChecked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

nameInput.addEventListener('input', validateInputs);
emailInput.addEventListener('input', validateInputs);
checkbox.addEventListener('change', validateInputs);

//RESET THE FORM ON SUBMIT
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateInputs();
    if(!submitButton.disabled) {
        nameInput.value = '';
        emailInput.value = '';
        checkbox.checked = false;
        nameError.classList.remove('active');
        emailError.classList.remove('active');
        submitButton.disabled = true;
    }
});
