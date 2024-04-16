
const toggleCheckbox = document.getElementById('toggle-menu');
const dropdownMenu = document.querySelector('.dropdown');

toggleCheckbox.addEventListener('change', function() {

  if (toggleCheckbox.checked) {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});