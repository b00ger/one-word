<?php
/**
 * @package Oneword
 * @version 0
 */
/*
Plugin Name: Oneword
Plugin URI: 
Description: Adds option to speed read posts
Author: Daniel Nguyen
Version: 0
Author URI: nuugen.com

*/

function my_header_content() {
	echo "<link rel='stylesheet' href='/wp-content/plugins/oneword/ow.css'/>";

	
}
function my_js(){
	echo "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>";
	echo "<script src='/wp-content/plugins/oneword/ow.js'></script>";
	echo '<script>$(document).ready(function(){$(".entry").oneword()})</script>';
}
add_action( 'wp_head', 'my_header_content' ); // 'my_header_content' here is the name of the function above
add_action( 'wp_footer', 'my_js' ); // 'my_header_content' here is the name of the function above


?>
