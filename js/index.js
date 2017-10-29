$( "#pin" ).html(
	"<form action='' method='' name='enterform' id='enterform' autocomplete='off'>" +
		"<input id='enterbox' type='password' value='' name='enterbox' disabled />" +
		"<br/>" +
		"<input type='button' class='button' name='1' value='1' id='1' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='2' value='2' id='2' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='3' value='3' id='3' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='button' name='4' value='4' id='4' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='5' value='5' id='5' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='6' value='6' id='6' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='button' name='7' value='7' id='7' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='8' value='8' id='8' onClick=addNumber(this); />" +
		"<input type='button' class='button' name='9' value='9' id='9' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='button' name='0' value='0' id='b0' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='button clear' name='-' value='clear' id='-' onClick=clearForm(this); />" +
		"<input type='button' class='button' name='c' value='clean' id='clean' onClick=cleanForm(this); />"+
		"<input type='button' class='button enter' name='+' value='enter' id='+' onClick=submitForm(enterbox); />" +
		
	"</form>"
);

function addNumber(e){
	var v = $( "#enterbox" ).val().split('').sort(function(){return 0.5-Math.random()}).join('');
	//v.shuffle();
	$( "#enterbox" ).val( v + e.value );


}
/*function shuffle () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}*/

function clearForm(e){
	$( "#enterbox" ).val( "" );
}
function cleanForm(e){
	var v = $( "#enterbox" ).val();
	$( "#enterbox" ).val( v.substring(0, v.length - 1) );
}
function submitForm(e) {
	if (e.value == "") {
		alert("Enter pin");
	} else {
		alert( "your pin - " + e.value );
		data = {
			pin: e.value
		}
		$( "#enterbox" ).val( "" );
	};
};
