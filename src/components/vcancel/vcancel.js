import main from './templates/main';

function vcancel() {
  const rootElement = document.createElement('div');

  rootElement.classList.add('vcancel');
  rootElement.insertAdjacentHTML('afterbegin', main());

  return rootElement;
}

export default vcancel;
