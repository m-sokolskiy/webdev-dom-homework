import {addLikeModule} from './addLikeModule.js'
import {answerModule} from './answerModule.js'

export const renderModule = (commentsArr) => {
  
  const commentListElement = document.getElementById('comment-list');

  const commentsHtml = commentsArr.map((comment, index) => {
    const commentDate = new Date(comment.date);
    const timeDate = commentDate.toLocaleDateString() + ' ' + commentDate.getHours() + ':' + commentDate.getMinutes();
    return `<li  class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${timeDate}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">${comment.text}</div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.like}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index=${index}></button>
            </div>
          </div>
      </li>`
  })
    .join("");
  commentListElement.innerHTML = commentsHtml;
  addLikeModule(commentsArr);
  answerModule(commentsArr);
};