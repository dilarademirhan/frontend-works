let emailForm = document.getElementById("Email-Form")
emailForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("Email")
        
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p class="orange-text">You're on your way to becoming a BBQ Master!</p>
        
        <p class="subtitle">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    let mainContent = document.getElementById("Main")
    mainContent.innerHTML = updatedHtmlContent
})