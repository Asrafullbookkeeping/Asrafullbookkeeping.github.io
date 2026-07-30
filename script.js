// Typing Effect

const texts = [
"Professional Bookkeeper",
"QuickBooks ProAdvisor",
"Xero Certified",
"Microsoft Excel Expert"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    const title = document.querySelector(".hero h2");

    if(title){
        title.textContent = letter;
    }

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1200);

    }else{

        setTimeout(type,80);

    }

})();


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(70px)";
section.style.transition=".8s";

observer.observe(section);

});


// Back To Top Button

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.right="25px";
btn.style.bottom="25px";
btn.style.width="50px";
btn.style.height="50px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#0b3d91";
btn.style.color="#fff";
btn.style.fontSize="20px";
btn.style.cursor="pointer";
btn.style.display="none";
btn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});
