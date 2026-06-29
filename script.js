function nextPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    document.getElementById("page"+page).classList.add("active");
}

const noBtn=document.getElementById("noBtn");

if(noBtn){
    noBtn.addEventListener("mouseover",()=>{
        noBtn.style.position="absolute";
        noBtn.style.left=Math.random()*70+"%";
        noBtn.style.top=Math.random()*70+"%";
    });
}

const yesBtn=document.getElementById("yesBtn");

if(yesBtn){
    yesBtn.onclick=()=>{
        nextPage(2);
    };
}
