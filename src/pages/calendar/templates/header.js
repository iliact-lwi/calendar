function header() {
  return `
    <div class="calendar__header">
      <div class="calendar__title">
        Calendar
      </div>
      <div class="calendar__buttons">
        <div class="calendar__new-event">
          <button type="button" class="btn btn-primary" data-link="/new-event">New event +</button>
        </div>
      </div>
    </div>
  `;
}

export default header;
