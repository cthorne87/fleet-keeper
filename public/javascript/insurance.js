async function addInsurance(event) {
    event.preventDefault();

    const company = document.querySelector('input[name="company"]').value.trim();
    const policy_number = document.querySelector('input[name="policy-number"]').value.trim();
    const start_date = document.querySelector('input[name="start-date"]').value.trim();
    const end_date = document.querySelector('input[name="end-date"]').value.trim();
    const vehicle_id = vehicleId;

    const response = await fetch('/api/insurance/', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            company,
            policy_number,
            start_date,
            end_date,
            vehicle_id
        })
    })
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}
if (document.querySelector('#add-insurance-btn')) {
    document.querySelector('#add-insurance-btn').addEventListener('click', addInsurance);
}

async function deleteInsurance(event) {
    event.preventDefault();
    const response = await fetch(`/api/insurance/${vehicleId}`, {
        method: 'DELETE'
    })
    if (response.ok) document.location.replace(`/vehicle/${vehicleId}`);
    else alert(response.statusText);
}

if (document.querySelector('#delete-insurance-btn')) {
    document.querySelector('#delete-insurance-btn').addEventListener('click', deleteInsurance)
}