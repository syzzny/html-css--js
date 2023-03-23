/* 슬라이더 버튼을 눌렀을때 각 위치의 슬라이더 출력 */
const slider2Buttons = document.querySelectorAll("#slider2-buttons a")

// slider item
const slider2Items = document.querySelectorAll(".slider2-item");

// 각각의 버튼을 눌렀을때 그 위치에 있는 슬라이더로 이동
// 각각의 버튼 : slider2Buttons[0], slider2Buttons[1], slider2Buttons[2]
// 각각의 아이템: slider2Items[0], slider2Items[1], slider2Items[2]
// 화면이 보이는 위치: left = 0, left = -100%, left = -200%
// 규칙: 버튼[0]을 누르면 left = 0 이동
//       버튼 [1]을 누르면 left = 100 이동
// >>버튼[i] 누르면 left = i*-100

// button[1] 가져와서 확인 후 아래 내용 반복해서 사용
// button 배열에 eventlistener 추가
for(let i=0; i<slider2Buttons.length; i++){
    slider2Buttons[i].addEventListener("click", function(e){
        e.preventDefault();
        // forEach는 배열에 있는 각각의 값을 꺼내서 함수를 통해 쓸수있다
        // 배열.forEach(function(배열의 값, 인덱스){});
        slider2Items.forEach(function(item, index){
            item.style.left = `${i*-100}%`
        });

        // a태그의 모든 on을 제거
        for(let i=0; i<slider2Buttons.length;i++){
            slider2Buttons[i].classList.remove("on");
        }
        // 현재 a태그에 on을 추가
        e.target.classList.add("on");
    })
}





// slider 내부에 slider2-dots를 만들어서 버튼 작성
// 형태: div class = "slider2-dots" : dot을 묶는 태그
// div class = "dot" : 각 슬라이더로 이동하는 dot
// 어떻게 추가 : slider2Items 의 갯수에 따라서 생성 및 추가
// 위치: slider2의 하단에 추가

const dots = document.createElement("div");

dots.classList.add("slider2-dots");
for(let i=0; i<slider2Items.length; i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    // dot에 eventlistener 추가
    dot.addEventListener("click", function(e){
        // 각각의 슬라이더의 left값이 수정
        slider2Items.forEach(function(item){
            item.style.left = `${i*-100}%`;
        })

        // 모든 dot의 .on을 제외하고 현재 클릭한 dot에만 .on
        // 모든 dot? dots의 자식을 통해 찾을수있다
        // >> dots의 자식들을 반복해서 remove()
        dots.children
        for(let i=0; i<dots.children.length; i++){
            dots.children[i].classList.remove("on");
        }
        // 현재 dot? 이벤트 객체
        e.target.classList.add("on")
    });
}

const slider2 = document.querySelector("#slider2");
slider2.appendChild(dots);