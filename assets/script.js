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

function generateGraphAccordion(graphs, accordionID) {
    accordionContainer = document.getElementById(accordionID);

    for (const [i, graph] of graphs.entries()) {
        accordionItem = document.createElement("div");
        accordionItem.setAttribute("class", "accordion-item");

        // Header for Department
        accordionHeader = document.createElement("h2");
        accordionHeader.setAttribute("class", "accordion-header");
        accordionHeaderButton = document.createElement("button");
        accordionHeaderButton.setAttribute("class", "accordion-button collapsed");
        accordionHeaderButton.setAttribute("type", "button");
        accordionHeaderButton.setAttribute("data-bs-toggle", "collapse");
        accordionHeaderButton.setAttribute("data-bs-target", "#carousel" + graph.acronym);
        accordionHeaderButton.setAttribute("aria-expanded", "true");
        accordionHeaderButton.setAttribute("aria-controls", "collapseOne");
        accordionHeaderButton.innerText = graph.title;
        accordionHeader.appendChild(accordionHeaderButton);

        // Accordion for Department
        accordionCarousel = document.createElement("div");
        accordionCarousel.setAttribute("id", "carousel" + graph.acronym);
        /* if (i == 0) {
            accordionCarousel.setAttribute("class", "accordion-collapse collapse show");
        }
        else { */
            accordionCarousel.setAttribute("class", "accordion-collapse collapsing");
        // }
        accordionCarousel.setAttribute("data-bs-parent", "#" + accordionID);
        accordionBody = document.createElement("div");
        accordionBody.setAttribute("class", "accordion-body");
        accordionImages = document.createElement("div");
        accordionImages.setAttribute("id", "carousel-" + graph.id + "-images");
        accordionImages.setAttribute("class", "carousel slide carousel-fade");
        accordionInner = document.createElement("div");
        accordionInner.setAttribute("class", "carousel-inner h-100");
        for (let j=0; j<5; j++) {
            carouselItem = document.createElement("div");
            if (j == 0) {
                carouselItem.setAttribute("class", "carousel-item h-100 active d-flex justify-content-center bg-graph");
            }
            else {
                carouselItem.setAttribute("class", "carousel-item h-100 d-flex justify-content-center bg-graph");
            }
            carouselImage = document.createElement("img");
            carouselImage.setAttribute("src", "data/new_graphs/" + graph.filename + " (" + (2020 + j).toString() + ").png");
            carouselImage.setAttribute("class", "d-block img-fluid");

            carouselItem.appendChild(carouselImage);
            accordionInner.appendChild(carouselItem);
        }

        carouselPrev = document.createElement("button");
        carouselPrev.setAttribute("class", "carousel-control-prev");
        carouselPrev.setAttribute("type", "button");
        carouselPrev.setAttribute("data-bs-target", "#carousel-" + graph.id + "-images");
        carouselPrev.setAttribute("data-bs-slide", "prev");

        prevSpan = document.createElement("span");
        prevSpan.setAttribute("class", "carousel-control-prev-icon");
        prevSpan.setAttribute("aria-hidden", "true");
        prevSpanText = document.createElement("span");
        prevSpanText.setAttribute("class", "visually-hidden");
        prevSpanText.innerText = "Previous";

        carouselPrev.appendChild(prevSpan);
        carouselPrev.appendChild(prevSpanText);

        carouselNext = document.createElement("button");
        carouselNext.setAttribute("class", "carousel-control-next");
        carouselNext.setAttribute("type", "button");
        carouselNext.setAttribute("data-bs-target", "#carousel-" + graph.id + "-images");
        carouselNext.setAttribute("data-bs-slide", "next");

        nextSpan = document.createElement("span");
        nextSpan.setAttribute("class", "carousel-control-next-icon");
        nextSpan.setAttribute("aria-hidden", "true");
        nextSpanText = document.createElement("span");
        nextSpanText.setAttribute("class", "visually-hidden");
        nextSpanText.innerText = "Next";

        carouselNext.appendChild(nextSpan);
        carouselNext.appendChild(nextSpanText);

        accordionImages.appendChild(accordionInner);
        accordionImages.appendChild(carouselPrev);
        accordionImages.appendChild(carouselNext);

        accordionBody.appendChild(accordionImages);

        accordionCarousel.appendChild(accordionBody);
        
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCarousel);

        accordionContainer.appendChild(accordionItem);
    }
}

generateGraphAccordion(graphEntries, "deptBudgetsAccordion");
generateGraphAccordion(depedBudgetEntries, "depedBudgetAccordion");