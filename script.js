//minuteur

var minuteur = window.document.getElementById('minute').value;
 function mntr() 
 {		var minuteur = window.document.getElementById('minute').value;
 		if(minuteur>0)
 		{
 			minuteur--;
 			window.document.getElementById('minute').value=minuteur;
 		}
 		else
 		{
 			clearInterval(intmin);
 			alert('temp minuteur écoulé');
 		}		 		
 }

function gominuteur()
{ if (minuteur>0)
 {
 		intmin=setInterval( mntr, 1000);  		
 }
}

//chrono
var chronomemo=0;
function gochrono()
{	
	if(chronomemo==0)
	{	chronomemo=1;
		window.document.getElementById('gochro').innerHTML="Arret";
		window.document.getElementById('gochro').hidden=false;
		window.document.getElementById('rschro').hidden=false;
		window.document.getElementById('tempchro').hidden=false;
		chroint=setInterval( chrono, 1000);	
	}
	else
	{	chronomemo=0;
		window.document.getElementById('gochro').innerHTML="Marche;"
		stopchrono();
	}


	

}
function chrono()
{	
	
	hc=window.document.getElementById('hchro').innerHTML;
	mc=window.document.getElementById('mchro').innerHTML;
	sc=window.document.getElementById('schro').innerHTML;

	sc=parseInt(sc, 10);
	mc=parseInt(mc, 10);
	hc=parseInt(hc, 10);
	
	if(sc<59)
	{
		sc++;
	}
	else
	{
		mc++;
		if(mc>59)
		{
			hc++;
			mc=0;
		}
		sc=0;
	}

	if(sc<10)
	{
		sc="0"+sc;
		window.document.getElementById('schro').innerHTML=sc;
	}
	else
	{
		window.document.getElementById('schro').innerHTML=sc;
	}
	if(mc<10)
	{	if(mc==0)
		{
			mc="00";
		}
		else
		{
			mc="0"+mc;
		}
		
		window.document.getElementById('mchro').innerHTML=mc;

	}
	else
	{
		window.document.getElementById('mchro').innerHTML=mc;
	}
	if(hc<10)
	{
		if(hc==0)
		{
			hc="00";
		}
		else
		{
			hc="0"+hc;
		}
		
		
		window.document.getElementById('hchro').innerHTML=hc;

	}
	else
	{
		window.document.getElementById('hchro').innerHTML=hc;
	}
}


function restartchrono()
{	
	chronomemo=0;
	window.document.getElementById('gochro').innerHTML="Marche"
	clearInterval(chroint);
	window.document.getElementById('ol-temp').innerHTML="";
	window.document.getElementById('hchro').innerHTML="00";
	window.document.getElementById('mchro').innerHTML="00";
	window.document.getElementById('schro').innerHTML="00";

	window.document.getElementById('gochro').hidden=false;
	window.document.getElementById('rschro').hidden=true;
	window.document.getElementById('tempchro').hidden=true;
}

function tempschono()
{

	hc=window.document.getElementById('hchro').innerHTML;
	mc=window.document.getElementById('mchro').innerHTML;
	sc=window.document.getElementById('schro').innerHTML;
	console.log(hc,mc,sc);

	licro=window.document.createElement("li");
	licro.innerHTML =hc+"h"+mc+"m"+sc+"s";
	window.document.getElementById('ol-temp').appendChild(licro);


}
function stopchrono()
{
	window.document.getElementById('gochro').hidden=false;
	window.document.getElementById('rschro').hidden=false;
	window.document.getElementById('tempchro').hidden=false;
	clearInterval(chroint);

}
//reveille
tabrev=[];
function calctmp(rev,hor)
{	
  	res = rev.split(":");
	rh=parseInt(res[0],10);
	rm=parseInt(res[1],10);

	if( typeof(hot) == 'undefined' )
	{
        d=new Date();
    }
    else
    {	
    	d=hor;
    }
    
	dh=d.getHours();
	dm=d.getMinutes();
	m=rm-dm;
	if(m<0)
	{
		m=60+m;
		rh--;
	}
	h=rh-dh;
	msgfin=" encore ";
	if(h<=1)
	{
		if(h==1)
		{
			msgfin+=h+" heur "
		}
		else
		{
			msgfin+=" seulment";
		}
	}
	else
	{
		msgfin+=h+" heurs "
	}
	if(msgfin.includes("seulment")==false)
	{
		msgfin+=" et ";
	}
	
	if(m<=1)
	{
		msgfin+=m+" minute"
	}
	else
	{
		msgfin+=m+" minutes"
	}
	return msgfin;
	
}
function newrev()
{	mes=window.document.getElementById('nomrev').value;
	revtime=window.document.getElementById('revtime').value;
	rev=[mes,revtime,0];
	tabrev.push(rev);
	console.log(tabrev);
	msgtmp=calctmp(revtime);
	lirev=window.document.createElement("li");
	lirev.innerHTML =revtime+msgtmp;
	window.document.getElementById('ol-rev').appendChild(lirev);
	
}

function reveil(hor)
{
	//console.log(hor);
	hr=hor.getHours();
	mr=hor.getMinutes();
	hmr=hr+":"+mr;
	console.log("n");
	window.document.getElementById('ol-rev').innerHTML="";
	for (var i = tabrev.length - 1; i >= 0; i--) 
	{
		//tout calculer

		//le remplire
		lirev=window.document.createElement("li");

		if(hmr==tabrev[i][1])//modifier cette condition pour avoir les temps restant
		{
			alert(tabrev[i][0]);
			tabrev[i][2]=1;
		}
		if(tabrev[i][2]==1)
		{
			lirev.innerHTML =tabrev[i][1]+" passé ";
		}
		else
		{	calctmp(hmr,hor)
			lirev.innerHTML =tabrev[i][1]+calctmp(tabrev[i][1],hor);
		}
		window.document.getElementById('ol-rev').appendChild(lirev);
	}
}
//horloge
function horl()
{	hor=new Date();
	reveil(hor);
	console.log(hor);	
	hr=hor.getHours();
	mr=hor.getMinutes();
	hmr=hr+":"+mr;
	window.document.getElementById('bhr').innerHTML=hmr;
}

	firsth=new Date();	
	hr=firsth.getHours();
	mr=firsth.getMinutes();
	hmr=hr+":"+mr;
	window.document.getElementById('bhr').innerHTML=hmr;
setInterval( horl, 60000);  	
