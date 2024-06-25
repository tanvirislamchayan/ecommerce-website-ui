document.addEventListener('DOMContentLoaded', (event) => {
   var blgContainer = document.querySelectorAll('.blog-img-content');

   blgContainer.forEach(element => {
        var blgMainImg = element.querySelector('.blgMainImg');
        var blgSmlImg = element.querySelectorAll('.blgSmlImg');

        blgSmlImg.forEach(img => {
            img.addEventListener('click', function() {
                var tmp = blgMainImg.src;
                blgMainImg.src = this.src;
                this.src = tmp;
            });
        });
   });
});
