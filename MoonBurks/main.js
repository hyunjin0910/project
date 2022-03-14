const $=(selector)=>document.querySelector(selector);
const $$=(selector)=>document.querySelectorAll(selector);

function typeMenu(){
    //form 자동 전송 방지
    $("#order-form")
        .addEventListener('submit',(e)=>{
            e.preventDefault();
        })
    const addMenu= ()=>{
        const orderedMenu= $("#menu-name").value;
        if($("#menu-name").value===""){
            alert("값을 입력해주세요");
            return;
        }
        const menuTemplate= (orderedMenu)=>{
        return `
            <li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name">${orderedMenu}</span>
        <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
            수정
        </button>
        <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
            삭제
        </button>
        </li>
        `
        }
        //메뉴 추가하기
        $("#espresso-menu-list").insertAdjacentHTML('beforeend',menuTemplate(orderedMenu));
        //메뉴 갯수 세기
        const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
        $(".menu-count").innerText=`총 ${menuCount}개`;
        //input 초기화
        $("#menu-name").value="";
    }

    $("#menu-name")
    .addEventListener('keypress',(e)=>{
        if(e.key!='Enter'){
            return;
        }
        e.preventDefault();
        addMenu();
    })
    $("#submit-menu-button")
    .addEventListener('click',(e)=>{addMenu()})
}


//함수 실행
typeMenu()

const editBtn = $("#espresso-menu-list");
editBtn.addEventListener('click',(e)=>
    {const target=e.target
    if(target.className==="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"){
        const editted = prompt("메뉴를 수정하세요","수정된 메뉴 이름")
        target.previousElementSibling.innerText=editted;
    }
    })