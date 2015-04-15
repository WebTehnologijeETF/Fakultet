function kontaktValidacija(){
	var ime = document.getElementById('ime');
	var mail = document.getElementById('eemail');
	var poruka = document.getElementById('upit');
	
	var validna = true;
	var imep = false;
	var maill = false;
	var por = false;
	
	var imePrezime = /^([A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?[\s][A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?)+$/;
	var mailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;	
	
	if(!imePrezime.test(ime.value)){
		ime.style.borderColor = "red";
		validna = false;
		imep = true;
		document.getElementById('obavezno').style.display="inline";
	}
	else{
		ime.style.borderColor = "";
		imep = false;
		document.getElementById('obavezno').style.display="none";
	}
	
	if(!mailRegex.test(mail.value)){
		mail.style.borderColor = "red";
		validna = false;
		maill = true;
		document.getElementById('obaveznoo').style.display="inline";
	}
	else{
		mail.style.borderColor = "";
		maill = false;
		document.getElementById('obaveznoo').style.display="none";
	}
	
	if(poruka.value == null || poruka.value == '' || poruka.value.length < 5){
		poruka.style.borderColor = "red";
		validna = false;
		por = true;
		document.getElementById('poruka').style.display="inline";
	}
	else{
		poruka.style.borderColor = "";
		por = false;
		document.getElementById('poruka').style.display="none";
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
	
	return validna;
}