class LoginPage {
  constructor() {
    this.email = document.querySelector('#login-email');
    this.pass = document.querySelector('#login-pass');
    this.button = document.querySelector('#login-btn');
    this.error = document.querySelector('#login-error');

    this.email.addEventListener('input', () => this.updateButton());
    this.pass.addEventListener('input', () => this.updateButton());
    this.button.addEventListener('click', (e) => this.login(e));

    this.updateButton();
  }

  updateButton() {
    if (this.email.value === '' || this.pass.value === '') {
      this.button.classList.add('disabled');
    } else {
      this.button.classList.remove('disabled');
    }
  }

  login(e) {
    if (this.email.value !== 'lid@student.tsu.ru' || this.pass.value !== 'demo') {
      e.preventDefault();
      this.error.classList.remove('is-hidden');
    }
  }
}

new LoginPage();
