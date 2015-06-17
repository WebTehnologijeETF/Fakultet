<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

function rest_get($request, $data) { }

//slanje maila - kontakt
function rest_post($request, $data) { 
	
	$imePrezime = htmlentities($_POST['ime'], ENT_QUOTES);
	$eemail = htmlentities($_POST['eemail'], ENT_QUOTES);
	$tip = htmlentities($_POST['tipPoruke'], ENT_QUOTES);
	$poruka = htmlentities($_POST['upit'], ENT_QUOTES); 

	ini_set("SMTP", "webmail.etf.unsa.ba");
	ini_set("smtp_port", "25");
	ini_set("sendmail_from", "dahmic1@etf.unsa.ba");
	$headers = "From: ".$eemail.PHP_EOL;
	$headers .= "Cc: iprazina1@etf.unsa.ba".PHP_EOL; 
	$headers .= "Content-Type: text/html; charset=utf-8".PHP_EOL;
	$subject = "Kontakt - ".$tip.PHP_EOL; 
	$message = $poruka." <br><br>".$imePrezime;
	
	mail("dahmic1@etf.unsa.ba", $subject, $message, $headers);
	
	print "{ \"odgovor\": ".'"Mail poslan!"'."}";
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