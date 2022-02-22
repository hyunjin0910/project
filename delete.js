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

//3. 홈 외 다른 장르 클릭했을 때
//1) 콘텐츠 영역이 동적으로 생김 
// function makeWebtoon(){
//     const $webtoon__contents = document.querySelector('.webtoon__contents');
//     const $w__content = document.querySelector('.w__content');
//     let newContent; 
//     let cnt =4;
//     for(let i=0;i<cnt;i++){
//         newContent = $webtoon__contents.append($w__content.cloneNode(true));
//     }
// }

// $$genrebar.addEventListener('click',makeWebtoon,{ once : true});

//2) 콘텐츠 내용 채우기
