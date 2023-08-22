import { getApiModule } from "./api.js";
import { postApiModule } from "./api.js";
import { addLikeModule } from './addLikeModule.js'
import { answerModule } from './answerModule.js'
import { addCommentModule} from './addCommentModule.js'

const buttonElement = document.getElementById('add-form-button-id');
const commentListElement = document.getElementById('comment-list');
const inputCommentNameElement = document.getElementById('input-comment-name');
const inputCommentTextElement = document.getElementById('input-comment-text');
// Массив
let commentsArr = []

// GET API
getApiModule()

// POST API
const postApi = (inputCommentTextElement, inputCommentNameElement) => {
  postApiModule({ text: inputCommentTextElement.value, name: inputCommentNameElement.value })
}

// Добавляет Лайки //
addLikeModule(commentsArr);

// Ответ на комментарий
answerModule(commentsArr);

// Добавляет комментарий 
addCommentModule();

  