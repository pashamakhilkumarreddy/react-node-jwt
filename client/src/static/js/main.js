document.addEventListener('DOMContentLoaded', () => {
  const _navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if (_navBurgers.length) {
    _navBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const _target = document.getElementById(target);
        el.classList.toggle('is-active');
        _target.classList.toggle('is-active');
      });
    });
  }
});