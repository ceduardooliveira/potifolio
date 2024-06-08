document.getElementById("profile-pic").addEventListener("mouseover", function() {
    this.style.transform = "rotate(10deg)";
});

document.getElementById("profile-pic").addEventListener("mouseout", function() {
    this.style.transform = "rotate(0deg)";
});