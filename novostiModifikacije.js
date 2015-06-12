//dodavanje novosti - admin
function novostDodaj() 
{	
	var naslov = document.getElementById('naslov').value;
	var naslov1 = document.getElementById('naslov');
	var autor = document.getElementById('autor').value;
	var autor1 = document.getElementById('autor');
	var slika = document.getElementById('slikaN').value;
	var slika1 = document.getElementById('slikaN');
	var tekst = document.getElementById('tekst-novost').value;
	var tekst1 = document.getElementById('tekst-novost');
	var detaljnije = document.getElementById('detaljno-novost').value;
	var detaljnije1 = document.getElementById('detaljno-novost');
	
	/*if(naziv == null || naziv == ''){
		naziv1.style.borderColor = "red";
		naziv1.focus();
		document.getElementById('slikaZZ').style.display = "inline-block";
		document.getElementById('obavezno2').style.display = "inline";
	}
	else{
		naziv1.style.borderColor = "";
		document.getElementById('obavezno2').style.display="none";
		document.getElementById('slikaZZ').style.display="none";
	}*/
	
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Dodali ste novost!");
			naslov1.value = "";
			autor1.value = "";
			slika1.value = "";
			tekst1.value = "";
			detaljnije1.value = "";
		}			
	}
			
	ajax.open("POST", "php/servisiNovosti.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("naslov=" + naslov + "&autor=" + autor + "&slika=" + slika + "&tekst=" + tekst + "&detaljnije=" + detaljnije);
}

//pregled novosti - admin
function novostPregledajSve(){
	var ajax = new XMLHttpRequest();
	var prikaz;
	var datum;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			novost = JSON.parse(ajax.responseText); 
			prikaz = "<div>";
			
			for(i=0; i<novost.novosti.length; i++){
				prikaz += "<div id='novost_detaljno'>";
				prikaz += "<p>";
				prikaz += novost.novosti[i].naslov;
				prikaz += "<br>Napisala: ";
				prikaz += novost.novosti[i].autor;
				prikaz += " - ";
				datum = novost.novosti[i].vrijeme2;
				var pomDatum = new Date(datum * 1000);
				prikaz += (pomDatum.getDate()+"."+(pomDatum.getMonth()+1)+"."+pomDatum.getFullYear()+". "+pomDatum.getHours()+":"+pomDatum.getMinutes()+":"+pomDatum.getSeconds());
				//prikaz += novost.novosti[i].vrijeme2; //kako prikazati vrijeme :(
				prikaz += "<br><br>";
				if (novost.novosti[i].slika == null){
					prikaz += "";
				}
				else {
					prikaz += "<div class='detaljno_slika' style='background-image: url(";
					prikaz += novost.novosti[i].slika;
					prikaz += ");'></div><br>";
				}
				prikaz += novost.novosti[i].tekst;
				prikaz += "<br><br>";
				if (novost.novosti[i].detaljnije == null)
					prikaz += "";
				else prikaz += novost.novosti[i].detaljnije;
				prikaz += "</p>";
				//prikaz+="<input type='button' value='Pregledaj komentare' onclick='komentariNaNovost_pregled_ucitaj(" + novost.novosti[i].id + ");return false;'>";
				prikaz+="<input type='button' value='Pregledaj komentare' onclick='komentariNaNovost_pregled_ucitaj(); komentarPregledajSve(" + novost.novosti[i].id + ");return false;'>";
				//prikaz += "<a href='#' onclick='komentariNaNovost_pregled_ucitaj(); komentarPregledajSve(" + novost.novosti[i].id + ");return false;'> Pregled</a>";
				prikaz += "<input type='button' value='Uredi novost' onclick='izmjenaNovosti_ucitaj(";
				prikaz += novost.novosti[i].id;
				/*prikaz += ",";
				prikaz += novost.novosti[i].naslov;
				prikaz += ",";
				prikaz += novost.novosti[i].autor;
				prikaz += ",";
				prikaz += novost.novosti[i].slika;
				prikaz += ",";
				prikaz += novost.novosti[i].tekst;
				prikaz += ",";
				prikaz += novost.novosti[i].detaljnije;
				prikaz += ");'>"*/
				//prikaz += "); novostIzmijeni(";
				//prikaz += novost.novosti[i].id;
				prikaz += ");return false;'>";
				prikaz += "<input type='button' value='Izbriši novost' onclick='novostIzbrisi(" + novost.novosti[i].id + ")'>";
				prikaz += "</div>";
				prikaz += "<small>--------------------------------------------------------------------------------------------------------------------------</small><br>";
			}	
			prikaz += "</div>";
			document.getElementById('prikaz_svih_novosti').innerHTML = prikaz;
		}
	}
			
	ajax.open("GET", "php/servisiNovosti.php", true);
	ajax.send();
}

//brisanje novosti - admin
function novostIzbrisi(idNovosti)
{	
	var ajax = new XMLHttpRequest();
	
	/*var novost = {
		id: idNovosti
	};
	
	var test = JSON.stringify(novost);*/
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			//alert("Izbrisali ste novost! Osvježite stranicu!");
		}			
	}
			
	ajax.open("POST", "php/servisiNovostiBrisanje.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("id=" + idNovosti);
	alert("Izbrisali ste novost!");
	//novosti_pregled_ucitaj();
}

