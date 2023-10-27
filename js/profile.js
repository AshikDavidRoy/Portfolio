// /*active button class onclick*/
// $('nav a').click(function(e) {
//   e.preventDefault();
//   $('nav a').removeClass('active');
//   $(this).addClass('active');
//   if(this.id === !'payment'){
//     $('.payment').addClass('noshow');
//   }
//   else if(this.id === 'payment') {
//     $('.payment').removeClass('noshow');
//     $('.rightbox').children().not('.payment').addClass('noshow');
//   }
//   else if (this.id === 'profile') {
//     $('.profile').removeClass('noshow');
//      $('.rightbox').children().not('.profile').addClass('noshow');
//   }
//   else if(this.id === 'subscription') {
//     $('.subscription').removeClass('noshow');
//     $('.rightbox').children().not('.subscription').addClass('noshow');
//   }
//     else if(this.id === 'privacy') {
//     $('.privacy').removeClass('noshow');
//     $('.rightbox').children().not('.privacy').addClass('noshow');
//   }
//   else if(this.id === 'settings') {
//     $('.settings').removeClass('noshow');
//     $('.rightbox').children().not('.settings').addClass('noshow');
//   }
// });


// $(document).ready(function() {
//   // Initially, show the 'profile' section and set its link as active
//   $('.profile').removeClass('noshow');
//   $('nav a#profile').addClass('active');

//   $('nav a').click(function(e) {
//       e.preventDefault();

//       // Remove the 'active' class from all navigation links
//       $('nav a').removeClass('active');

//       // Hide all sections initially
//       $('.rightbox > div').addClass('noshow');

//       // Get the ID of the clicked link
//       var sectionId = $(this).attr('id');

//       // Add the 'active' class to the clicked link
//       $(this).addClass('active');

//       // Show the corresponding section
//       $('.' + sectionId).removeClass('noshow');
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
  // Get references to the navigation links and the corresponding sections
  var navLinks = document.querySelectorAll('nav a');
  var sections = document.querySelectorAll('.rightbox > div');

  // Add click event listeners to the navigation links
  navLinks.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of links
      hideAllSections();
      showSection(sections[index]);
    });
  });

  // Function to hide all sections
  function hideAllSections() {
    sections.forEach(function(section) {
      section.classList.add('noshow');
    });
  }

  // Function to show a specific section
  function showSection(section) {
    section.classList.remove('noshow');
  }

  // Initially, show the first section
  showSection(sections[0]);
});
