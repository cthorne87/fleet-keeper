// Add Registration
async function addRegistration(event) {
  event.preventDefault();

  const state = document.querySelector('input[name="state"]').value.trim();
  const issued_date = document.querySelector('input[name="issued"]').value.trim();
  const expiration_date = document.querySelector('input[name="expires"]').value.trim();
  const vehicle_id = vehicleId;

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

// Add Insurance
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

// For Dynamic Display
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
//