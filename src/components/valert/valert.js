import main from './templates/main';

function valert(message, mod) {
  const rootElement = document.createElement('div');

  rootElement.classList.add('valert');
  rootElement.insertAdjacentHTML('afterbegin', main(message, mod));

  return rootElement;
}

export default valert;
