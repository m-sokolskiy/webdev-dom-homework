import { POST } from "./api.js";

export const comments = () => {
    const buttonElement = document.getElementById('add-form-button-id');
    const inputCommentNameElement = document.getElementById('input-comment-name');
    const inputCommentTextElement = document.getElementById('input-comment-text');

    buttonElement.addEventListener('click', () => {
        inputCommentTextElement.classList.remove("error")

        if (inputCommentTextElement.value === '') {
            inputCommentTextElement.classList.add("error")
            return;
        } else if (inputCommentTextElement.value === '') {
            inputCommentTextElement.classList.add("error")
            return;
        };
        POST({ text: inputCommentTextElement.value, name: inputCommentNameElement.value })
    });
}