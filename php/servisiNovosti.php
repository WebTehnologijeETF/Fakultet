<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

//ucitavanje svih novosti
function rest_get($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	$rezultat = $veza->query("select n.id, n.naslov, n.tekst, n.autor, UNIX_TIMESTAMP(n.vrijeme) vrijeme2, n.detaljnije, n.slika, count(k.id) as brojKomentara from novost n left join komentar k on k.vijest = n.id group by n.id order by n.vrijeme desc");
	if (!$rezultat) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
	}

	print "{ \"novosti\": ".json_encode($rezultat->fetchAll()) . "}";
}

//dodavanje novosti - admin
function rest_post($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	$autorN = htmlentities($_POST['autor'], ENT_QUOTES);
	$naslovN = htmlentities($_POST['naslov'], ENT_QUOTES);
	$slikaN = htmlentities($_POST['slika'], ENT_QUOTES);
	$tekstN = htmlentities($_POST['tekst'], ENT_QUOTES);
	$detaljnoN = htmlentities($_POST['detaljnije'], ENT_QUOTES);

	$novost = $veza->prepare("insert into novost set naslov = :naslovN, autor = :autorN, tekst = :tekstN, detaljnije = :detaljnijeN, slika = :slikaN");
	$novost->bindParam(':naslovN', $naslovN);
	$novost->bindParam(':autorN', $autorN);
	$novost->bindParam(':tekstN', $tekstN);
	$novost->bindParam(':detaljnijeN', $detaljnoN);
	$novost->bindParam(':slikaN', $slikaN);
	$novost->execute();

}

function rest_delete($request, $data) { }
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