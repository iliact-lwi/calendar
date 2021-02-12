import main from './templates/main';

function vcreate(createHandler) {
  const rootElement = document.createElement('div');

  rootElement.classList.add('vcreate');
  rootElement.insertAdjacentHTML('afterbegin', main());
  rootElement
    .querySelector('[data-type="create-button"]')
    .addEventListener('click', createHandler, false);

  return rootElement;
}

export default vcreate;
