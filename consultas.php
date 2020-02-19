<?php
$toEmail = "admin@phppot_samples.com";

$mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";

$subject = "CONSULTA ENVIADA DESDE LA PAGINA WEB DE ".$_POST["name"];

if(mail($toEmail, $subject, $_POST["message"], $mailHeaders)) 
{
  print "<p class='success'>Contact Mail Sent.</p>";
} else {
  print "<p class='Error'>Problem in Sending Mail.</p>";
}
?>