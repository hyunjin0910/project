const CSSstyle = getComputedStyle(document.body);
const textcolor = CSSstyle.getPropertyValue('--text-color');
const darkgrey = CSSstyle.getPropertyValue('--dark-grey');
const accent = CSSstyle.getPropertyValue('--accent-color');

// 1. 장르 선택 시 글씨 색 변경
//1) 글씨 색 변경
const $$genrebar= document.querySelector(".genrebar");
const $genrebar= document.querySelector(".genrebar__tab");
const $banner_image= document.querySelector(".banner__image")
let curGenre = $genrebar;
function genreClickHandler(event) {
    let target= event.target;
    if(target!=curGenre){
        target.style.color = textcolor;
        curGenre.style.color = darkgrey;
    }
    if(target!=$genrebar){
        document.querySelector(".daily").style.display ='none';
    }else{
        document.querySelector(".daily").style.display ='block';
    }
    curGenre= target;
  }
$$genrebar.addEventListener('click',genreClickHandler);

//2. 요일 연재
//1) 요일 글씨 색, 밑줄 변화
const $$days= document.querySelector(".days");
const $days= document.querySelector(".days__Mon");
const $c_img= document.querySelector(".c_img");
let curdays= $days;

function daysClickHandler(event) {
    let target= event.target;
    if(target.tagName!="BUTTON"){
        return;
    } //버튼 아래 밑줄 방지
    if(target!=curdays){
        target.style.color= textcolor;
        target.style.borderBottom= "4px solid #FCBC19";
        curdays.style.color= darkgrey;
        curdays.style.borderColor="#FFFFFF";
    }
    curdays= target;
  }

$$days.addEventListener('click',daysClickHandler);

//2) 웹툰 탭을 클릭했을 때 
function makeWebtoon(){
    const $webtoon__contents = document.querySelector('.webtoon__contents');
    const $w__content = document.querySelector('.w__content');
    let newContent; 
    let cnt =4;
    for(let i=0;i<cnt;i++){
        newContent = $webtoon__contents.append($w__content.cloneNode(true));
    }
}

$$genrebar.addEventListener('click',makeWebtoon,{ once : true});

