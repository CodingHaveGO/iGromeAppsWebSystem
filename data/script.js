// Center Text
	var r_text = new Array (); 
r_text[0] = "iGrome Apps";
var i = Math.floor(r_text.length * Math.random()); 

document.write("<br /><br /><br /><br /><br /><center><FONT SIZE=72><FONT COLOR='#FFFFFF'>" + 
r_text[i]  + "</FONT></center><br />"); 

var bgcolorlist=new Array("#000000") 

document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]; 
// End Center Text