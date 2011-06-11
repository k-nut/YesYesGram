
// Found this useful snippet here http://www.svendtofte.com/code/usefull_prototypes/
Array.prototype.isEqualTo = function(arr) {
	if (this.length != arr.length) return false;
	for (var i = 0; i < arr.length; i++) {
		if (this[i].compareArrays) { //likely nested array
			if (!this[i].compareArrays(arr[i])) return false;
			else continue;
		}
		if (this[i] != arr[i]) return false;
	}
	return true;
}		   		

function validate(input, solution){
	if (input.isEqualTo(solution)){
        // Stop the timer
        stopCount();
        // Display the message
		$("#message").css("display", "block");
		$("#message").css("background-color", "green");
		$("#message").text("Your solution is correct")
        // Count higher in the cookie
        if (getCookie("Number")!=null){
            setCookie("Number", parseInt(getCookie("Number"))+1)
            if (getCookie("Number") == 3){
                $("#solved-three").css("display", "block")
            }
        }
        else {
            setCookie("Number", 1)
        }
        // Play the correct sound
        document.getElementById('audiotag1').play();
	}
	
	else {
		$("#message").css("display", "block");
		$("#message").css("background-color", "red");
		$("#message").text("Oops, something is wrong with your solution");
        $("#help").css("display", "block");
	};
}

function showHelp(input, solution){
    for (i=0; i<input.length; i++){
        if (input[i] != solution[i]){
            $("td").eq(i).css("background-color", "rgb(128, 0, 128)");
            $("#check").css("display", "none");
        }
    }
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++){
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name){
        return unescape(y);
        }
      }
}

// Timer
var timer_is_on=0;

function returnTotal(){
    var seconds = parseInt($("#seconds").text());
    var minutes = parseInt($("#minutes").text());
    var total = minutes*60 + seconds;
    console.log(total);
}

function pad(n){
    n = n + ""
    if (n.length == 1){
        n = 0 + n;
    }

    return n
    }
        
    
function timedCount(){
    var seconds = parseInt($("#seconds").text());
    var minutes = parseInt($("#minutes").text());
    var total = minutes*60 + seconds;
    
    total=total+1;
    $("#minutes").text(Math.floor(total / 60))
    $("#seconds").text(total % 60);
    t=setTimeout("timedCount()",1000);
}

function doTimer(){
    if (!timer_is_on){
      timer_is_on=1;
      timedCount();
    }
}

function stopCount(){
    clearTimeout(t);
    timer_is_on=0;
}

				
$(document).ready(function() {
    input = [];
    for (var i = 0; i < parseInt($("#length").text()); i++){
        input.push(0);
    }
	var n = 1
	$("td").each(function(){
		$(this).attr("id", n);
		n += 1
	});

    doTimer();
    
	$("td").bind("click", function(){
		//alert($(this).css("background-color"));
		var colors = new Array();
		colors["unselected"] = "rgb(255, 255, 255)"; // White
		colors["selected"] = "rgb(0, 255, 0)"; // Green
		colors["maybe"] = "rgb(255, 0, 0)"; 	// red
        colors["help"] = "rgb(128, 0, 128)"; // purple
		
		switch ($(this).css("background-color")){
			case(colors["unselected"]):
                $(this).css("background-color", colors["selected"]);
				input[$(this).attr("id")-1] = 1;
				$(this).text("X");
				break;
                
			case(colors["help"]):
                $(this).css("background-color", colors["selected"]);
				input[$(this).attr("id")-1] = 1;
				$(this).text("X");
				break;
                
			case(colors["selected"]):
				$(this).css("background-color", colors["maybe"]);
				input[$(this).attr("id")-1] = 0;
                $(this).text("");
				break;
			case(colors["maybe"]):
				$(this).css("background-color", colors["unselected"]);
				$(this).text("");
				input[$(this).attr("id")-1] = 0;
				break;
			}
	})})
