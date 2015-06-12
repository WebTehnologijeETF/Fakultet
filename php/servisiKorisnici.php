<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

//ucitavanje svih korisnika - admin
function rest_get($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	//pogledaj ovdje treba li prepare
	$rezultat = $veza->query("select username,email from korisnik");
	if (!$rezultat) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
	}

	print "{ \"korisnici\": ".json_encode($rezultat->fetchAll()) . "}";
}

//dodavanje korisnika - admin
function rest_post($request, $data) { 
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	$username = $data['username'];
	$sifra = $data['password'];
	$email = $data['email'];
	$tip = $data['tip'];
	$password = md5($sifra);

	$korisnik = $veza->prepare("insert into korisnik set username = :username, password = :password, email = :email, tip = :tip");
	$korisnik->bindParam(':username', $username);
	$korisnik->bindParam(':password', $password);
	$korisnik->bindParam(':email', $email);
	$korisnik->bindParam(':tip', $tip);
	$korisnik->execute();
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