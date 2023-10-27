const modalOpen = () => {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer.style.display === 'block') {
        modalContainer.style.display = 'none';
    } else {
        modalContainer.style.display = 'block';
    }
}

// Event listener for the Escape keypress
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer.style.display === 'block') {
            modalContainer.style.display = 'none';
        }
    }
});


// document.addEventListener("DOMContentLoaded", function() {
//   var navLinks = document.querySelectorAll('nav a');
//   var sections = document.querySelectorAll('.rightbox > div');
//   var modalContainer = document.getElementById('modal-container');
//   var modalContent = document.getElementById('modal-content');

//   // Add click event listeners to the navigation links
//   navLinks.forEach(function(link, index) {
//     link.addEventListener("click", function(event) {
//       event.preventDefault(); // Prevent the default behavior of links
//       hideAllSections();

//       // Check if the link clicked is for registration or login
//       if (link.id === "registration") {
//         // Show the registration modal
//         showModal('<iframe src="https://wn1dcl4t.nocodb.com/#/nc/form/87b400e3-007a-47b1-bc39-6dfbc9ad58a9" frameborder="0"></iframe>');
//       } else if (link.id === "login") {
//         // Fetch and show the login content in the modal
//         fetch('login.html')
//           .then(response => response.text())
//           .then(content => showModal(content))
//           .catch(error => console.error(error));
//       }
//     });
//   });

//   // Function to hide all sections
//   function hideAllSections() {
//     sections.forEach(function(section) {
//       section.classList.add('noshow');
//     });
//   }

//   // Function to show a specific section
//   function showSection(section) {
//     section.classList.remove('noshow');
//   }

//   // Function to show the modal
//   function showModal(content) {
//     modalContent.innerHTML = content;
//     modalContainer.style.display = "block";
//   }

//   // Function to hide the modal
//   function hideModal() {
//     modalContent.innerHTML = ''; // Clear the modal content
//     modalContainer.style.display = "none";
//   }

//   // Initially, show the first section
//   showSection(sections[0]);
// });











// // Function to open the modal
// const openModal = () => {
//     const modalContainer = document.getElementById('modal-container-form');
//     modalContainer.style.display = 'block';
// }

// // Function to open the New Request option
// const openNewRequest = () => {
//     const modalContainer = document.getElementById('modal-container');
//     // modalContainer.innerHTML = `<iframe src="https://wn1dcl4t.nocodb.com/#/nc/form/87b400e3-007a-47b1-bc39-6dfbc9ad58a9" frameborder="0"></iframe>`;
//     modalContainer.style.display = 'block';
// }

// // Function to open the Log in option
// const openLogin = () => {
//     // You can handle the "Log in" action here
//     alert('Log in clicked');
//     closeModal();
// }

// // Function to close the modal
// const closeModal = () => {
//     const modalContainer = document.getElementById('modal-container-form');
//     modalContainer.style.display = 'none';
// }

// // Event listener for the Escape keypress
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });


