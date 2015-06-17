<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

function rest_get($request, $data) { }

//izmjena novosti - admin
function rest_post($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	$id = $data['id'];
	$autor = $data['autor'];
	$naslov = $data['naslov'];
	$slika = $data['slika'];
	$tekst = $data['tekst'];
	$detaljnije = $data['detaljnije'];
	
	/*$id = htmlentities($_POST['id'], ENT_QUOTES);
	$autor = htmlentities($_POST['autor'], ENT_QUOTES);
	$naslov = htmlentities($_POST['naslov'], ENT_QUOTES);
	$slika = htmlentities($_POST['slika'], ENT_QUOTES);
	$tekst = htmlentities($_POST['tekst'], ENT_QUOTES);
	$detaljnije = htmlentities($_POST['detaljnije'], ENT_QUOTES);*/
	
	//$novost = $veza->query("update novost set naslov=".$naslov.",autor='neki autor',tekst=".$tekst.",detaljnije=".$detaljnije.",slika=".$slika." where id=".$id);
	//$novost = $veza->query("update novost set naslov='neki naslov' where id=6");
	$novost = $veza->prepare("update novost set naslov = :naslov, autor = :autor, tekst = :tekst, detaljnije = :detaljnije, slika = :slika where id = :id");
	$novost->bindParam(':id', $id);
	$novost->bindParam(':naslov', $naslov);
	$novost->bindParam(':autor', $autor);
	$novost->bindParam(':tekst', $tekst);
	$novost->bindParam(':detaljnije', $detaljnije);
	$novost->bindParam(':slika', $slika);
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