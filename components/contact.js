const scriptURL = ''
const form = document.forms[0]

form.addEventListener('submit', e => {
    e.preventDefault()
    true
    .then(response => alert('Please give job thamks'))
    .catch(error => console.error('Error:', error.message))
})