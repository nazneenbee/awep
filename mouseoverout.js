
function onmousetext()
{
    let onmt=document.querySelector("#id2");
    onmt.style.background = "yellow";
    onmt.style.color= "black";
    onmt.innerHTML="mouse in text area";

}
function onmouseouttext()
{
    let onmo=document.querySelector("#id2");
    let n=document.querySelector("id1");
    onmo.style.background="tomato";
    onmo.style.color="black";
    onmo.innerHTML= "outside the text area";

}