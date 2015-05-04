function zavrsniPregled()
{		
	var ajax = new XMLHttpRequest();
	var tabela;
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			var proizvodi = JSON.parse(ajax.responseText); 
			tabela="<table class='tabela_program'>";
			tabela+="<caption>";
			tabela+="Završni radovi";
			tabela+="</caption>";
			tabela+="<th>";
			tabela+="Naziv";
			tabela+="</th>";
			tabela+="<th>";
			tabela+="Opis";
			tabela+="</th>";
			tabela+="<th>";
			tabela+="Slika";
			tabela+="</th>";
			tabela+="<th>";
			tabela+="";
			tabela+="</th>";
			
			for(i=0; i<proizvodi.length; i++){
				tabela+="<tr>";
				tabela+="<td>";
				tabela+=proizvodi[i].naziv;
				tabela+="</td>";
				tabela+="<td>";
				tabela+=proizvodi[i].opis;
				tabela+="</td>";
				tabela+="<td>";
				tabela+=proizvodi[i].slika;
				tabela+="</td>";
				tabela+="<td>";
				tabela+="<input type='button' value='Uredi' onclick='zavrsniUredi(" +proizvodi[i].id + ")'>";
				tabela+="<input type='button' value='Izbriši' onclick='zavrsniBrisi(" + proizvodi[i].id + ")'>";
				tabela+="</td>";
				tabela+="</tr>";
			}
			tabela+="</table>";
			document.getElementById('tabela_zavrsni').innerHTML=tabela;
		}
	}
			
	ajax.open("GET", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15626", true);
	ajax.send();
}