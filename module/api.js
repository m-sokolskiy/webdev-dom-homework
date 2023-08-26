import { render } from './render.js'

const commentsURL = "https://wedev-api.sky.pro/api/v2/:maksim-sokolskiy/comments"
const userURL = "https://wedev-api.sky.pro/api/user/login"

export let userName;

export const setUserName = (newUserName) => {
    userName = newUserName;
}

export let token;

export const setToken = (newToken) => {
    token = newToken;
}

export const GET = () => {
    const loadingElement = document.querySelector(".loading");
    loadingElement.textContent = `Лента комментариев загружается...`;
    let commentsArr = [];

    return fetch(commentsURL, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
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
            render(commentsArr);
        })

};

export const POST = ({ text, name }) => {
    const buttonElement = document.getElementById('add-form-button-id');
    const inputCommentNameElement = document.getElementById('input-comment-name');
    const inputCommentTextElement = document.getElementById('input-comment-text');

    buttonElement.disabled = true;
    buttonElement.textContent = 'Отправка...';

    return fetch(commentsURL, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            text: text,
            name: name
        })
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else if (response.status === 400) {
                throw new Error('Ошибка запроса')
            } else if (response.status === 500) {
                throw new Error('Ошибка сервера')
            }
        })
        .then(() => {
            return GET();
        })
        .then(() => {
            buttonElement.disabled = false;
            buttonElement.textContent = 'Написать';
            inputCommentNameElement.value = ""
            inputCommentTextElement.value = ""
        })
        .catch((error) => {

            buttonElement.disabled = false;
            buttonElement.textContent = 'Написать';

            if (error.message === 'Ошибка запроса' || inputCommentTextElement.value.length < 3 || inputCommentNameElement.value.length < 3) {
                alert("Имя и комментарий должны быть не короче 3 символов");
                return;
            } else if (error.message === 'Ошибка сервера') {
                alert("Сервер сломался, попробуй позже");
                return;
            } else {
                alert("Кажется, у вас сломался интернет, попробуйте позже");
            }

        });
};

export const login = ({ login, password }) => {
    return fetch(userURL, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    })
};