import header from './templates/header';
import main from './templates/main';
import vselect from '../../components/vselect/vselect';
import vtable from '../../components/vtable/vtable';

function calendar({ users, columns }) {
  const rootElement = document.createElement('div');

  rootElement.classList.add('calendar');
  rootElement.insertAdjacentHTML('afterbegin', header());
  rootElement.insertAdjacentHTML('beforeend', main());

  const filterSelect = vselect(users, false, '', filterHandler);
  const tableBox = rootElement.querySelector('.calendar__main');

  rootElement
    .querySelector('.calendar__buttons')
    .prepend(filterSelect.rootElement);
  tableBox.append(vtable(columns, rootElement, columns));

  function filterHandler(selected) {
    const filterId = selected[0].id;

    if (filterId === '5') {
      tableBox.firstChild.remove();
      tableBox.append(vtable(columns, rootElement, columns));
      return;
    }

    const filterMap = new Map();

    for (const item of columns) {
      const filterCells = item[1].map((cell) => {
        if (!cell.users) return cell;
        if (cell.users.length === 0) return cell;
        const isIncludes = cell.users.some((user) => user.id === filterId);
        if (isIncludes) return cell;
        return { ...cell, id: cell.id, users: [], value: '', filter: 'true' };
      });

      filterMap.set(item[0], filterCells);
    }

    tableBox.firstChild.remove();
    tableBox.append(vtable(columns, rootElement, filterMap));
  }

  return rootElement;
}

export default calendar;
