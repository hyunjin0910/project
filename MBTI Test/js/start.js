const $main = document.querySelector("#main");
const $qna = document.querySelector("#qna");


function addAnswer(answerText){
    const $a = document.querySelector('.aBox');
    const answer = document.createElement('button');
    $a.appendChild(answer); //소속 관계를 만들어 준다
    answer.innerHTML = answerText;
}

function goNext(qId){
    const $q = document.querySelector('.qBox');
    $q.innerHTML = qnaList[qId].q;
    for(let i in qnaList[qId].a){
        addAnswer(qnaList[qId].a[i].answer);
    }
}

//메인에서 qna로 넘어갈 때 
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
        let qId=0;
        goNext(qId);
    },450);
}