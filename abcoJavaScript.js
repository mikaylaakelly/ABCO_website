

function _(id){return document.getElementById(id);}

function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'please wait...';
	var formdata = new FormData();
	
	window.alert("it made it past formdata object");
	
	formdata.append("n", _("n").value);
	formdata.append("e", _("e").value);
	formdata.append("m", _("m").value);
	var ajax = new XMLHttpRequest();
	
	window.alert("it made it past ajax object");
	
	ajax.open("POST", "example_parser.php");
	ajax.onreadystatechange = function(){
		if(ajax.readystate == 4 && ajax.status == 200){
			if(ajax.responseText == "Success"){
				_("my_form").innerHTML = '<h2>Thanks '+ _("n").value + ' , your message has been sent</h2>';
			}else{
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	window.alert("It ran through all the javascript");
}