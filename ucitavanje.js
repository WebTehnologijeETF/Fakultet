function naslovna_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_naslovna.html", true);
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
	ajax.open("GET", "fakultet_studij.html", true);
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
	ajax.open("GET", "fakultet_partneri.html", true);
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
	ajax.open("GET", "fakultet_kontakt.html", true);
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
	ajax.open("GET", "fakultet_bachelor.html", true);
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
	ajax.open("GET", "fakultet_master.html", true);
	ajax.send();
}