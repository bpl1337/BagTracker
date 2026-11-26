class BugListPage {
  constructor() {
    this.chips = document.querySelectorAll('[data-filter]');
    this.rows = document.querySelectorAll('#bug-rows tr[data-filters]');
    this.emptyRow = document.querySelector('#no-bugs');

    this.chips.forEach((chip) => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectChip(chip);
      });
    });
  }

  selectChip(chip) {
    this.chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');

    let count = 0;
    this.rows.forEach((row) => {
      if (row.dataset.filters.includes(chip.dataset.filter)) {
        row.classList.remove('is-hidden');
        count++;
      } else {
        row.classList.add('is-hidden');
      }
    });

    if (count === 0) {
      this.emptyRow.classList.remove('is-hidden');
    } else {
      this.emptyRow.classList.add('is-hidden');
    }
  }
}

new BugListPage();
