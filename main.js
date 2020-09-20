document.onscroll = function() {
    scrollTop = window.pageYOffset;
    allDivs = document.getElementsByClassName('section-divider');
    for (i = 0; i < allDivs.length; i++) {
        curDiv = allDivs[i];
        heightBefore = 0;
        if (i > 0) {
            heightBefore = allDivs[i - 1].offsetHeight / 3;
        }
        if (scrollTop > curDiv.offsetTop - heightBefore) {
            color = curDiv.getAttribute("data-color");
            document.body.style.backgroundColor = color;
        }

    }
};

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
if (screen.width <= 699) {
    let phoneDir = dir + "/m/index.html";
    document.location = phoneDir;
}