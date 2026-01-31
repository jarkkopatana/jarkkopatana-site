document.querySelectorAll('[data-print]').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.getAttribute('data-print');
    document.getElementById('printField').value = name;
  });
});
