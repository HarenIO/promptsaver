const promptList = document.querySelector('.saved-prompts')
const addPromptBtn = document.querySelector('.add-prompt-section')

addPromptBtn.addEventListener('click', (e) => {
    window.location.href = 'create_prompt.html';
})

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['prompts'], (result) => {
        const prompts = result.prompts;
        if (!prompts || prompts.length === 0) {
            const paragraph = document.createElement('p')
            paragraph.innerText = "You have no saved prompts.."
            promptList.appendChild(paragraph)
        } else {
            for (let i = 0; i < prompts.length; i++) {
                const li = document.createElement('li')
                li.innerText = prompts[i].title
                li.addEventListener('click', () => {
                    chrome.storage.local.set({currentPromptIndex: i}, () => {
                        window.location.href = 'view_prompt.html';
                    });
                })
                promptList.appendChild(li)
            }
        }
    })
})