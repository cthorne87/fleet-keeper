async function updateVehicle(event) {
    event.preventDefault();
    console.log(event);
    const type = document.querySelector('input[name="type"]').value.trim();
    const make = document.querySelector('input[name="make"]').value.trim();
    const model = document.querySelector('input[name="model"]').value.trim();
    const purchased_date = document.querySelector('input[name="purchased-date"]').value.trim();
    console.log({
        type,
        make,
        model,
        purchased_date
    })
}

document.querySelector('#update-vehicle-form').addEventListener('submit', updateVehicle);


async function updateRegistration(event) {
    event.preventDefault();
    console.log(event);
}

document.querySelector('#update-registration-form').addEventListener('submit', updateRegistration);


async function updateInsurance(event) {
    event.preventDefault();
    console.log(event);
}

document.querySelector('#update-insurance-form').addEventListener('submit', updateInsurance);