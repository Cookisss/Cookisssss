// person = new Object();
// person.firstname="Bill";
// person.lastname="Gates";
// person.age=56;
// person.eyecolor="blue";
// document.write(person.firstname +"is"+person.age+ "yearolds");


// function myFunction(name,job){
// 	alert("welcome"+name+",the" + job);
// }
// var message="hello world";
// var x=message.toUpperCase();
// document.write("<br />"+x);


// var a = "";
// var time=new Date().getHours();
// if (time<20){
// 	a="good day";
// }else{
// 	a="good night"
// }
// document.write("<br />"+a);


// var day=new Date().getDay();
// var week = "";
// switch(day){
// 	case 0:
// 	week="today it's Sunday";
// 	break;
// 	case 1:
// 	week="today it's Monday";
// 	break;
// 	case 2:
// 	week="today it's Tuseday";
// 	break;
// 	case 3:
// 	week="today it's Wednesday";
// 	break;
// 	case 4:
// 	week="today it's Thursday";
// 	break;
// 	case 5:
// 	week="today it's Friday";
// 	break;
// 	case 6:
// 	weekweek="today it's Saturday";
// 	break;
// }
// document.write("<br />");
// document.write(week);

//try catch练习
// var txt="";
// function message(){
// 	try{
// 		aeesflert("welcome guest");
// 	}
// 	catch(err){
// 		txt="there was an error on this page.\n\n";
// 		txt+="Error description:"+err.message +"\n\n";
// 		txt+="Click OK to continue.\n\n";
// 		alert(txt);
// 	}
// }

//抛出异常
// function myFunction(){
// 	try{
// 		var x=document.getElementById("demo").value;
// 		if(x=="") throw "empty";
// 		if(isNaN(x)) throw "not a number";
// 		if(x>10) throw "too high";
// 		if(x<5) throw "too low";
// 	}catch(err){
// 		var y=document.getElementById("mess");
// 		y.innerHTML="Error:" + err + ".";
// 	}
// }

//邮箱必填选项，
// function validate_required(field, alerttxt){
// 	with(field){
// 		if(value==null||value==""){
// 			alert(alerttxt);
// 			return flase;
// 		}else{
// 			return true;
// 		}
// 	}
// }
// function validate_form(thisform){
// 	with(thisform){
// 		if(validate_required(email,"Email must be filled out!")==false){
// 			email.focus();
// 			return false;
// 		}
// 	}
// }

//email 验证
// function validate_email(field,alerttxt){
// 	with(field){
// 		apos=value.indexOf("@")
// 		dotpos=value.lastIndexOf(".")
// 		if(apos<1||dotpos-apos<2){
// 			alert(alerttxt);
// 			return false;
// 		}
// 	}
// }
// function validate_form(thisform){
// 	with(thisform){
// 		if(validate_email(email,"Not a valid e-mail adress!")==false){
// 			email.focus();
// 			return false;
// 		}
// 	}
// }

// document.write(Date());

// document.getElementById("p2").style.color="blue";
// document.getElementById("p2").style.fontFamily="arial";
// document.getElementById("p2").style.fontSize="larger";

// function displayDate(){
// 	document.getElementById("demo").innerHTML=Date();
// }

function checkCookies(){
	if(navigator.cookieEnabled==true){
		alert("已启用cookie")
	}else{
		alert("未启用cookie")
	}
}
// //当您离开输入字段时，会触发将输入文本转换为大写的函数。
// 
// function myFunction(){
// 	var x=document.getElementById("fname");
// 	x.value=x.value.toUpperCase();
// }

// function mOver(obj){
// 	obj.innerHTML="thx"
// }
// function mOut(obj){
// 	obj.innerHTML="move mouse"
// }