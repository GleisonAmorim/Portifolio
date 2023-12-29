function toggleNav() {
    var nav = document.getElementById("mySidenav");
    var projects = document.querySelectorAll(".project-container");

    if (nav.style.width === "250px") {
        nav.style.width = "0";
        projects.forEach(function (project) {
            project.classList.remove("open");
        });
    } else {
        nav.style.width = "250px";
        projects.forEach(function (project) {
            project.classList.add("open");
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var projects = document.querySelectorAll(".project-container");

        projects.forEach(function(project) {
            var projectTop = project.offsetTop;
            var projectHeight = project.clientHeight;
            var windowHeight = window.innerHeight;
            var scrollY = window.scrollY;

            var isVisible = scrollY > projectTop - windowHeight + projectHeight / 2;
            if (isVisible) {
                project.classList.add("visible");
            }
        });
    };
});
