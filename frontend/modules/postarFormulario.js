async function postarFormulario (formDataUser) {
    try {
    await fetch('http://localhost:3000/registerNewUS3r', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': formDataUser.csrfToken
     },
     body: JSON.stringify({
        csrfToken: formDataUser.csrfToken
     }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    }
    catch(error) {console.log(error)}
}

const _postarFormulario = postarFormulario
export {_postarFormulario as postarFormulario}