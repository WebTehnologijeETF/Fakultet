function komentarDodaj()
{	
	var idNovosti = document.getElementById('idNovostKomentar').value;
	var ime = document.getElementById('ime').value; //ime i email ce trebati iz baze uzimati
	var ime1 = document.getElementById('ime');
	var eemail = document.getElementById('eemail').value;
	var eemail1 = document.getElementById('eemail');
	var tekst = document.getElementById('tekst-komentar').value;
	var tekst1 = document.getElementById('tekst-komentar');
	
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
			alert("Poslali ste komentar!");
			ime1.value = "";
			eemail1.value = "";
			tekst1.value = "";
		}			
	}
			
	ajax.open("POST", "php/servisiKomentari.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("vijest=" + idNovosti + "&autor=" + ime + "&tekst=" + tekst + "&email=" + eemail);
}

function komentarPregledajSve(idNovosti){
	var ajax = new XMLHttpRequest();
	var prikaz;
	var datum;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			komentar = JSON.parse(ajax.responseText);
			if (komentar.odgovor == "Nema komentara na ovu novost")
				document.getElementById('prikaz_svih_komentara').innerHTML = komentar.odgovor;
			else{
				prikaz = "<div>";
				
				for(i=0; i<komentar.komentari.length; i++){
					prikaz += "<h4> ";
					prikaz += komentar.komentari[i].autor;
					prikaz += "</h4> ";
					if (komentar.komentari[i].email == null)
						prikaz += "";
					else {
						prikaz += " - <a href='mailto: ";
						prikaz += komentar.komentari[i].email;
						prikaz += "'><small>";
						prikaz += komentar.komentari[i].email;
						prikaz += "</small></a> - <small> ";
					}
					datum = komentar.komentari[i].vrijeme3;
					var pomDatum = new Date(datum * 1000);
					prikaz += (pomDatum.getDate()+"."+(pomDatum.getMonth()+1)+"."+pomDatum.getFullYear()+". "+pomDatum.getHours()+":"+pomDatum.getMinutes()+":"+pomDatum.getSeconds());
					prikaz += "</small>";
					prikaz += "<p>";
					prikaz += komentar.komentari[i].tekst;
					prikaz += "</p>";
					prikaz += "<input type='button' value='Izbriši komentar' onclick='komentarIzbrisi(" + komentar.komentari[i].id + ")'>";
					prikaz += "<br><small>--------------------------------------------------------------------------------------------------------------------------</small><br><br>";
				}	
				prikaz += "</div>";
				document.getElementById('prikaz_svih_komentara').innerHTML = prikaz;
			}
		}
		if (ajax.readyState == 4 && ajax.status == 404){ //ne znam treba li ovo
			document.getElementById("prikaz_svih_komentara").innerHTML = "Greska: nepoznat URL";
		}
	}
			
	ajax.open("GET", "php/servisiKomentari.php?vijest=" + idNovosti, true);
	ajax.send();
}

function komentarIzbrisi(idKomentara)
{	
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			//alert("Izbrisali ste novost! Osvježite stranicu!");
		}			
	}
			
	ajax.open("POST", "php/servisiKomentariBrisanje.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("id=" + idKomentara);
	alert("Izbrisali ste komentar!");
	//novosti_pregled_ucitaj();
}

function komentariNaNovost(idNovosti)
{
	var ajax = new XMLHttpRequest();
	var prikaz;
	var datum;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			komentar = JSON.parse(ajax.responseText);
			if (komentar.odgovor == "Nema komentara na ovu novost")
				document.getElementById('prikaz_komentara_na_novost_sa_pocetne').innerHTML = komentar.odgovor;
			else{
				prikaz = "<div>";
				
				for(i=0; i<komentar.komentari.length; i++){
					prikaz += "<h4> ";
					prikaz += komentar.komentari[i].autor;
					prikaz += "</h4> ";
					if (komentar.komentari[i].email == null)
						prikaz += "";
					else {
						prikaz += " - <a href='mailto: ";
						prikaz += komentar.komentari[i].email;
						prikaz += "'><small>";
						prikaz += komentar.komentari[i].email;
						prikaz += "</small></a> - <small> ";
					}
					datum = komentar.komentari[i].vrijeme3;
					var pomDatum = new Date(datum * 1000);
					prikaz += (pomDatum.getDate()+"."+(pomDatum.getMonth()+1)+"."+pomDatum.getFullYear()+". "+pomDatum.getHours()+":"+pomDatum.getMinutes()+":"+pomDatum.getSeconds());
					prikaz += "</small>";
					prikaz += "<p>";
					prikaz += komentar.komentari[i].tekst;
					prikaz += "</p>";
					prikaz += "<br>";
				}	
				prikaz += "</div>";
				document.getElementById('prikaz_komentara_na_novost_sa_pocetne').innerHTML = prikaz;
			}
		}
		if (ajax.readyState == 4 && ajax.status == 404){ //ne znam treba li ovo
			document.getElementById("prikaz_komentara_na_novost_sa_pocetne").innerHTML = "Greska: nepoznat URL";
		}
	}
			
	ajax.open("GET", "php/servisiKomentari.php?vijest=" + idNovosti, true);
	ajax.send();
}