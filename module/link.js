import { renderLogin } from "./renderLogin.js"
import { GET } from "./api.js"

export const link = () => {

    const linkElement = document.getElementById("link-id") //ссылка

    linkElement.addEventListener("click", () => {
        renderLogin({GET});
    })
}