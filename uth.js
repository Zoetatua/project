let body = document.querySelector('.body')
let tesss = document.querySelector('.but')
tesss.addEventListener('click',function(){
    but.classList.toggle('darkmode')
})

function showElement(elementId) {
    const allElements = document.querySelectorAll('#content-container .content');
    allElements.forEach(element => {
        element.style.display = 'none';
    });

    const selectedElement = document.getElementById(elementId);
    if (selectedElement) {
        selectedElement.style.display = 'block';
    }
}
