// Add Registration
async function addRegistration(event) {
    event.preventDefault();

    const state = document.querySelector('input[name="state"]').value.trim();
    const issued_date = document.querySelector('input[name="issued"]').value.trim();
    const expiration_date = document.querySelector('input[name="expires"]').value.trim();
    const vehicle_id = vehicleId || null;

    const response = await fetch('/api/registration', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            state,
            issued_date,
            expiration_date,
            vehicle_id
        })
    })
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}

if (document.querySelector('#add-registration-btn')) {
    document.querySelector('#add-registration-btn').addEventListener('click', addRegistration);
}

// Delete Registration
async function deleteRegistration(event) {
    event.preventDefault();
    const response = await fetch(`/api/registration/${vehicleId}`, {
        method: 'DELETE'
    })
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}

if (document.querySelector('#delete-registration-btn')) {
    document.querySelector('#delete-registration-btn').addEventListener('click', deleteRegistration);
}