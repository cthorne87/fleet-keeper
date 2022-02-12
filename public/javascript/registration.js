async function addRegistration(event) {
    event.preventDefault();
    console.log('click');
    console.log(event);
    // const response = await fetch('/api/registration', {
    //     method: 'POST',
    //     mode: 'same-origin',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({

    // state: document.querySelector('.state-input').value.trim(),
    // issued_date: document.querySelector('.issued-input').value.trim(),
    // expiration_date: document.querySelector('.expires-input').value.trim(),
    // vehicle_id: document.querySelector('')

    //     })
    // })
}

document.querySelector('#add-registration').addEventListener('submit', addRegistration);