let img=document.querySelector('.img');
let container=document.querySelector('.container')

function phones (phone)
{
    img.src=phone;
}

function colors(color)
{
    container.style.background=color;
}




function culc (age)
{
    console.log(age*400)
}


culc(40)
