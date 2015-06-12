//dodavanje korisnika - admin
function korisnikDodaj() 
{	
	var korisnicko = document.getElementById('korisnickoImee').value;
	var korisnicko1 = document.getElementById('korisnickoImee');
	var sifra = document.getElementById('sifra').value;
	var sifra1 = document.getElementById('sifra');
	var email = document.getElementById('korisnikEmail').value;
	var email1 = document.getElementById('korisnikEmail');
	var tip = document.getElementById('korisnikTipp').value;
	var tip1 = document.getElementById('korisnikTipp');
	
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
	
	/*var novost = {
		naslov: naslov,
		autor: autor,
		slika: slika,
		tekst: tekst,
		detaljnije: detaljnije		
	};*/
	
	//var test = JSON.stringify(novost);
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Dodali ste korisnika!");
			korisnicko1.value = "";
			sifra1.value = "";
			email1.value = "";
			tip1.value = "";
		}			
	}
			
	ajax.open("POST", "php/servisiKorisnici.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("username=" + korisnicko + "&password=" + sifra + "&email=" + email + "&tip=" + tip);
}

//pregled korisnika - admin
function korisniciPregledajSve(){
	var ajax = new XMLHttpRequest();
	var prikaz;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			korisnik = JSON.parse(ajax.responseText); 
			prikaz = "<div>";
			
			for(i=0; i<korisnik.korisnici.length; i++){
				prikaz += "<div class='admin_korisnik'>";
				prikaz += "<p>Korisničko ime: ";
				prikaz += korisnik.korisnici[i].username;
				prikaz += "</p>";
				prikaz += "<p>Email: ";
				prikaz += korisnik.korisnici[i].email;
				prikaz += "</p>";
				prikaz+="<input type='button' value='Izmijeni' onclick='korisnici_pregled_ucitaj(); korisnikUredi(" + korisnik.korisnici[i].username + ");return false;'>";
				prikaz += "<input type='button' value='Briši' onclick='korisnikIzbrisi(\"" + korisnik.korisnici[i].username + "\")'>";
				prikaz += "</div><br>";
			}	
			prikaz += "</div>";
			document.getElementById('pregled_svih_korisnika').innerHTML = prikaz;
		}
	}
			
	ajax.open("GET", "php/servisiKorisnici.php", true);
	ajax.send();
}

//brisanje korisnika - admin
function korisnikIzbrisi(user)
{	
	var ajax = new XMLHttpRequest();

	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
		
		}			
	}
			
	ajax.open("POST", "php/servisiKorisniciBrisanje.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("username=" + user);
	alert("Izbrisali ste korisnika!");
}

