/* scroll event */
// scroll 할때마다 실행되는 함수 생성

// nav bar
const nav = document.querySelector("#nav");

// section2 intro
const intro = document.querySelector("#intro");

// section4 news
const news = document.querySelector("#news");

/* 
* scroll event로 조건을 걸때 사용할수있는 속성
* 스크롤의 Y 위치: scrollY,
* 전체 스크롤의 길이: ,
* 화면의 길이: innerHeight
*/

window.addEventListener("scroll", function(){
    // 200 이상 스크롤 되면 scrollon 클래스 추가
    if(this.scrollY>=200){
        nav.classList.add("scrollon");
        intro.classList.add("scrollon");
    }
    else{
        // scrollY가 200 미만이면 scrollon 삭제
        nav.classList.remove("scrollon");
    }
    
    if(this.scrollY>1000){
        news.classList.add("scrollon");
    }

})