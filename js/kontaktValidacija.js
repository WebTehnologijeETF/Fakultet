function kontaktValidacija(){
	var ime = document.getElementById('ime');
	var ime1 = document.getElementById('ime').value;
	var mail = document.getElementById('eemail');
	var mail1 = document.getElementById('eemail').value;
	var poruka = document.getElementById('upit');
	var poruka1 = document.getElementById('upit').value;
	var tip1 = document.getElementById('biraj').value;
	
	var validna = true;
	var imep = false;
	var maill = false;
	var por = false;
	
	var imePrezime = /^([A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?[\s][A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?)+$/;
	var mailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
	
	if(!imePrezime.test(ime.value)){
		ime.style.borderColor = "red";
		validna = false;
		imep = true;
		document.getElementById('slika1').style.display="inline-block";
		document.getElementById('obavezno').style.display="inline";
	}
	else{
		ime.style.borderColor = "";
		imep = false;
		document.getElementById('obavezno').style.display="none";
		document.getElementById('slika1').style.display="none";
	}
	
	if(!mailRegex.test(mail.value)){
		mail.style.borderColor = "red";
		validna = false;
		maill = true;
		document.getElementById('slika2').style.display="inline-block";
		document.getElementById('obaveznoo').style.display="inline";
	}
	else{
		mail.style.borderColor = "";
		maill = false;
		document.getElementById('obaveznoo').style.display="none";
		document.getElementById('slika2').style.display="none";
	}
	
	if(poruka.value == null || poruka.value == '' || poruka.value.length < 5){
		poruka.style.borderColor = "red";
		validna = false;
		por = true;
		document.getElementById('slika3').style.display="inline-block";
		document.getElementById('poruka').style.display="inline";
	}
	else{
		poruka.style.borderColor = "";
		por = false;
		document.getElementById('poruka').style.display="none";
		document.getElementById('slika3').style.display="none";
	}
	
	if(imep){
		ime.focus();
	}
	else if(maill){
		mail.focus();
	}
	else if(por){
		poruka.focus();
	}
	
	if(validna) {
	var ajax = new XMLHttpRequest();
	//var mjesto = document.getElementById('mjestoo').value;
	//mjesto = encodeURIComponent(mjesto);
	//var mjesto1 = document.getElementById('mjestoo');
	//var pbroj = document.getElementById('pbr').value;
	//pbroj = encodeURIComponent(pbroj);
	//var pbroj1 = document.getElementById('pbr');
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200){
			var odgovor = JSON.parse(ajax.responseText);
			alert(odgovor.odgovor);
			ime.value = '';
			mail.value = '';
			poruka.value = '';
			/*if(odgovor.greska == "Nepostojeće mjesto"){
				mjesto1.style.borderColor = "red";
				mjesto1.focus();
				document.getElementById('slika4').style.display = "inline-block";
				document.getElementById('obaveznoM').innerHTML = odgovor.greska;
				document.getElementById('obaveznoM').style.display = "inline";
			}
			else if(odgovor.greska == "Poštanski broj ne odgovara mjestu"){
				mjesto1.style.borderColor = "red";
				mjesto1.focus();
				document.getElementById('slika4').style.display = "inline-block";
				document.getElementById('obaveznoM').innerHTML = odgovor.greska;
				document.getElementById('obaveznoM').style.display = "inline";
			}
			else{
				mjesto1.style.borderColor = "";
				document.getElementById('obaveznoM').style.display="none";
				document.getElementById('slika4').style.display="none";
			}
			
			if(odgovor.greska == "Nepostojeći poštanski broj"){
				pbroj1.style.borderColor = "red";
				pbroj1.focus();
				document.getElementById('slika5').style.display = "inline-block";
				document.getElementById('obaveznoPB').innerHTML = odgovor.greska;
				document.getElementById('obaveznoPB').style.display = "inline";
			}
			else{
				pbroj1.style.borderColor = "";
				document.getElementById('obaveznoPB').style.display="none";
				document.getElementById('slika5').style.display="none";
			}*/
		}
		if (ajax.readyState == 4 && ajax.status == 404) {
			document.getElementById('mjestoo').innerHTML = "Greska: nepoznat URL";
		}
	}
	//ajax.open("GET", "http://zamger.etf.unsa.ba/wt/postanskiBroj.php?mjesto=" + mjesto + "&postanskiBroj=" + pbroj, true);
	ajax.open("POST", "php/servisiMail.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("ime=" + ime1 + "&eemail=" + mail1 + "&tipPoruke=" + tip1 + "&upit=" + poruka1);
	}
}