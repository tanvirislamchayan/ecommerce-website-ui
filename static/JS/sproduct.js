// Product image slider
document.addEventListener('DOMContentLoaded', (event) => {
    var mainImg = document.getElementById('mainImg');
    var smlImg = document.getElementsByClassName('smlImg');

    for (let i = 0; i < smlImg.length; i++) {
        smlImg[i].addEventListener('click', function() {
            mainImg.src = this.src;
        });
    }
});