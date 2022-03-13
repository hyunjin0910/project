const $=(selector)=>document.querySelector(selector);
const $$=(selector)=>document.querySelectorAll(selector);

function typeMenu(){
    //form 자동 전송 방지
    $("#order-form")
        .addEventListener('submit',(e)=>{
            e.preventDefault();
        })

    $("#menu-name")
        .addEventListener('keypress',(e)=>{
            if(e.key==='Enter'){
              putMenu();
            }
        })
}
function putMenu(){
    const orderedMenu= $("#menu-name").value;
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
  </li>`
    }
    $("#espresso-menu-list").insertAdjacentHTML('beforeend',menuTemplate(orderedMenu));
    
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText=`총 ${menuCount}개`;
}

//함수 실행
typeMenu()


