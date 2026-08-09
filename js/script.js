/*
 * L4R-77 Portfolio
 * Main JavaScript — Phase 4 Refined
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DOM REFERENCES
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("primary-navigation");
    const dropdown = document.querySelector(".nav-dropdown");
    const dropdownButton = document.querySelector(".nav-dropdown-button");
    const projectsGrid = document.getElementById("projects-grid");
    const currentYear = document.getElementById("current-year");


    /* =====================================================
       MOBILE MENU TOGGLE
    ===================================================== */

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");
            menuToggle.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });


        // Close menu when a nav link is clicked
        navigation.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });

        });

    }


    /* =====================================================
       RESEARCH DROPDOWN
    ===================================================== */

    if (dropdown && dropdownButton) {

        dropdownButton.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = dropdown.classList.toggle("open");
            dropdownButton.setAttribute("aria-expanded", String(isOpen));

        });


        // Close dropdown when clicking outside
        document.addEventListener("click", (event) => {

            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("open");
                dropdownButton.setAttribute("aria-expanded", "false");
            }

        });


        // Close dropdown on Escape key
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                dropdown.classList.remove("open");
                dropdownButton.setAttribute("aria-expanded", "false");
                dropdownButton.focus();
            }

        });

    }


    /* =====================================================
       PROJECT RENDERING
    ===================================================== */

    function renderProjects() {

        if (!projectsGrid) {
            return;
        }

        projectsGrid.innerHTML = "";


        projects.forEach((project) => {

            const article = document.createElement("article");
            article.className = "project-card";
            article.dataset.category = project.category;


            const technologies = project.technologies
                .map((tech) => `<span>${escapeHTML(tech)}</span>`)
                .join("");


            // Determine if repository link is a real URL or placeholder
            const isRepoPlaceholder =
                !project.repository ||
                project.repository.startsWith("[") ||
                project.repository === "";

            const githubLink = isRepoPlaceholder
                ? `
                    <span>
                        Repository pending
                    </span>
                `
                : `
                    <a
                        href="${escapeAttribute(project.repository)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub →
                    </a>
                `;


            // Status display logic
            const statusMap = {
                "planning": "Planning",
                "in-progress": "In Progress",
                "completed": "Completed",
                "paused": "Paused"
            };

            const statusDisplay =
                statusMap[project.status] || project.status;


            article.innerHTML = `

                <div class="card-top">

                    <span class="card-type">
                        PROJECT
                    </span>

                    <span class="difficulty">
                        ${escapeHTML(statusDisplay)}
                    </span>

                </div>


                <h3>
                    ${escapeHTML(project.name)}
                </h3>


                <p>
                    ${escapeHTML(project.description)}
                </p>


                <div class="card-meta">
                    ${technologies}
                </div>


                <div class="card-footer">

                    <span>
                        ${escapeHTML(statusDisplay)}
                    </span>

                    ${githubLink}

                </div>

            `;


            projectsGrid.appendChild(article);

        });

    }


    renderProjects();


    /* =====================================================
       PROJECT FILTERS
    ===================================================== */

    const filterButtons = document.querySelectorAll(".filter-button");

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            // Update active button
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");


            // Filter cards
            const projectCards = document.querySelectorAll(".project-card");

            projectCards.forEach((card) => {

                if (filter === "all" || card.dataset.category === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});


/* =========================================================
   SECURITY HELPERS
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}