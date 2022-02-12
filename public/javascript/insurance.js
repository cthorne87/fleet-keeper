async function addInsurance(event) {
    event.preventDefault();
    console.log('click');
    console.log(event);
    // const response = await fetch('/api/insurance', {
    //     method: 'POST',
    //     mode: 'same-origin',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         company: document.querySelector('.company-input').value.trim(),
    //         policy_number: document.querySelector('.policy-input').value.trim(),
    //         start_date: document.querySelector('.start-input').value.trim(),
    //         end_date: document.querySelector('.end-input').value.trim(),
    //         vehicle_id:
    //     })
    // })
}

document.querySelector('#add-insurance').addEventListener('submit', addInsurance);