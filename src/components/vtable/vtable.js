import main from './templates/main';
import vmodal from '../vmodal/vmodal';

function vtable(columns, root, filterColumns) {
  const rootElement = document.createElement('div');
  let dragged = false;
  let draggedParent = false;

  rootElement.classList.add('vtable');
  rootElement.insertAdjacentHTML('afterbegin', main(filterColumns));

  rootElement.addEventListener('dragstart', dragStart, false);
  rootElement.addEventListener('dragend', dragEnd, false);
  rootElement.addEventListener('dragenter', dragEnter, false);
  rootElement.addEventListener('dragover', dragOver, false);
  rootElement.addEventListener('dragleave', dragLeave, false);
  rootElement.addEventListener('drop', dragDrop, false);
  rootElement.addEventListener('click', removeHandler, false);

  function dragStart(event) {
    const { target } = event;

    if (target.nodeType === 1) {
      const { type } = target.parentNode.dataset;

      if (type === 'cell') {
        dragged = target;
        draggedParent = dragged.parentNode;

        setTimeout(() => {
          target.classList.add('vtable__value_invisible');
        }, 10);
      }
    }
  }

  function dragEnd(event) {
    const { target } = event;

    if (dragged) {
      dragged = false;
      draggedParent = false;
      target.classList.remove('vtable__value_invisible');
    }
  }

  function dragEnter(event) {
    const { target } = event;
    const { type } = target.dataset;
    const { active } = target.dataset;
    const { filter } = target.dataset;

    if (
      active === 'false' &&
      type === 'cell' &&
      dragged &&
      filter === 'false'
    ) {
      target.classList.add('vtable__cell_hover');
      event.preventDefault();
    }
  }

  function dragOver(event) {
    const { target } = event;
    const { type } = target.dataset;
    const { active } = target.dataset;
    const { filter } = target.dataset;

    if (
      active === 'false' &&
      type === 'cell' &&
      dragged &&
      filter === 'false'
    ) {
      event.preventDefault();
    }
  }

  function dragLeave(event) {
    const { target } = event;
    const { type } = target.dataset;
    const { active } = target.dataset;
    const { filter } = target.dataset;

    if (
      active === 'false' &&
      type === 'cell' &&
      dragged &&
      filter === 'false'
    ) {
      target.classList.remove('vtable__cell_hover');
    }
  }

  function dragDrop(event) {
    const { target } = event;
    const prevDay = draggedParent.parentNode.dataset.type;
    const prevTime = draggedParent.dataset.id;
    const nextDay = target.parentNode.dataset.type;
    const nextTime = target.dataset.id;

    const prevColumn = columns.get(prevDay);
    const prevCell = prevColumn.find((cell) => cell.id === prevTime);
    const nextColumn = columns.get(nextDay);
    const nextCell = nextColumn.find((cell) => cell.id === nextTime);

    nextCell.value = prevCell.value;
    nextCell.users = prevCell.users;

    prevCell.value = '';
    prevCell.users = [];

    target.classList.remove('vtable__cell_hover');
    target.append(dragged);
    target.setAttribute('data-active', 'true');
    draggedParent.setAttribute('data-active', 'false');
  }

  function removeHandler(event) {
    const { target } = event;
    const { type } = target.dataset;
    const { label } = target.dataset;

    if (type !== 'remove') return;

    const acceptRemove = () => {
      const removeValueNode = target.parentNode;
      const cellNode = removeValueNode.parentNode;
      const day = cellNode.parentNode.dataset.type;
      const time = removeValueNode.parentNode.dataset.id;

      const column = columns.get(day);
      const removeCell = column.find((cell) => cell.id === time);

      removeCell.value = '';
      removeCell.users = [];

      removeValueNode.remove();
      cellNode.setAttribute('data-active', 'false');

      modal.remove();
    };

    const cancelRemove = () => {
      modal.remove();
    };

    const modal = vmodal({
      title: 'Attention',
      body: `Are you sure, you want to delete "${label}" event?`,
      accept: acceptRemove,
      cancel: cancelRemove,
    });

    root.append(modal);
  }

  return rootElement;
}

export default vtable;
