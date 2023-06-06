// Get the buttons and language-specific elements
var englishButton = document.getElementById('englishButton');
var arabicButton = document.getElementById('arabicButton');
var englishElements = document.getElementsByClassName('english');
var arabicElements = document.getElementsByClassName('arabic');

// Add event listener to the English button
englishButton.addEventListener('click', function() {
    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', 'english');

    // Show English elements
    Array.from(englishElements).forEach(function(element) {
        element.style.display = 'block';
    });

    // Hide Arabic elements
    Array.from(arabicElements).forEach(function(element) {
        element.style.display = 'none';
    });
});

// Add event listener to the Arabic button
arabicButton.addEventListener('click', function() {
    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', 'arabic');

    // Show Arabic elements
    Array.from(arabicElements).forEach(function(element) {
        element.style.display = 'block';
    });

    // Hide English elements
    Array.from(englishElements).forEach(function(element) {
        element.style.display = 'none';
    });
});

// Check the stored language preference and apply it on page load
document.addEventListener('DOMContentLoaded', function() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage === 'arabic') {
        // Show Arabic elements
        Array.from(arabicElements).forEach(function(element) {
            element.style.display = 'block';
        });

        // Hide English elements
        Array.from(englishElements).forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        // Show English elements by default
        Array.from(englishElements).forEach(function(element) {
            element.style.display = 'block';
        });

        // Hide Arabic elements by default
        Array.from(arabicElements).forEach(function(element) {
            element.style.display = 'none';
        });
    }
});


var sidebarVisible = false;

function showSidebar(title, imagePath, bio,workshop) {
    
    var sidebarr = document.getElementById("sidebarr");
    var sidebarImage = document.getElementById("sidebar-image");
    var sidebarTitle = document.getElementById("sidebar-title");
    var sidebarBio = document.getElementById("sidebar-bio");
    var workshopBio = document.getElementById("workshop-bio");

    if (!sidebarVisible) {
        sidebarImage.src = imagePath;
        sidebarTitle.textContent = title;
        sidebarBio.textContent = bio;
        workshopBio.textContent = workshop;
        sidebarr.classList.add("show");
        sidebarVisible = true;
    } else {
        sidebarr.classList.remove("show");
        sidebarVisible = false;
    }
}

document.addEventListener("click", function(event) {
    var sidebarr = document.getElementById("sidebarr");

    if (!event.target.classList.contains("im123") && sidebarVisible) {
        sidebarr.classList.remove("show");
        sidebarVisible = false;
    } else if (event.target.classList.contains("image-wrapperr")) {
        // If the image wrapper is clicked, prevent hiding the sidebar
        event.stopPropagation();
    }
});



if(localStorage.getItem("animed")==="true") {
    var element = document.getElementById('fade-out-element');
    if (element != null) {
        element.remove();
    }
}
else{
        var element = document.getElementById('fade-out-element');
        if(element != null){
            element.style.visibility = "visible";
        }
}

setTimeout(function() {
    var element = document.getElementById('fade-out-element');
    element.classList.add('fade-out');
    localStorage.setItem("animed", "true");
}, 4000); // 3000 milliseconds = 3 seconds

setTimeout(function() {
    var element = document.getElementById('fade-out-element');
    element.remove();
}, 5500); // 3000 milliseconds = 3 seconds





