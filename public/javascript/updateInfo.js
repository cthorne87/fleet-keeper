const vehicleId = window.location.toString().split('/').slice(-1).pop();

async function updateVehicle(event) {
    event.preventDefault();
    const type = document.querySelector('input[name="type"]').value.trim();
    const make = document.querySelector('input[name="make"]').value.trim();
    const model = document.querySelector('input[name="model"]').value.trim();
    const purchased_date = document.querySelector('input[name="purchased-date"]').value.trim();

    // Put request
    const response = await fetch(`/api/vehicle/${vehicleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type,
            make,
            model,
            // purchased_date
        })
    });
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}

if (document.querySelector('#update-vehicle-form')) {
    document.querySelector('#update-vehicle-form').addEventListener('click', updateVehicle);
}


async function updateRegistration(event) {
    event.preventDefault();
    const state = document.querySelector('input[name="state"]').value.trim();
    const issued_date = document.querySelector('input[name="issued"]').value.trim();
    const expiration_date = document.querySelector('input[name="expires"]').value.trim();

    // Put request
    const response = await fetch(`/api/registration/${vehicleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            state,
            issued_date,
            expiration_date
        })
    });
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}

if (document.querySelector('#update-registration-form')) {
    document.querySelector('#update-registration-form').addEventListener('click', updateRegistration);
}


async function updateInsurance(event) {
    event.preventDefault();
    const company = document.querySelector('input[name="company"]').value.trim();
    const policy_number = document.querySelector('input[name="policy-number"]').value.trim();
    const start_date = document.querySelector('input[name="start-date"]').value.trim();
    const end_date = document.querySelector('input[name="end-date"]').value.trim();

    // Put request
    const response = await fetch(`/api/insurance/${vehicleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            company,
            policy_number,
            start_date,
            end_date
        })
    });
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}
if (document.querySelector('#update-insurance-form')) {
    document.querySelector('#update-insurance-form').addEventListener('click', updateInsurance);
}


function editDataHandler(event) {

    if (event.target.id === "toggle-modal-vehicle") {
        let el = document.getElementById('edit-vehicle-form');
        el.classList.toggle('hidden');
    }
    if (event.target.id === "toggle-modal-registration") {
        let el = document.getElementById('edit-registration-form');
        el.classList.toggle('hidden');
    }
    if (event.target.id === "toggle-modal-insurance") {
        let el = document.getElementById('edit-insurance-form');
        el.classList.toggle('hidden');
    }
}

if (document.querySelector('#toggle-modal-vehicle')) {
    document.querySelector('#toggle-modal-vehicle').addEventListener('click', editDataHandler)
}
if (document.querySelector('#toggle-modal-registration')) {
    document.querySelector('#toggle-modal-registration').addEventListener('click', editDataHandler)
}
if (document.querySelector('#toggle-modal-insurance')) {
    document.querySelector('#toggle-modal-insurance').addEventListener('click', editDataHandler)
}