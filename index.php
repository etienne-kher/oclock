<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" media="screen" type="text/css" href="style.css"/>
	<script type="text/javascript" src="script.js" async="true"></script>
	<title>The time of my life</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="neons col-12">
				<h1><em>-The Time of My Life-</em></h1>
			</div>
		</div>
	</div>
	<section class="section_flexminchro">
		<div id="minuteur">
			<h1>Minuteur</h1>
			<div id="minuteur_flex">
				<input type="number" id="minute" value="10" min="0">
				<div class="wrapper">
					<a href=""><span><button id="animation_button" onclick="gominuteur()">go</button></span></a>
				</div>
				
			</div>
		</div>
		<div id="chrono">
			<h1>Chrono</h1>
			<section id="chronosec">
				<p id="hchro">00&nbsp;:</p><p id="mchro">00&nbsp;:</p><p id="schro">00</p>
			</section>
			<button  id="gochro" onclick="gochrono()" >marche</button>
			<button  id="stopchro" onclick="stopchrono()" hidden="true">stop</button>
			<button  id="rschro" onclick="restartchrono()" hidden="true">restart</button>
			<button  id="tempchro" onclick="tempschono()" hidden="true">temps</button>
			<div>
				<p id="margin_tab"><b>Temps</b></p>
				<ol id="ol-temp">
				
				</ol>
			</div>	
		</div>
	</section>
	<section class="section_flexminchro">
		<div id="reveil">
			<h1>alarme</h1>
			<div id="flex_reveil">
				<div>
					<ol id="ol-rev">
				
					</ol>
				</div>
				<div>
					<input type="text" id="nomrev" placeholder="nom de l'evenement ou messagge">
					<input type="time" id="revtime">
				</div>	
			</div>
			<div>
				<button onclick="newrev()" >enregistrer allarme</button>
			</div>		
		</div>
		<div id="horloge">
			<h1>horloge</h1>
			<p id="heure"><b id="bhr"></b></p>
		</div>
	</section>
	
	
	
</body>
</html>