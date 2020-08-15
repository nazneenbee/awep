let comment=1;
let like=1;

function addcomment()
{
    let newe = document.createElement("div");
    newe.textContent="comment.........."+comment;
    newe.style.background="yellow";
    newe.style.color="Red";
    newe.style.margin="20px";
    let comm=document.querySelector("#commentnew");
    comm.appendChild(newe);
    comment++;
}

function addlike()
{
    let newl=document.querySelector("#likeid");
    newl.style.background="black";
    newl.style.color="white";
    newl.innerHTML="like "+like;
    like++;
}

function onmousecomment()
{
 let c=document.querySelector("#commentid");
 c.style.background="black";
 c.style.color="white";
}