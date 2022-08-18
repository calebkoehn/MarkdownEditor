const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const fileName = document.querySelector(".file");
const saveChange = document.querySelector(".header-button");
const deleteButton = document.querySelector(".delete-button");
const converter = new showdown.Converter();


const renderPreview = (value) => {
    const html = converter.makeHtml(value);
    preview.innerHTML = html;
}

textEditor.addEventListener('keyup',evt => {
    const {value} = evt.target;
    // window.localStorage.setItem('markdown', value);
    
    renderPreview(value);
});
fileName.addEventListener('keyup', evt => {
    const {value} = evt.target;
    // window.localStorage.setItem('file',value);

    renderFileName(value);
});

saveChange.addEventListener('click', evt => {
    const value = textEditor.value;
    const fileValue = fileName.value;
    window.localStorage.setItem('markdown', value);
    window.localStorage.setItem('file',fileValue);
})

const storedMarkdown = window.localStorage.getItem('markdown');


if (storedMarkdown) {
    
    saveChange.value = storedMarkdown;
    renderPreview(storedMarkdown);
};

const storedFileName = window.localStorage.getItem('file');

if (storedFileName) {
    fileName.value = storedFileName;
    renderFileName(storedFileName);
};

// deleteButton = window.localStorage.clear();

deleteButton.addEventListener('click', evt => {
    
    window.localStorage.clear();
});

