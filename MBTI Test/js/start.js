const $main = document.querySelector("#main");
const $qna = document.querySelector("#qna");

function begin(){
    $main.style.webkitAnimation = "fadeOUt 1s";
    $main.style.animation = "fadeOUt 1s";
    setTimeout(()=>{
        $qna.style.webkitAnimation = "fadeIn 1s";
        $qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            $main.style.display = "none"
            $qna.style.display = "block"
        },450)
    },450);
}