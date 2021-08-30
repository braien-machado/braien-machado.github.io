const agreementInput = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function enableSubmitBtn() {
  submitBtn.toggleAttribute('disabled');
}

agreementInput.addEventListener('click', enableSubmitBtn);

const counter = document.getElementById('counter');
counter.innerHTML = 500;

function changeCounter(event) {
  const defaultCounter = 500;
  const charCount = event.target.value.length;
  counter.innerHTML = defaultCounter - charCount;
}

const textArea = document.getElementById('textarea');
textArea.addEventListener('input', changeCounter);

function getRadioChecked(radioName) {
  const radioInputs = document.getElementsByName(radioName);
  for (let i = 0; i < radioInputs.length; i += 1) {
    const elem = radioInputs[i];
    if (elem.checked) {
      return elem.value;
    }
  }
  return '';
}

function getSubjects() {
  const subjectsInputs = document.querySelectorAll('.subject');
  const subjectsChecked = [];
  for (let i = 0; i < subjectsInputs.length; i += 1) {
    const elem = subjectsInputs[i];
    if (elem.checked) {
      subjectsChecked.push(elem.value);
    }
  }
  return subjectsChecked.join(', ');
}

function getInputsValue() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = getRadioChecked('family');
  const subjects = getSubjects();
  const rate = getRadioChecked('rate');
  const text = textArea.value;
  const arrayOfValues = [`${name} ${lastname}`, email, house, family, subjects, rate, text];
  return arrayOfValues;
}

function generateResult(event) {
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  const divResult = document.createElement('div');
  const fieldsResult = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const inputsValue = getInputsValue();
  form.innerHTML = '';
  for (let i = 0; i < fieldsResult.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${fieldsResult[i]}: ${inputsValue[i]}`;
    divResult.appendChild(paragraph);
  }
  form.appendChild(divResult);
}

submitBtn.addEventListener('click', generateResult);

//  03. Acrescente um formulário de login...
//  ---|> Caso o email seja "tryber@teste.com" e a senha seja "123456"
const entrarBotao = document.querySelector('.botaoEntrar');
function logar() {
  function validarLogin() {
    const loginBotao = document.querySelector('#login').value;
    const senhaBotao = document.querySelector('#senha').value;
    const email = 'tryber@teste.com';
    const senha = '123456';
    if (loginBotao === email && senhaBotao === senha) {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  }

  entrarBotao.addEventListener('click', validarLogin);
}
logar();

// Fim
