<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

//ucitavanje svih komentara na novost
function rest_get($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");

	$komentari = $veza->query("select id, vijest, autor, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme3, email from komentar where vijest=".$data['vijest']." order by vrijeme asc");
	if (!$komentari) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
	}
	
	$brKomentara = $veza->query("select count(*) from komentar where vijest=".$data['vijest']);
	$broj = $brKomentara->fetchColumn();
	if ($broj == 0)
		print "{ \"odgovor\": ".'"Nema komentara na ovu novost"'."}";
	else
		print "{ \"komentari\": ".json_encode($komentari->fetchAll())."}";
}

//dodavanje komentara
function rest_post($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	/*$vijest = htmlentities($_POST['idNovosti'], ENT_QUOTES);
	$autor = htmlentities($_POST['ime'], ENT_QUOTES);
	$email = htmlentities($_POST['eemail'], ENT_QUOTES);
	$tekst = htmlentities($_POST['tekst'], ENT_QUOTES);*/

	$vijest = $data['vijest'];
	$autor = $data['autor'];
	$email = $data['email'];
	$tekst = $data['tekst'];
	
	$komentar = $veza->prepare("insert into komentar set vijest = :vijest, autor = :autor, tekst = :tekst, email = :email");
	$komentar->bindParam(':vijest', $vijest);
	$komentar->bindParam(':autor', $autor);
	$komentar->bindParam(':email', $email);
	$komentar->bindParam(':tekst', $tekst);
	$komentar->execute();
}

function rest_delete($request) {}
function rest_put($request, $data) { }
function rest_error($request) { }

$method  = $_SERVER['REQUEST_METHOD'];
$request = $_SERVER['REQUEST_URI'];

switch($method) {
    case 'PUT':
        parse_str(file_get_contents('php://input'), $put_vars);
        zag(); $data = $put_vars; rest_put($request, $data); break;
    case 'POST':
        zag(); $data = $_POST; rest_post($request, $data); break;
    case 'GET':
        zag(); $data = $_GET; rest_get($request, $data); break;
    case 'DELETE':
        zag(); rest_delete($request); break;
    default:
        header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
        rest_error($request); break;
}
?>