function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 

function js1_f1()
{
$('sp1').style.background="url(logo1.png) repeat-y #fc0";
}

function js1_f2()
{
$('sp1').style.background="#f00";
}
function js1_f3()
{
$('b1').style.backgroundColor="#3366CC";
}

function js1_f4()
{
$('uu11').style.listStyle="square outside";
}
function js1_f5()
{
$('b3').style.fontFamily="fantasy";
}
function js1_f6()
{
$('b5').style.marginTop="30px";
}
function js1_f7()
{
$('b6').style.borderBottomStyle="dashed";
}
function js1_f8()
{
$('b7').style.borderRightColor="#00ff00";
}
function js1_f9()
{
$('b5').style.marginTop="0px";
}
function js1_f10()
{
$('b8').style.textTransform="uppercase";
}