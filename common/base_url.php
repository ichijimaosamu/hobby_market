<?php
if ($_SERVER["HTTP_HOST"] == 'localhost') {
	$base_url = 'http://localhost/site/template';
} else {
	$base_url = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"];
}
?>