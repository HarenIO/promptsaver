const backBtn = document.querySelector('.back-arrow')
const titleSection = document.querySelector('.title');
const textSection = document.querySelector('.text');
const savePromptBtn = document.querySelector('.add-prompt-section')
const textArea = document.querySelector('.view-prompt-text')

backBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
})

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['prompts', 'currentPromptIndex'], (result) => {
        const prompts = result.prompts;
        const currentPromptIndex = result.currentPromptIndex;
        const currentPrompt = prompts[currentPromptIndex];

        const copyBtn = document.createElement('button')
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(currentPrompt.text)
            .then(() => {
                const successMessage = document.createElement('span');
                successMessage.innerText = 'Copied!';
                successMessage.classList.add('success-msg')
    
                titleSection.appendChild(successMessage)
    
                setTimeout(() => {
                    successMessage.remove();
                }, 1000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
        })
        const h2 = document.createElement('h2');
        copyBtn.innerText = 'Copy';
        copyBtn.classList.add('copy-button')
        h2.innerText = currentPrompt.title;
        h2.classList.add('view-prompt-title');
        textArea.value = currentPrompt.text;
        titleSection.appendChild(copyBtn)
        titleSection.appendChild(h2);
    });
});
