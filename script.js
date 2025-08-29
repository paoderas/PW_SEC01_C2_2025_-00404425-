//Para cambiar texto
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('format');
    const container = document.getElementById('contentContainer');

    btn.addEventListener('click', () => {
        const isStacked = container.classList.toggle('stacked');
        btn.textContent = isStacked ? 'Change to columns' : 'Change format';
    });

    const changeTitleButton = document.getElementById('changeTitleButton');
    const headerTitle = document.querySelector('.header-title');

    const originalTitle = headerTitle.textContent;
    const originalButtonText = changeTitleButton.textContent;

    const newTitle = "El Protocolo de la Nube";
    const newButtonText = "Read in English";

    let isOriginal = true;

    changeTitleButton.addEventListener('click', () => {
        if (isOriginal) {
            headerTitle.textContent = newTitle;
            changeTitleButton.textContent = newButtonText;
        } else {
            headerTitle.textContent = originalTitle;
            changeTitleButton.textContent = originalButtonText;
        }
        isOriginal = !isOriginal;
    });
//Para cambiar color del texto
    const changeColorButton = document.querySelector('.changeColor-button');
    const bookDescriptionTitle = document.querySelector('.title');

    changeColorButton.addEventListener('click', () => {
        if (bookDescriptionTitle.style.color === 'rgb(0, 0, 128)' || bookDescriptionTitle.style.color === '#000080') {
            bookDescriptionTitle.style.color = 'black';
        } else {
            bookDescriptionTitle.style.color = '#000080';
        }
    });

//Para cambiar tipografía
    const changeTextButton = document.querySelector('.changeText-button');
    const descriptionParagraph = document.querySelector('.description-text');

    const originalStyle = {
        fontFamily: descriptionParagraph.style.fontFamily || 'Roboto, sans-serif',
        fontWeight: descriptionParagraph.style.fontWeight || '400',
        fontStyle: descriptionParagraph.style.fontStyle || 'normal'
    };

    changeTextButton.addEventListener('click', () => {
        if (descriptionParagraph.style.fontWeight === '200' && descriptionParagraph.style.fontStyle === 'italic') {
            descriptionParagraph.style.fontFamily = originalStyle.fontFamily;
            descriptionParagraph.style.fontWeight = originalStyle.fontWeight;
            descriptionParagraph.style.fontStyle = originalStyle.fontStyle;
        } else {
            descriptionParagraph.style.fontFamily = '"Poppins", sans-serif';
            descriptionParagraph.style.fontWeight = '200';
            descriptionParagraph.style.fontStyle = 'italic';
        }
    });
//Para añadir imagen

    const addImageButton = document.querySelector('.addImage-button');
    const bookDataContainer = document.querySelector('.book-data-container');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Book Image';
            img.style.width = '150px';
            img.style.height = 'auto';
            img.style.marginTop = '15px';
            img.style.borderRadius = '10px';
            img.style.display = 'block';
            bookDataContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    addImageButton.addEventListener('click', () => {
        fileInput.click();
    });
});
