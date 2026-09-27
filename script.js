/* =========================================================
   GGHS ALUMNI CONNECT
   ========================================================= */


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId, clickedButton) {

    // Hide every page
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active navigation state
    document.querySelectorAll(".nav-btn").forEach(function(button) {
        button.classList.remove("active");
    });


    // Add active navigation state
    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    // Close mobile menu
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.remove("open");
    }


    // Update Back to Home button
    updateBackHomeButton(pageId);


    // Go to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================================================
   QUICK BUTTONS
   ========================================================= */

function showPageById(pageId) {

    const buttons = document.querySelectorAll(".nav-btn");

    const pageOrder = {

        home: 0,
        alumni: 1,
        events: 2,
        gallery: 3,
        profile: 4

    };


    const buttonIndex = pageOrder[pageId];


    showPage(
        pageId,
        buttons[buttonIndex]
    );
}



/* =========================================================
   BACK TO HOME BUTTON
   ========================================================= */

function goHome() {

    // Find the Home navigation button
    const homeButton = document.querySelector(
        '.nav-btn[onclick*="home"]'
    );


    // Show Home page
    showPage("home", homeButton);
}



/* Show/hide the back-to-home button */

function updateBackHomeButton(pageId) {

    const backHomeButton =
        document.getElementById("backHomeBtn");


    if (!backHomeButton) {
        return;
    }


    // Hide button on Home
    if (pageId === "home") {

        backHomeButton.classList.add("hidden");

    }

    // Show button everywhere else
    else {

        backHomeButton.classList.remove("hidden");

    }

}



/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const navbar =
        document.getElementById("navbar");


    if (navbar) {
        navbar.classList.toggle("open");
    }

}



/* =========================================================
   ALUMNI SEARCH
   ========================================================= */

function searchAlumni() {

    const searchBox =
        document.getElementById("alumniSearch");

    const batchFilter =
        document.getElementById("batchFilter");


    const searchText =
        searchBox.value.toLowerCase().trim();

    const selectedBatch =
        batchFilter.value;


    const alumniCards =
        document.querySelectorAll(".alumni-card");


    alumniCards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const batch =
            card.dataset.batch;


        const matchesSearch =
            name.includes(searchText) ||
            batch.includes(searchText);


        const matchesBatch =
            selectedBatch === "" ||
            batch === selectedBatch;


        if (
            matchesSearch &&
            matchesBatch
        ) {

            card.style.display = "flex";

        }

        else {

            card.style.display = "none";

        }

    });

}



/* =========================================================
   SCROLL TO TOP BUTTON
   ========================================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener(
    "scroll",
    function() {

        if (!topButton) {
            return;
        }


        if (window.scrollY > 350) {

            topButton.classList.add("show");

        }

        else {

            topButton.classList.remove("show");

        }

    }
);



function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =========================================================
   REGISTRATION FORM
   ========================================================= */

function submitRegistration(event) {

    event.preventDefault();


    /*
       THIS IS CURRENTLY ONLY THE FRONT-END.

       Later:

       FORM
         ↓
       JAVASCRIPT
         ↓
       BACKEND / API
         ↓
       DATABASE
         ↓
       SCHOOL / ADMIN

       The backend can be connected here later.
    */


    alert(
        "Registration submitted successfully!\n\n" +
        "The school database connection will be added next."
    );

}



/* =========================================================
   INITIAL PAGE SETUP + ANIMATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Home is the starting page,
        // so hide the Back to Home button
        updateBackHomeButton("home");


        const cards =
            document.querySelectorAll(
                ".quick-card, " +
                ".alumni-card, " +
                ".event-card, " +
                ".gallery-item"
            );


        cards.forEach(
            function(card, index) {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(15px)";


                setTimeout(
                    function() {

                        card.style.transition =
                            "opacity 0.5s ease, " +
                            "transform 0.5s ease";

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0)";

                    },
                    80 * index
                );

            }
        );

    }
);