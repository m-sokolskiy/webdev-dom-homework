import { GET, login, setToken, setUserName, token, userName } from "./api.js";


export const renderLogin = () => {

    const lineElement = document.getElementById("login-line-id")
    lineElement.remove();

    //вставляем разметку
    const appElement = document.getElementById("app");

    //cохраняем разметку
    const loginHTML = `
    <div class="add-form">
        <div class="login-title-flex">
            <div class="login-title">Форма входа</div>
        </div>
        <input type="text" id="login-input" class="add-form-login" placeholder="Введите логин" />
        <input type="password" id="password-input" class="add-form-password" placeholder="Введите пароль"rows="4"/>
        <div class="add-form-row-login">
            <button id="login-button" class="add-form-button-input">Войти</button>
        </div>
    </div>
    `

    //отрисовка
    appElement.innerHTML = loginHTML;

    const buttonElement = document.getElementById("login-button");
    const loginInputElement = document.getElementById("login-input");
    const passwordInputElement = document.getElementById("password-input");

    

    buttonElement.addEventListener("click", () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((response) => {

            console.log(response);

            if (response.status === 400) {
                throw new Error ('Неверный пароль')
            } else {
                return response.json();
            }

        }).then((responseData) => {
            setToken(responseData.user.token);
            console.log(token);

            setUserName(responseData.user.name);
            console.log(userName);
            

        }).then(() => {
            GET();
        })
            .catch((error) => {

                if (error.message === 'Неверный пароль') {
                alert("Неправильный логин или пароль");
                } else {
                alert("Кажется, у вас сломался интернет, попробуйте позже");
                }

            })


    })
}
