const backBtn = document.querySelector('.back-arrow')
const form = document.querySelector('form')
const promptTitle = document.querySelector('.prompt-title')
const promptText = document.querySelector('.prompt-text')
const savePromptBtn = document.querySelector('.save-prompt-section')


backBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
})

savePromptBtn.addEventListener('click', () => {
    if (promptTitle.value.length === 0 || promptText.value.length === 0) {
        const errorMessage = document.createElement('span');
                errorMessage.innerText = 'Text field cant be empty!';
                errorMessage.classList.add('error-msg')
                form.appendChild(errorMessage)
                return setTimeout(() => {
                    errorMessage.remove();
                }, 1000);
    }

    const newPrompt = {
        title: promptTitle.value,
        text: promptText.value
    };


    chrome.storage.local.get(['prompts'], (result) => {
        let prompts = result.prompts;

        if (!prompts) {
            prompts = [];
        }

        prompts.push(newPrompt);

        chrome.storage.local.set({prompts}, () => {
            window.location.href = 'popup.html';
        });
    });
});

