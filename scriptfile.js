const accesskey="Aa3ITYr63YwqnloZwmWenFAXkNfS6Bi3YvDbmiURuHg";
const search=document.getElementById("search");
const box=document.getElementById("box");
const result=document.getElementById("result");
const loadmore=document.getElementById("loadmore");
const submibtn=document.querySelector('#submibtn');
let word="";
let page=1;
async function searching(){
    word=box.value;
    try{
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${word}&client_id=${accesskey}&per_page=12`;
        const response=await fetch(url);
        const data =await response.json();
        if(page==1){
            result.innerHTML="";
        }
        const results=data.results;
        results.map((res)=>{
            const image = document.createElement("img");
            image.src=res.urls.small;
            const imageLink=document.createElement("a");
            imageLink.href=res.links.html;
            console.log(res.links.html);
            imageLink.target="_blank";
            imageLink.appendChild(image);
            result.appendChild(imageLink);
        })
        loadmore.style.display='block';
    }
    catch(e){
        alert("Sorry I can't find respective images.");
    }
}

search.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searching();
})
loadmore.addEventListener("click",()=>{
    page++; 
    searching();
})
