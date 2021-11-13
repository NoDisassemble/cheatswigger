// Load Landing Page
function initialLoad() {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'templates/landing.html');
    xhttp.send();
    xhttp.onload = function () { template.innerHTML = xhttp.responseText }
};

initialLoad();

// Accordion 
const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        acc_contents.forEach((acc) => {
            if (
                e.target.nextElementSibling !== acc &&
                acc.classList.contains("active")
            ) {
                acc.classList.remove("active");
                acc_btns.forEach((btn) => btn.classList.remove("active"));
            }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
});

window.onclick = (e) => {
    if (!e.target.matches(".accordion-header")) {
        acc_btns.forEach((btn) => btn.classList.remove("active"));
        acc_contents.forEach((acc) => acc.classList.remove("active"));
    }
};

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



