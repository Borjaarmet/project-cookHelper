function showInstructions() {
    const btnInstr = document.querySelector('.but-instructions');
    btnInstr.addEventListener('click', () => {
        console.log("paragraph show")
        const paragraph = document.querySelector('.hide')
        paragraph.classList.remove('hide');
        paragraph.classList.add('show');

        const btnClose = document.querySelector('.hide');
        btnClose.classList.remove('hide');
        btnClose.classList.add('show');


    })
}
// showInstructions()

function closeInstructions() {
    let btnClose = document.querySelector('.but-close');
    btnClose.addEventListener('click', () => {
        console.log("paragraph hide")
        const paragraph = document.querySelector('.show')
        paragraph.classList.remove('show');
        paragraph.classList.add('hide');

        btnClose = document.querySelector('.show');
        btnClose.classList.remove('show');
        btnClose.classList.add('hide');

    })
}
// closeInstructions()

module.exports = showInstructions()
module.exports = closeInstructions() 