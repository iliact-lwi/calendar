function main(title, body) {
  return `
    <div class="vmodal__modal">
      <div class="vmodal__content">
        <div class="vmodal__header">
          <span class="vmodal__title">${title}</span>
        </div>
        <div class="vmodal__body">
          <span>${body}</span>
        </div>
        <div class="vmodal__footer">
          <button type="button" class="vmodal__button btn btn-secondary" data-type="cancel">No</button>
          <button type="button" class="vmodal__button btn btn-primary" data-type="accept">Yes</button>
        </div>
      </div>
    </div>
  `;
}

export default main;
