import main from './templates/main';

function vmodal({ title, body, accept, cancel }) {
  const rootElement = document.createElement('div');

  rootElement.classList.add('vmodal');
  rootElement.insertAdjacentHTML('afterbegin', main(title, body));

  rootElement
    .querySelector('[data-type="cancel"]')
    .addEventListener('click', cancel, false);
  rootElement
    .querySelector('[data-type="accept"]')
    .addEventListener('click', accept, false);

  return rootElement;
}

export default vmodal;
