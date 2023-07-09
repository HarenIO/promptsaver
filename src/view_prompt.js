const backBtn = document.querySelector('.back-arrow')
const titleSection = document.querySelector('.title');
const textSection = document.querySelector('.text');
const savePromptBtn = document.querySelector('.add-prompt-section')

backBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
})

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['prompts', 'currentPromptIndex'], (result) => {
        const prompts = result.prompts;
        const currentPromptIndex = result.currentPromptIndex;
        const currentPrompt = prompts[currentPromptIndex];

        const h2 = document.createElement('h2');
        const textarea = document.createElement('textarea');

        h2.innerText = currentPrompt.title;
        h2.classList.add('view-prompt-title');
        textarea.value = currentPrompt.text;
        textarea.classList.add('view-prompt-text');
        
        titleSection.appendChild(h2);
        textSection.appendChild(textarea);

        
    });
});
