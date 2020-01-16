const grid = document.querySelector('.grid');

grid.addEventListener('click', function(e) {
  // console.dir(e.target);
  // console.dir(e.currentTarget);
  // console.log(this);

  const removeTarget = e.target.parentElement;

  if (e.target.tagName === 'IMG') {
    const howMany = this.querySelectorAll('li').length;
    console.log(howMany);
    if (howMany > 1) {
      removeTarget.remove();
    } else {
      const photoTitle = e.target.alt;
      document.querySelector(
        '#art p'
      ).innerHTML = `<p>You've picked ${photoTitle}</p>`;
    }
  }
});
