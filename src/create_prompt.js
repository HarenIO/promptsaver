const backBtn = document.querySelector('.back-arrow')
const form = document.querySelector('form')
const promptTitle = document.querySelector('.prompt-title')
const promptText = document.querySelector('.prompt-text')
const savePromptBtn = document.querySelector('.add-prompt-section')


backBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
})

savePromptBtn.addEventListener('click', () => {
    if (promptTitle.value.length === 0 || promptText.value.length === 0) {
        return console.log('Fields cant be empty')
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

