function main(columns) {
  const items = [];

  for (const item of columns) {
    const cells = item[1].map((cell) => {
      const isValue = cell.value && cell.users;
      const { filter } = cell;

      return `
        <div class="vtable__cell" data-type="${
          cell.users ? 'cell' : 'disable'
        }" data-active="${isValue ? 'true' : 'false'}" data-id="${
        cell.id
      }" data-filter="${filter ? 'true' : 'false'}">
          ${
            isValue
              ? `
                <div class="vtable__value vtable__value_active" draggable="true">
                  ${cell.value}
                  <span class="vtable__remove" data-label="${cell.value}" data-type="remove">&#10006;</span>
                </div>
            `
              : cell.value
          }
        </div>
      `;
    });

    cells.unshift(
      `<div class="vtable__main-cell" data-id="0">${item[0]}</div>`
    );

    items.push(
      `<div class="vtable__column col" data-type="${item[0]}">
        ${cells.join('')}
      </div>`
    );
  }

  return `
    <div class="vtable__row row">
      ${items.join('')}
    </div>
  `;
}

export default main;
