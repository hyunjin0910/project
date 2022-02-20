const CSSstyle = getComputedStyle(document.body);
const textcolor = CSSstyle.getPropertyValue('--text-color');
const darkgrey = CSSstyle.getPropertyValue('--dark-grey')

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
        document.querySelector(".banner").style.display ='none';
    }else{
        document.querySelector(".daily").style.display ='block';
        document.querySelector(".banner").style.display ='block';
    }
    curGenre= target;
  }



