import {renderModule} from './renderModule.js'

export const addLikeModule = (commentsArr) => {

    const likeButtonElements = document.querySelectorAll(".like-button");
    
    for (const likeButton of likeButtonElements) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const counter = commentsArr[likeButton.dataset.index]
            let a = counter.like
            if (counter.isLiked === false) {
                counter.isLiked = true;
                counter.like++;
            }
            else if (counter.isLiked === true) {
                counter.isLiked = false
                counter.like--;
            };
            renderModule(commentsArr)
        });
    };
};