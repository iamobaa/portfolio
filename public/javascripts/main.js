/* Main.js for OBAA.IO personal portfolio site
Agbana Bolu
301280402
June 11, 2023 */

// Create event listeners to watch for "Click" action on the Contact format

let contactFormButton = document.querySelector("#contactFormButton");
if (contactFormButton) {
    contactFormButton.addEventListener("click", contactFormOnsubmit, false);
}

function contactFormOnsubmit(event) {
    event.preventDefault();

    // Toast message to simulate form submission
    new Notify ({
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
        type: 1
    })

    // Redirect to home page
    setTimeout(()=> {
        window.location = "/"
    }, 3000)

}