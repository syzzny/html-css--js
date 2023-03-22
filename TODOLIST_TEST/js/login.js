

const loginForm = document.querySelector("#login_form");

loginForm.addEventListener("submit", onLogin)

// 로그인 함수
function onLogin(e){
    // submit이벤트는 새로고침이 들어가있다
    e.preventDefault();
    
    //값을 들고올 input태그 가져옴 - value
    const loginId = document.querySelector("#login_id");
    //값을 넣어줄 h1태그 가져옴 - innerHTML
    const greeting = document.querySelector("#greeting");
    
    //greeting.innerHTML += " "+loginId.value+"님";
    greeting.innerHTML = `${loginId.value}'s TO DO LIST`;

    // 화면에 글자를 보여주기위해 class 제거
    greeting.classList.remove("hidden");
    document.querySelector("#todo_form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    // 로그인 창을 보이지 않게하기위해 class 추가
    loginForm.classList.add("hidden");

}   