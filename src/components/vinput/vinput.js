import main from './templates/main';

function vinput(val, plc) {
  const rootElement = document.createElement('div');
  const placeholder = plc || '';
  let value = val || '';

  rootElement.classList.add('vinput');
  rootElement.insertAdjacentHTML('afterbegin', main(value, placeholder));
  rootElement
    .querySelector('[data-type="field"]')
    .addEventListener('input', inputHandler, false);

  function inputHandler(event) {
    const { target } = event;
    value = target.value;
  }

  function getState() {
    return value;
  }

  return {
    rootElement,
    getState,
  };
}

export default vinput;
