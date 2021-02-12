import main from './templates/main';
import footer from './templates/footer';
import vinput from '../../components/vinput/vinput';
import vselect from '../../components/vselect/vselect';
import vcancel from '../../components/vcancel/vcancel';
import vcreate from '../../components/vcreate/vcreate';
import valert from '../../components/valert/valert';

function newEvent({ users, time, days, columns }) {
  const rootElement = document.createElement('div');
  const usersMultiple = users
    .filter((user) => user.multiple)
    .map((user) => {
      return { ...user };
    });
  usersMultiple[0].default = true;

  const nameInput = vinput('', 'Tech talk');
  const usersSelect = vselect(usersMultiple, true, 'vselect__static_large');
  const daySelect = vselect(days, false, 'vselect__static_large');
  const timeSelect = vselect(time, false, 'vselect__static_large');

  const alertBox = document.createElement('div');
  let errorName = false;
  let errorBooked = false;
  alertBox.classList.add('valert-box');

  rootElement.classList.add('new-event');
  rootElement.insertAdjacentHTML('afterbegin', main());
  rootElement.querySelector('[data-type="name"]').append(nameInput.rootElement);
  rootElement
    .querySelector('[data-type="users"]')
    .append(usersSelect.rootElement);
  rootElement.querySelector('[data-type="day"]').append(daySelect.rootElement);
  rootElement
    .querySelector('[data-type="time"]')
    .append(timeSelect.rootElement);
  rootElement.insertAdjacentHTML('beforeend', footer());
  rootElement.querySelector('[data-type="cancel"]').append(vcancel());
  rootElement
    .querySelector('[data-type="create"]')
    .append(vcreate(createHandler));

  rootElement.append(alertBox);

  function createHandler(event) {
    const createDay = daySelect.getState()[0].name.slice(0, 3);
    const createTime = timeSelect.getState()[0].id;
    const createName = nameInput.getState();
    const createUsers = usersSelect.getState();

    if (createName.trim() === '') {
      if (errorName) {
        event.stopPropagation();
        return;
      }

      const alert = valert('Please enter the name of the event', 'warning');

      errorName = true;
      alertBox.prepend(alert);

      setTimeout(() => {
        alert.remove();
        errorName = false;
      }, 5000);

      event.stopPropagation();
      return;
    }

    const column = columns.get(createDay);
    const currentCell = column.find((cell) => cell.id === createTime);

    if (currentCell.value) {
      if (errorBooked) {
        event.stopPropagation();
        return;
      }

      const alert = valert(
        'Failed to create an event. Time slot is already booked',
        'danger'
      );

      errorBooked = true;
      alertBox.append(alert);

      setTimeout(() => {
        alert.remove();
        errorBooked = false;
      }, 5000);

      event.stopPropagation();
      return;
    }

    currentCell.value = createName;
    currentCell.users = createUsers;
  }

  return rootElement;
}

export default newEvent;
