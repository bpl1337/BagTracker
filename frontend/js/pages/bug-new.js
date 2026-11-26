class BugNewPage {
  constructor() {
    this.fields = document.querySelectorAll('#title, #desc, #exp, #act');
    this.errorBox = document.querySelector('#form-error');
    this.button = document.querySelector('#submit-btn');

    this.button.addEventListener('click', (e) => this.submit(e));
  }

  submit(e) {
    let hasEmpty = false;

    this.fields.forEach((input) => {
      const field = input.closest('.field');
      if (input.value.trim() === '') {
        field.classList.add('error');
        hasEmpty = true;
      } else {
        field.classList.remove('error');
      }
    });

    if (hasEmpty) {
      e.preventDefault();
      this.errorBox.classList.remove('is-hidden');
    }
  }
}

new BugNewPage();
