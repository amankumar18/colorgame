	var x= document.getElementById("a");
	var num= 6;
	var color = generateRandomColors(num);
	var squares= document.querySelectorAll(".square");
	var pickedcolor = pickcolor();
	x.textContent="Color - " +pickedcolor;
	var messageDisplay= document.getElementById("MessageDisplay");
	var e=document.getElementById("easy");
	var h=document.getElementById("hard");
	var z=document.getElementById("z");
	e.addEventListener("click",function(){
		h.classList.remove("selected");
		e.classList.add("selected");
		num= 3 ;
	    color = generateRandomColors(num);
	    pickedcolor = pickcolor();
	    x.textContent="Color - " + pickedcolor;
	    for (var i=0; i<squares.length; i++)
        {
        if (color[i])
         {
	     squares[i].style.backgroundColor = color[i];
	     }
	     else
	     {
	 	  squares[i].style.display="none";
         }
     }
	})
	h.addEventListener("click",function(){
		h.classList.add("selected");
		e.classList.remove("selected");
		num= 6 ;
	    color = generateRandomColors(num);
	    pickedcolor = pickcolor();
	    x.textContent="Color - " + pickedcolor;
	    for (var i=0; i<squares.length; i++)
        {
	     squares[i].style.backgroundColor = color[i];
	 	  squares[i].style.display="block";
        }
	})
	var y= document.getElementById("Reset");
	y.addEventListener("click",function(){
		color = generateRandomColors(num);
		pickedcolor = pickcolor(  );
		x.textContent="Color - " +pickedcolor;
		y.textContent="New Colors!"
		z.style.backgroundColor="steelblue";
		messageDisplay.textContent="";
		for (var i=0; i<squares.length; i++)
        {
	     squares[i].style.backgroundColor = color[i];
        }
	})
for (var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = color[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor= this.style.backgroundColor;
		if (clickedcolor=== pickedcolor)
		{
			changecolors(clickedcolor);
			messageDisplay.textContent="Correct!";
			y.textContent="Play Again?";
			z.style.backgroundColor= clickedcolor;
		}
		else
		{
		 this.style.backgroundColor = "#232323";
		 messageDisplay.textContent="Try Again!";
		}
	})
}
function changecolors(color)
{
	for (var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor()
{
	var random= Math.floor(Math.random()  * color.length);
	return color[random];
}
function generateRandomColors(num)
{
 var arr = [];
 for (var i=0; i<num; i++)
 {
 	arr.push(randomcolor())
 }
 return arr;
}
function randomcolor()
{
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}