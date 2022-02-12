const $main = document.querySelector("#main");
const $qna = document.querySelector("#qna");


function addAnswer(answerText, qId){
    const $a = document.querySelector('.aBox');
    const answer = document.createElement('button');
    answer.classList.add('answerList');
    $a.appendChild(answer); //소속 관계를 만들어 준다

    answer.innerHTML = answerText;
    answer.addEventListener('click', function(){
        const children = document.querySelectorAll('.answerList');
        for(let i=0;i<children.length;i++){
            children[i].disabled = true; //기존 보기 비활성화시키기
            children[i].style.display ='none';
        }
        goNext(++qId);
    }, false)
}

function goNext(qId){
    const $q = document.querySelector('.qBox');
    $q.innerHTML = qnaList[qId].q;
    for(let i in qnaList[qId].a){
        addAnswer(qnaList[qId].a[i].answer, qId); //qId를 증가시키기 위해서 매개 변수에 추가함
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