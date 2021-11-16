// Load Landing Page
function initialLoad() {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'templates/landing.html');
    xhttp.send();
    xhttp.onload = function () { template.innerHTML = xhttp.responseText }
};

initialLoad();


// Load external HTML files
function loadHtml(id, filename) {
    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "<h1>Page not found</h1>"; }
            }
        }
        xhttp.open("GET", `templates/${file}`, true);
        xhttp.send();
        return;
    }
}

// Modal for change log
const modalContainer = getElementById("modal-container");

function oPen() {
    modalContainer.style.display = "flex";
};

function cLose() {
    modalContainer.style.display = "none";
}



