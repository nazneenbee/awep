let comment=1;
let like=0;
function usercomment()
{
   
    let com=document.querySelector("#commnewway").cloneNode(true);
    com.removeAttribute("id");
    com.style.visibility = "visible";
    
    let uc=document.querySelector("#idd").value;
    com.children[0].innerHTML=uc+comment;

    let n=document.querySelector("#commentbox");
    n.insertBefore(com, n.firstChild);
    comment++;
    document.querySelector("#idd").value="";
  
}
function userlike()
{
    let l=document.querySelector("#like");
    like++;
    l.innerHTML="like "+like;
}


function deletecontent(btnelement)
{
    btnelement.parentElement.remove();
    
}