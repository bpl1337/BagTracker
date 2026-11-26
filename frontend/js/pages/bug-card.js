class BugCardPage {
  constructor() {
    this.form = document.querySelector('.comment-form');
    this.textarea = this.form.querySelector('textarea');
    this.button = this.form.querySelector('.btn');
    
    this.textarea.addEventListener('input', () => this.updateButton());
    this.button.addEventListener('click', (e) => this.send(e));
  }

  updateButton() {
    if (this.textarea.value.trim() === '') {
      this.button.classList.add('disabled');
    } else {
      this.button.classList.remove('disabled');
    }
  }

  send(e) {
    e.preventDefault();

    const comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = '<span class="avatar dark">L</span>' +
      '<div class="body"><div class="hd"><b>Lid</b>Тимлид, только что</div></div>';
    comment.querySelector('.body').append(this.textarea.value.trim());
    this.form.before(comment);

    this.textarea.value = '';
    this.updateButton();
  }
}

new BugCardPage();
