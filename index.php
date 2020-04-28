<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="script.js" async="true"></script>
	<title>The time of my life</title>
</head>
<body>
	<div id="minuteur">
		<h1>Minuteur</h1>
		<input type="number" id="minute" value="10" min="0">
		<button onclick="gominuteur()">go</button>
	</div>
	<div id="chrono">
		<h1>Chrono</h1>
		<section id="chronosec">
			<p id="hchro">00</p>:<p id="mchro">00</p>:<p id="schro">00</p>
		</section>
		<button  id="gochro" onclick="gochrono()" >marche</button>
		<button  id="stopchro" onclick="stopchrono()" hidden="true">stop</button>
		<button  id="rschro" onclick="restartchrono()" hidden="true">restart</button>
		<button  id="tempchro" onclick="tempschono()" hidden="true">temps</button>
		<div>
			<b>Temps</b>
			<ol id="ol-temp">
			
			</ol>
		</div>
		
	</div>
	
	<div id="reveil">
		<h1>alarme</h1>
		<ol id="ol-rev">
			
		</ol>
		<input type="text" id="nomrev" placeholder="nom de l'evenement ou messagge">
		<input type="time" id="revtime">
		<button onclick="newrev()" >enregistrer allarme</button>		
	</div>
	<div id="horloge">
		<h1>horloge</h1>
		<b id="bhr"></b>
	</div>
	
</body>
</html>