//izmjena novosti - admin
function novostIzmijeni()
{	
	var idNovosti = document.getElementById('idNovostIzmjena').value;
	var naslov = document.getElementById('naslov').value;
	var naslov1 = document.getElementById('naslov');
	var autor = document.getElementById('autor').value;
	var autor1 = document.getElementById('autor');
	var slika = document.getElementById('slikaN').value;
	var slika1 = document.getElementById('slikaN');
	var tekst = document.getElementById('tekst-novost').value;
	var tekst1 = document.getElementById('tekst-novost');
	var detaljnije = document.getElementById('detaljno-novost').value;
	var detaljnije1 = document.getElementById('detaljno-novost');
	
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Izmijenili ste novost!");
			naslov1.value = "";
			autor1.value = "";
			slika1.value = "";
			tekst1.value = "";
			detaljnije1.value = "";
		}			
	}
			
	ajax.open("POST", "php/servisiNovostiIzmjena.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("id=" + idNovosti + "$naslov" + naslov + "$autor" + autor + "$slika" + slika + "$tekst" + tekst + "$detaljnije" + detaljnije);
}

//prikaz novosti na pocetnoj
function novostPrikaziNaPocetnoj()
{
	var ajax = new XMLHttpRequest();
	var prikaz;
	var datum;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			novost = JSON.parse(ajax.responseText); 
			prikaz = "<div>";
			
			for(i=0; i<novost.novosti.length; i++){
				prikaz += "<div class='novosti_konkurs'>";
				if (novost.novosti[i].slika == null){
					prikaz += "";
				}
				else {
					prikaz += "<div class='odbrana_slika' style='background-image: url(";
					prikaz += novost.novosti[i].slika;
					prikaz += ");'></div>";
				}
				prikaz += "<h4>";
				prikaz += novost.novosti[i].naslov;
				prikaz += "</h4>";
				prikaz += "<h5>Napisala: ";
				prikaz += novost.novosti[i].autor;
				prikaz += " - ";
				datum = novost.novosti[i].vrijeme2;
				var pomDatum = new Date(datum * 1000);
				prikaz += (pomDatum.getDate()+"."+(pomDatum.getMonth()+1)+"."+pomDatum.getFullYear()+". "+pomDatum.getHours()+":"+pomDatum.getMinutes()+":"+pomDatum.getSeconds());
				prikaz += "</h5>";
				prikaz += "<p>";
				prikaz += novost.novosti[i].tekst;
				prikaz += "</p>";				
				prikaz += "<div id='prikaziBrojKomentara'></div>";
				//prikaz += "<a href='komentariNaNovost.php?id=";
				prikaz += "<a href='#' onclick='komentariSaPocetne_ucitaj(";
				prikaz += novost.novosti[i].id;
				prikaz += "); komentariNaNovost(";
				prikaz += novost.novosti[i].id;
				prikaz += ");return false;'>";
				prikaz += novost.novosti[i].brojKomentara;
				prikaz += " komentara </a>";
				if (novost.novosti[i].detaljnije == null){
					prikaz += ""; //<a href="#"></a> ovo sam prije printala
				}
				else {
					//prikaz += "<a href='detaljnijeNovost.php?id=";
					prikaz += "<a href='#' onclick='novost_detaljnije_ucitaj(); novostDetaljnije(";
					prikaz += novost.novosti[i].id;
					prikaz += ");return false;'> Detaljnije... </a>";
				}
			}	
			prikaz += "</div>";
			document.getElementById('prikaziNovostiPocetna').innerHTML = prikaz;
		}
	}
			
	ajax.open("GET", "php/servisiNovosti.php", true);
	ajax.send();
}

//broj komentara na novost NE RADIIII
function dajBrojKomentara(idNovosti)
{
	var ajax = new XMLHttpRequest();
	var brojKomentara;
	var prikaz = "<p>broj ";
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			brojKomentara = JSON.parse(ajax.responseText); 
			prikaz += ajax.responseText;
			prikaz += "</p>";
			document.getElementById('prikaziBrojKomentara').innerHTML = prikaz;
		}
	}
			
	ajax.open("GET", "php/servisBrojKomentara.php?vijest=" + idNovosti, true);
	ajax.send();
}

//detaljni prikaz novosti
function novostDetaljnije(idNovosti)
{
	var ajax = new XMLHttpRequest();
	var prikaz;
	var datum;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			detaljna = JSON.parse(ajax.responseText);
			prikaz = "<div id='novost_detaljno'>";
			prikaz += "<p> ";
			prikaz += detaljna.novost[0].naslov;
			prikaz += "<br> Napisala: ";
			prikaz += detaljna.novost[0].autor;
			prikaz += " - "
			datum = detaljna.novost[0].vrijeme2;
			var pomDatum = new Date(datum * 1000);
			prikaz += (pomDatum.getDate()+"."+(pomDatum.getMonth()+1)+"."+pomDatum.getFullYear()+". "+pomDatum.getHours()+":"+pomDatum.getMinutes()+":"+pomDatum.getSeconds());
			prikaz += "<br><br>";
			if (detaljna.novost[0].slika == null){
				prikaz += "";
			}
			else {
				prikaz += "<div class='detaljno_slika' style='background-image: url(";
				prikaz += detaljna.novost[0].slika;
				prikaz += ");'></div>";
			}
			prikaz += "<br>";
			prikaz += detaljna.novost[0].tekst;
			prikaz += "<br><br>";
			if (detaljna.novost[0].detaljnije == null)
				prikaz += "";
			else prikaz += detaljna.novost[0].detaljnije;
			prikaz += "</p>";
			prikaz += "</div>";
			
			document.getElementById('prikaz_novosti_detaljno').innerHTML = prikaz;
			
		}
		if (ajax.readyState == 4 && ajax.status == 404){ //ne znam treba li ovo
			document.getElementById("prikaz_novosti_detaljno").innerHTML = "Greska: nepoznat URL";
		}
	}
			
	ajax.open("GET", "php/servisiNovostiDetaljno.php?id=" + idNovosti, true);
	ajax.send();
}
