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
    .addEventListener('click',addMenu)
}


//메뉴 수정, 삭제
function updateMenu(){
    const statusBtn = $("#espresso-menu-list");
const editMenu = (e)=>{
    const prevMenu = e.target.previousElementSibling;
    const editted = prompt("메뉴를 수정하세요",prevMenu.innerText)
    prevMenu.innerText=editted;
}
const delMenu = (e)=>{
    const deleteMenu = confirm("메뉴를 삭제하시겠습니까?");
        if(deleteMenu===true){
            e.target.parentNode.remove();
            const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
            $(".menu-count").innerText=`총 ${menuCount}개`;
        }
}
statusBtn.addEventListener('click',(e)=>
    {
    if(e.target.className==="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"){
       editMenu(e);
    }
    else if(e.target.className==="bg-gray-50 text-gray-500 text-sm menu-remove-button"){
        delMenu(e);
    }
    })
// 메뉴 관리 바꾸기
const menuList = $("#menu-list");
menuList.addEventListener('click',(e)=>{
    if(e.target.className==="menu-type"){
        $(".menu-selected").innerText=e.target.innerText+" 메뉴 관리";
    }
})
}

//함수 실행
typeMenu()
updateMenu()