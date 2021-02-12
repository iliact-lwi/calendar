function main(message, mod) {
  return `
    <div class="alert alert-${mod} valert__message" role="alert">
      ${message}
    </div>
  `;
}

export default main;
