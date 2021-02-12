import main from './templates/main';

function vselect(users, multiple, mod = '', eventHandler) {
  const rootElement = document.createElement('div');
  let selected = users.filter((user) => user.default);
  let opened = false;

  rootElement.classList.add('vselect', 'vselect_close');
  rootElement.insertAdjacentHTML(
    'afterbegin',
    main(selected[0].name, users, mod)
  );
  rootElement
    .querySelector(`[data-id="${selected[0].id}"]`)
    .classList.add('vselect__dropdown-item_select');

  const icon = rootElement.querySelector('[data-type="icon"]');
  const input = rootElement.querySelector('[data-type="selected"]');

  rootElement.addEventListener('click', clickHandler, false);

  function clickHandler(event) {
    const { target } = event;

    if (target.closest('[data-type="static"]')) {
      opened ? close() : open();
    }

    const element = target.closest('[data-type="drop-item"]');
    if (element) {
      select(element.dataset.id);
    }
  }

  function open() {
    rootElement.classList.remove('vselect_close');
    rootElement.classList.add('vselect_open');

    icon.classList.remove('fa-caret-down');
    icon.classList.add('fa-caret-up');

    opened = true;
  }

  function close() {
    rootElement.classList.remove('vselect_open');
    rootElement.classList.add('vselect_close');

    icon.classList.remove('fa-caret-up');
    icon.classList.add('fa-caret-down');

    opened = false;
  }

  function select(id) {
    const isEquals = selected.find((item) => item.id === id);

    if (multiple && selected.length > 1) {
      if (isEquals) {
        selected = selected.filter((item) => item.id !== id);
        const values = selected.map((value) => value.name);

        input.textContent = values.join(', ');

        rootElement
          .querySelector(`[data-id="${id}"]`)
          .classList.remove('vselect__dropdown-item_select');

        return;
      }
    }

    if (multiple) {
      if (isEquals) return;

      const newSelected = users.filter((user) => user.id === id);
      selected = selected.concat(newSelected);
      const values = selected.map((value) => value.name);

      input.textContent = values.join(', ');

      rootElement
        .querySelector(`[data-id="${newSelected[0].id}"]`)
        .classList.add('vselect__dropdown-item_select');

      return;
    }

    close();

    const oldSelectedId = selected[0].id;
    selected = users.filter((user) => user.id === id);
    input.textContent = selected[0].name;

    rootElement
      .querySelector(`[data-id="${oldSelectedId}"]`)
      .classList.remove('vselect__dropdown-item_select');

    rootElement
      .querySelector(`[data-id="${selected[0].id}"]`)
      .classList.add('vselect__dropdown-item_select');

    if (eventHandler) eventHandler(selected);
  }

  function getState() {
    return selected;
  }

  return {
    rootElement,
    getState,
  };
}

export default vselect;
