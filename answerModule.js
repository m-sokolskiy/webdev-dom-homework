import {renderModule} from './renderModule.js'

export const answerModule = (commentsArr) => {
    const answerComment = document.querySelectorAll('.comment');
    const answerCommentTexts = document.querySelectorAll('.comment-text');
    const answerCommentHeaders = document.querySelectorAll('.comment-header');
    const inputField = document.querySelector('.add-form-text');

    answerComment.forEach((answerComment, index) => {
        answerComment.addEventListener('click', () => {
            inputField.value = '>' + ' ' + answerCommentTexts[index].innerText + ' (' + answerCommentHeaders[index].innerText + ')';
            renderModule(commentsArr)
        });
    });
}