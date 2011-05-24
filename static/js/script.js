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
		$("#message").css("display", "block");
		$("#message").css("background-color", "green");
		$("#message").text("Die Lösung war richtig")
        document.getElementById('audiotag1').play();
	}
	
	else {
		$("#message").css("display", "block");
		$("#message").css("background-color", "red");
		$("#message").text("Die Lösung war leider falsch");
	};
}

				
$(document).ready(function() {
    input = []
    for (var i = 0; i < parseInt($("#length").text()); i++){
        input.push(0);
    }
    
	$("td").bind("click", function(){
		//alert($(this).css("background-color"));
		var colors = new Array();
		colors["unselected"] = "rgb(255, 255, 255)"; // White
		colors["selected"] = "rgb(0, 255, 0)"; // Green
		colors["maybe"] = "rgb(255, 0, 0)"; 	// red
		
		switch ($(this).css("background-color")){
			case(colors["unselected"]):
				$(this).animate ({
					backgroundColor: colors["selected"]
				});
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
