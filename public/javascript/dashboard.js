document.querySelector("#submit")
?.addEventListener("click", function() {
  console.log('starting to upload car')
  fetch("/api/vehicle", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      vin: document.querySelector("#vin").value,
      // date: document.querySelector("#date-purchased").value
    })
  }).then((res) => res.json())
  .then((data) => {
    console.log(data)
    window.location.href = `/vehicle/${data.id}`
   }).catch(e => console.log(e))
})