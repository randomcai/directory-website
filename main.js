
// for the horizontal gallery
window.addEventListener('load', () => {
    if (!window.location.pathname.includes('clergy.html')) return;
    const track = document.querySelector('.timeline_H');
    const imgs = track.querySelectorAll('img');
    const half = imgs.length / 2;  // 8

    let pos = 0;
    const speed = 1; // px per frame, increase to go faster

    function scroll() {
        pos += speed;

        // Measure the exact width of the first set of images
        let firstHalfWidth = 0;
        for (let i = 0; i < half; i++) {
            firstHalfWidth += imgs[i].getBoundingClientRect().width;
        }

        // Reset once we've scrolled exactly one full set
        if (pos >= firstHalfWidth) {
            pos = 0;
        }

        track.style.transform = `translateX(-${pos}px)`;
        requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
});

//////////////////
//    SACRAMENT
//////////////////

// //a simple auto slide show of img 
// var sacramentDiv = document.querySelector(".sacramentMenue");
// const sacramentBG = ['image/annoiting-of-the-sick.jpg', 'image/baby-baptisim.jpg', 'image/confession_1.jpg', 'image/wedding.jpg'];
// let index = 0;
// function changeBg() {
//     sacramentDiv.style.backgroundImage = "linear-gradient(rgba(255, 232, 167, 0.45), rgba(255, 199, 167, 0.45)), url('" + sacramentBG[index] + "')";
//     sacramentDiv.style.backgroundSize = "inherit";
//     sacramentDiv.style.backgroundPosition = "center center";
//     index = (index + 1) % sacramentBG.length;
// }
// //change bg for scarament every 3.5s
// setInterval(changeBg, 1500);