import { likes } from './likes.js'
import { answer } from './answer.js'
import { comments } from './comments.js';
import { userName } from './api.js';

export const render = (commentsArr) => {

  const appElement = document.getElementById("app");



  const commentsHtml = commentsArr.map((comment, index) => {
    const commentDate = new Date(comment.date);
    const timeDate = commentDate.toLocaleDateString() + ' ' + commentDate.getHours() + ':' + commentDate.getMinutes();
    return `<li  class="comment">
          <div class="comment-header">
            <div>
            ${comment.name}
            </div>
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

  //разметка страницы 
  const appHTML = `
  <ul id="comment-list" class="comments">${commentsHtml}</ul>
  <div id="add-form-id" class="add-form">
    <input type="text" disabled id="input-comment-name" class="add-form-name" placeholder="${userName}" />
    <textarea type="textarea" id="input-comment-text" class="add-form-text" placeholder="Введите ваш коментарий"rows="4"></textarea>
    <div class="add-form-row">
      <button id="add-form-button-id" class="add-form-button">Написать</button>
    </div>
  </div> 
  `

  appElement.innerHTML = appHTML;

  likes(commentsArr);
  answer(commentsArr);
  comments();
  
};