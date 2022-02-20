var CSSstyle = getComputedStyle(document.body);
// CSSstyle.getPropertyValue('--text-color');

//1. 네비바 클릭 시
const $navbar__menu = document.querySelectorAll(".navbar__menu>button");
const $nav__home = document.querySelector("#nav__home");
const $nav__toon = document.querySelector("#nav__toon");

//웹툰 클릭 시
// const toToon = function(){
//     document.querySelector(".contents__genre").style.display = "block"
//     document.querySelector(".category").style.display = "none";
//     document.querySelector(".waiting").style.display = "none";
// }

//네비바 다른 탭 클릭 시
// const toHome = function(){
//     document.querySelector(".contents__genre").style.display = "none"
//     document.querySelector(".category").style.display = "block";
//     document.querySelector(".waiting").style.display = "block";
//     $banner_image.src="./forCSS/kakao.jpeg";
// }

// for(let x of $navbar__menu){
//     if(x===$nav__toon){
//         x.addEventListener('click', toToon);
//     }else{
//         x.addEventListener('click', toHome);
//     }
// }

//2. 장르 선택 시 배너 사진 변경


// for(let x in $genrebar){
//     let newSrc = "./forCss/Genre/"+(Number(x)+1)+".png"
//     function changeBanner(){
//         $banner_image.src = newSrc;
//     }
//     $genrebar[x].addEventListener('click',changeBanner)
// }

// 장르 선택 시 글씨 색 변경
const $$genrebar= document.querySelector(".genrebar");
const $genrebar= document.querySelector(".genrebar__tab");
const $banner_image= document.querySelector(".banner__image")
let curGenre = $genrebar;
function genreClickHandler(event) {
    let target= event.target;
    if(target!=curGenre){
        target.style.color = CSSstyle.getPropertyValue('--text-color');
        curGenre.style.color = CSSstyle.getPropertyValue('--dark-grey');
    }
    curGenre= target;
  }

$$genrebar.addEventListener('click',genreClickHandler)


