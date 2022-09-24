window.addEventListener('scroll', function() {
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

function toggleMenu() {
    const menuToggle = documen.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');

}

function toggleBlur() {
    var blur = document.getElementsByTagName("body");
    blur.classList.toggle('bluractive');
}