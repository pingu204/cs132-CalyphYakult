// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// https://www.youtube.com/watch?v=V-CBdlfCPic
navbar = document.querySelector(".navbar");
scrollWatcher = document.querySelector("#data-scroll-watcher");

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle("sticking", !entries[0].isIntersecting);
})

navObserver.observe(scrollWatcher);

function generateDeptModals(depts) {
    let logoContainer = document.getElementById("dept-logos");
    let modalContainer = document.getElementById("dept-modals");

    for (let dept of depts) {
        // Create logo
        let logo = document.createElement("img");
        logo.setAttribute("src", "assets/images/dept_logos/" + dept.id + ".png");
        logo.setAttribute("data-bs-toggle", "modal");
        logo.setAttribute("data-bs-target", "#" + dept.id);
        logo.setAttribute("tabIndex", "0");

        logoContainer.appendChild(logo);

        // Create Modal
        let modalDiv = document.createElement("div");
        modalDiv.setAttribute("id", dept.id);
        modalDiv.setAttribute("class", "modal fade");
        modalDiv.setAttribute("role", "dialog");
        modalDiv.setAttribute("tabIndex", "-1");

        let modalDialog = document.createElement("div");
        modalDialog.setAttribute("class", "modal-dialog modal-dialog-centered");

        let modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        modalContent.classList.add('customStuff');
        
        let modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        let deptTitle = document.createElement("h1");
        deptTitle.setAttribute("class", "card-title fs-5");
        deptTitle.innerText = dept.name;

        let modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body p-4");
        let outerCard = document.createElement("div");
        outerCard.setAttribute("class", "card bg-gray");
        let innerCard = document.createElement("div");
        innerCard.setAttribute("class", "card-body p-4");
        let heading = document.createElement("h6");
        heading.setAttribute("class", "card-title emph");
        heading.innerText = "Data Pre-processing";
        innerCard.appendChild(heading);
        for (desc of dept.description) {
            var body = document.createElement("p");
            body.innerHTML = desc;
            innerCard.appendChild(body);
        }
          
        outerCard.appendChild(innerCard);
        modalBody.appendChild(outerCard);

        modalHeader.appendChild(deptTitle);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);

        modalDialog.appendChild(modalContent);

        modalDiv.appendChild(modalDialog);
        modalContainer.appendChild(modalDiv);

        modalDiv.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                let modalInstance = new bootstrap.Modal(modalDiv);
                modalInstance.hide(); 
            }
        });

        logo.addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                let modal = new bootstrap.Modal(document.getElementById(dept.id)); 
                modal.show();
            }
        });
    }
}

generateDeptModals(deptEntries);