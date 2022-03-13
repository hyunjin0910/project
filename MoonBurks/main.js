function typeMenu(){
    document
        .querySelector("#menu-name")
        .addEventListener('keypress',(e)=>{
            if(e.key==='Enter'){
                console.log(document.querySelector("#menu-name").value)
            }
        })
}
typeMenu()