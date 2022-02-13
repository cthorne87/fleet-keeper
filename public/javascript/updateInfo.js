const vehicleId = window.location.toString().split('/').slice(-1).pop();

async function updateVehicle(event) {
    event.preventDefault();
    const type = document.querySelector('input[name="type"]').value.trim();
    const make = document.querySelector('input[name="make"]').value.trim();
    const model = document.querySelector('input[name="model"]').value.trim();
    const purchased_date = document.querySelector('input[name="purchased-date"]').value.trim();

    // Put request

}

document.querySelector('#update-vehicle-form').addEventListener('submit', updateVehicle);


async function updateRegistration(event) {
    event.preventDefault();
    const state = document.querySelector('input[name="state"]').value.trim();
    const issued_date = document.querySelector('input[name="issued"]').value.trim();
    const expiration_date = document.querySelector('input[name="expires"]').value.trim();

    // Put request
    const response = fetch('/api/registration/')
}

document.querySelector('#update-registration-form').addEventListener('submit', updateRegistration);


async function updateInsurance(event) {
    event.preventDefault();
    const company = document.querySelector('input[name="company"]').value.trim();
    const policy_number = document.querySelector('input[name="policy-number"]').value.trim();
    const start_date = document.querySelector('input[name="start-date"]').value.trim();
    const end_date = document.querySelector('input[name="end-date"]').value.trim();

    // Put request

}

document.querySelector('#update-insurance-form').addEventListener('submit', updateInsurance);