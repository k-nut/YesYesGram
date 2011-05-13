<!doctype html>	
<html>
<head>
	<title>Game Test</title>
	<meta charset="utf8" />
	<!-- Javascript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script src="script.js"></script>
	<!-- Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo' rel='stylesheet' type='text/css'>
	<!-- Css -->
	<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<div id="gamecontainer">
		<table id="game">
			<?php 
				var id = 0;
				solution = [0, 1, 0, 1];
				fields = solution.len()+1 ;
			?>
			<tr>
				<td class="rand"></td>
				<td class="rand">0</td>
				<td class="rand">2</td>
			</tr>
			<tr>
				<td class="rand" id="4">1</td>
				<td id="0"></td>
				<td id="1"></td>

			</tr>
			<tr>
				<td class="rand" id="7">1</td>
				<td id="2"></td>
				<td id="3"></td>

			</tr>
		</table>
	</div>
	<button onclick="validate(input, solution)">Lösung überprüfen</button>
	<div id="message"></div>
</body>
</html>
