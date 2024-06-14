document.getElementById("profile-pic").addEventListener("mouseover", function() {
    this.style.transform = "rotate(10deg)";
});

document.getElementById("profile-pic").addEventListener("mouseout", function() {
    this.style.transform = "rotate(0deg)";
});


document.addEventListener("DOMContentLoaded", function() {
    const githubLogo = document.getElementById("github");

    githubLogo.addEventListener("click", function() {
        window.open("https://github.com/ceduardooliveira", "_blank");
    });
});