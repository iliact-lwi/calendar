function main(selected, users, mod) {
  const items = users.map((user) => {
    return `
      <div class="vselect__dropdown-item" data-type="drop-item" data-id="${user.id}" >${user.name}</div>
    `;
  });

  return `
    <div class="vselect__static ${mod}" data-type="static">
      <div class="vselect__selected" data-type="selected">${selected}</div>
      <div class="vselect__caret">
        <i data-type="icon" class="fas fa-caret-down"></i>
      </div>
    </div>
    <div class="vselect__dropdown">
      ${items.join('')}
    </div>
  `;
}

export default main;
