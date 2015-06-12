function naslovna_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/fakultet_naslovna.php", true);
	ajax.send();
}

function studij_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/fakultet_studij.html", true);
	ajax.send();
}

function partneri_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/fakultet_partneri.html", true);
	ajax.send();
}

function kontakt_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/fakultet_kontakt.php", true);
	ajax.send();
}

function bachelor_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/fakultet_bachelor.html", true);
	ajax.send();
}

function master_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/fakultet_master.html", true);
	ajax.send();
}

function zpregled_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/zavrsni_pregled.html", true);
	ajax.send();
}

function zdodaj_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/zavrsni_dodaj.html", true);
	ajax.send();
}

function detaljnije_ucitaj(naslov, autor, datum, slika, tekst, detaljniji_tekst)
//function detaljnije_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/novosti_detaljnije.php?naslov="+naslov+"&autor="+autor+"&datum="+datum+"&slika="+slika+"&tekst="+tekst+"&detaljniji_tekst="+detaljniji_tekst, true);
	//ajax.open("GET", "novosti_detaljnije.php?datum="+datum, true);
	//ajax.open("GET", "novosti_detaljnije.html", true);
	ajax.send();
}

function potvrdaSlanja_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/kontakt_forma_validacija.php", true);
	//ajax.open("GET", "novosti_detaljnije.php?datum="+datum, true);
	//ajax.open("GET", "novosti_detaljnije.html", true);
	ajax.send();
}

function login_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/fakultet_login.php", true);
	ajax.send();
}

function admin_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/admin_panel.html", true);
	ajax.send();
}

function novosti_dodaj_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "php/novosti_dodaj.php", true);
	ajax.send();
}

function novosti_pregled_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/novosti_pregled.html", true);
	ajax.send();
}

function komentariNaNovost_pregled_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/komentariNaNovost_pregled.html", true);
	//ajax.open("GET", "komentarPregledajSve("+idNovosti+")", true);
	ajax.send();
}

function novost_detaljnije_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/novosti_detaljnije.html", true);
	ajax.send();
}

function komentariSaPocetne_ucitaj(idNovosti)
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			document.getElementById("stranica").innerHTML = ajax.responseText;
			document.getElementById('idNovostKomentar').value = idNovosti;
		}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/komentari_pregled.html", true);
	ajax.send();
}

function izmjenaNovosti_ucitaj(idNovosti)
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			document.getElementById("stranica").innerHTML = ajax.responseText;
			document.getElementById('idNovostIzmjena').value = idNovosti;
			/*document.getElementById('naslov').value = naslov;
			document.getElementById('autor').value = autor;
			document.getElementById('slikaN').value = slika;
			document.getElementById('tekst-novost').value = tekst;
			document.getElementById('detaljno-novost').value = detaljnije;*/
		}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/novost_izmijeni.html", true);
	ajax.send();
}
