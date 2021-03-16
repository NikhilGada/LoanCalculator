function getinput(){
	var pa = document.getElementById('myinput1').value;
	var ia = document.getElementById('myinput2').value;
	var y = document.getElementById('myinput3').value;
	calculate(pa,ia,y);
}

function calculate(pa,ia,y){
	var r = ia/12/100;
	var a = Math.pow(r+1,y*12);
	var b = a/(a-1)
	var res = pa*r*b
	output(res,pa)
}

function output(res,pa){
	document.getElementsByName('displayemi')[0].value= res.toFixed(0);
	document.getElementsByName('displaytotal')[0].value= parseInt(res.toFixed(0)) + parseInt(pa);
}