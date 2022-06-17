const input = document.getElementById('input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  if (input.value === '' || input.value == null) {
    e.preventDefault()
    document.getElementById('error').style.visibility = 'visible'
  }
})
