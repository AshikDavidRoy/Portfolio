document.addEventListener('DOMContentLoaded', function () {
    // This event listener will execute when the page is fully loaded.

    // Your existing event listener for the Escape keypress
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Function to open the modal
    const openModal = () => {
        const modalContainer = document.getElementById('modal-container-form');
        modalContainer.style.display = 'block';
    }

    // Function to close the modal
    const closeModal = () => {
        const modalContainer = document.getElementById('modal-container-form');
        modalContainer.style.display = 'none';
    }

    // Now, you can decide when to open the modal, for example, after a delay:
    setTimeout(openModal, 3000); // Open the modal after 3 seconds (adjust the delay as needed)
});

// Function to open the New Request option
const openNewRequest = () => {
    const modalContainer = document.getElementById('modal-container');
    // modalContainer.innerHTML = `<iframe src="https://wn1dcl4t.nocodb.com/#/nc/form/87b400e3-007a-47b1-bc39-6dfbc9ad58a9" frameborder="0"></iframe>`;
    modalContainer.style.display = 'block';
}

// Function to open the Log in option
const openLogin = () => {
    // You can handle the "Log in" action here
    window.location.href = 'http://localhost/profile/login.php';    
    closeModal();
}
