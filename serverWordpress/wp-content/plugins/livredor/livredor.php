<?php
/*
Plugin Name: Livre d'or
Description: Permet aux visiteur de laisser un message et affiche les messages
Author: Nathanaël Montiel
Version: 1.0
 */
class LivreDor_Plugin
{
    public function __construct()
    {
        include_once plugin_dir_path(__FILE__) . '/livredorClass.php';
        new LivreDorClass();
        register_activation_hook(__FILE__, array('livreDorClass', 'install'));
        register_deactivation_hook(__FILE__, array('livreDorClass', 'uninstall'));
        
    }
}
new LivreDor_Plugin();
