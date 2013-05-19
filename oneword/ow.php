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
	echo "<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>";

	
}

function my_js(){
	echo "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>";
	echo "<script src='/wp-content/plugins/oneword/ow.js'></script>";
	echo '<script>$(document).ready(function(){$(".entry").oneword()})</script>';
}

function oneword_menu() {
	// Add the new admin menu and page and save the returned hook suffix
	$hook_suffix = add_options_page('One Word Options', 'One Word', 'manage_options', 'my-unique-identifier', 'oneword_options');
	// Use the hook suffix to compose the hook and register an action executed when plugin's options page is loaded
	add_action( 'load-' . $hook_suffix , 'oneword_load_function' );
}

function oneword_load_function() {
	// Current admin page is the options page for our plugin, so do not display the notice
	// (remove the action responsible for this)
	remove_action( 'admin_notices', 'my_plugin_admin_notices' );
}


function oneword_options() {
	if (!current_user_can('manage_options'))  {
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}
	echo '<div class="wrap">';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	echo '</div>';
}

//add_action('admin_menu', 'oneword_menu');
// Here you can check if plugin is configured (e.g. check if some option is set). If not, add new hook. 
// In this example hook is always added.
//add_action( 'admin_notices', 'my_plugin_admin_notices' );
add_action( 'wp_head', 'my_header_content' ); // 'my_header_content' here is the name of the function above
add_action( 'wp_footer', 'my_js' ); // 'my_header_content' here is the name of the function above


?>
