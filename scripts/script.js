function hideAllImages() {
    let figures = document.querySelectorAll('figure');
    for (let i of figures) {
        i.style.visibility = 'hidden';
      }
}

function showImage(event) {
    hideAllImages();
    switch (event.srcElement.id) {
        case 'button-1':
            document.getElementById('image-1').style.visibility = 'visible';
            break;
        case 'button-2':
            document.getElementById('image-2').style.visibility = 'visible';
            break;
        case 'button-3':
            document.getElementById('image-3').style.visibility = 'visible';
            break;
        case 'button-4':
            document.getElementById('image-4').style.visibility = 'visible';
            break;
        case 'button-5':
            document.getElementById('image-5').style.visibility = 'visible';
            break;
        case 'button-6':
            document.getElementById('image-6').style.visibility = 'visible';
            break;
        case 'button-7':
            document.getElementById('image-7').style.visibility = 'visible';
            break;
        case 'button-8':
            document.getElementById('image-8').style.visibility = 'visible';
            break;
    }
}
// add event listeners to buttons
let buttons = document.querySelectorAll('.project-button');
for (let i of buttons) {
  i.addEventListener('click', showImage);
}


