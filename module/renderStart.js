import { addDate } from './date.js';


const commentsURL = "https://wedev-api.sky.pro/api/v2/:maksim-sokolskiy/comments"

export const start = () => {
    const loadingElement = document.querySelector(".loading");
    loadingElement.textContent = `Лента комментариев загружается...`;

    let commentsArr = [];

    return fetch(commentsURL, {
        method: "GET"
    })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            const appComments = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    like: comment.likes,
                    isLiked: false,
                }
            });
            loadingElement.textContent = "";
            commentsArr = appComments;
            // Рендер страницы с комментариями и ссылкой
            renderStart(commentsArr);
        })

};

export const renderStart = (commentsArr) => {

    const commentListElement = document.getElementById('comment-list');
    const appElement = document.getElementById("app");

    const commentsHtml = commentsArr.map((comment, index) => {
        const commentDate = new Date(comment.date);
        const timeDate = commentDate.toLocaleDateString() + ' ' + commentDate.getHours() + ':' + commentDate.getMinutes();
        return `<li  class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${addDate(comment.date)}</div>
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

    const appHTML = `
      <ul id="comment-list" class="comments">${commentsHtml}</ul>
      `

    appElement.innerHTML = appHTML;

};