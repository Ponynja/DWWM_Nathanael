<?php
/*
Plugin Name: Random
Plugin URI: 
Description: Affiche un nombre aléatoire.
Author: Nathanaël Montiel
Version: 1.0.0
Author URI: www.nathanael-montiel.fr
*/

function get_random() {
	/** These are the lyrics to Hello Dolly */
	return random_int(0,1000);
}

// This just echoes the chosen line, we'll position it later.
function random() {
	echo get_random();	
}

// Now we set that function up to execute when the admin_notices action is called.
add_action( 'admin_notices', 'random' );

