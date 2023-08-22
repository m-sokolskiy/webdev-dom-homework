import { postApiModule } from "./api.js";

export const addCommentModule = () => {
    const buttonElement = document.getElementById('add-form-button-id');
    const inputCommentNameElement = document.getElementById('input-comment-name');
    const inputCommentTextElement = document.getElementById('input-comment-text');

    buttonElement.addEventListener('click', () => {
        inputCommentNameElement.classList.remove("error")
        inputCommentTextElement.classList.remove("error")

        if (inputCommentNameElement.value === '' && inputCommentTextElement.value === '') {
            inputCommentNameElement.classList.add("error")
            inputCommentTextElement.classList.add("error")
            return;
        } else if (inputCommentNameElement.value === '') {
            inputCommentNameElement.classList.add("error")
            return;
        } else if (inputCommentTextElement.value === '') {
            inputCommentTextElement.classList.add("error")
            return;
        };
        postApiModule({ text: inputCommentTextElement.value, name: inputCommentNameElement.value })
    });
}