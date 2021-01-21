document.addEventListener("DOMContentLoaded", function() {
    createGallery();
});

function createGallery() {
    const gallery = document.querySelector(".image-gallery")

    for( let i = 1; i <= 12; i++) {
        const image = document.createElement("IMG");
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.id = i;
        //call showImage function
        image.onclick = showImage;

        const list = document.createElement("LI");
        list.appendChild(image);

        gallery.appendChild(list);
    }
}

function showImage(e) {
    const id = Number(e.target.dataset.id)

    const image = document.createElement("IMG");
    image.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement("DIV");
    overlay.appendChild(image);
    overlay.classList.add("overlay");
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove("block");
    }

    //show in html
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("block")
}
