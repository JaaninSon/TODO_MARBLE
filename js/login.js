const loginForm = document.getElementById('login');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('#login-form button');

const contents = document.getElementById('contents');
const logoutBtn = contents.querySelector('.user-info button');
const greeting = document.querySelector('.greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function clickInput(){
   loginInput.placeholder = "";
}
loginInput.addEventListener('click', clickInput);

function onLoginSubmit(e){
   e.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings(username){
   greeting.innerText = `환영해, ${username}!`;
   contents.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// const removedUsername = localStorage.removeItem(USERNAME_KEY);

if(savedUsername === null){
   // show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
   paintGreetings(savedUsername);
}

// function clickLogoutBtn(USERNAME_KEY) {
//    /* 로그아웃 구현 */
//    localStorage.removeItem(USERNAME_KEY);
// }
// loginBtn.addEventListener('click', clickLogoutBtn);