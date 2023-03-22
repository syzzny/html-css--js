
const todoForm = document.querySelector("#todo_form");
todoForm.addEventListener("submit", todoAdd);

// todo add
function todoAdd(e){
    e.preventDefault(); 

    // input 값 list로 추가
    const todoValue = todoForm.firstElementChild.value;

    // li태그 생성 ul 태그 찾아서 추가
    const li = document.createElement("li");

    // li에 추가할 내용 : 체크박스 , 텍스트, 버튼
    const check = document.createElement("input");
    check.type = "checkbox";

    const text = document.createTextNode(todoValue);
    const button = document.createElement("button")
    button.innerHTML = "❌";

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(button);

    document.querySelector("#todolist").appendChild(li);

    // 추가하고나면 다시 빈칸으로 만들기
    todoForm.firstElementChild.value="";

    // check click event
    check.addEventListener("click", todocheck);
    button.addEventListener("click", todoDelete);

    // count
    // const result = document.querySelector("#result");
    // const lilength = document.querySelectorAll("#todolist input[type='checkbox']");
    
    getCheckedCnt();
}


// check event - todocheck function
function todocheck(e){
    const check = e.target;
    const li = check.parentNode;

    if(check.checked){
        li.style.color ="";
        li.style.textDecoration = "line-through"
        
    }
    else{
        check.parentNode.style.color="";
        li.style.textDecoration = ""
    }
    getCheckedCnt();
}

// button event - 선택된 li가 삭제되는 function
function todoDelete(e){
    const button = e.target;
    const li = button.parentNode;
    li.remove();
    getCheckedCnt();
}

function getCheckedCnt(){
    const result = document.querySelector("#result");
    const lilength = document.querySelectorAll("#todolist input[type='checkbox']");

    const checkedLength = document.querySelectorAll("#todolist input[type='checkbox']:checked");

    result.innerHTML = `${checkedLength.length} / ${lilength.length}`
}


// todo 개수 function
// function getCheckedCnt(){
//     const count = `input[name="todo"]:checked`;
//     const selectedElements = document.querySelectorAll(count);

//     // 개수 세기
//     const selectCount = selectedElements.length;

//     // 출력
//     document.getElementById(`result`).innerText = selectCount;

