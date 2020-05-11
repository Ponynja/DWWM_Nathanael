<?php
/*
Plugin Name: Hello World
Description: ecrit Hello World
Author: Martine
Version: 1.0
 */
class HelloWorld_Plugin
{
    public function __construct()
    {
        include_once plugin_dir_path(__FILE__) . '/helloClass.php';
        new HelloClass();
        register_activation_hook(__FILE__, array('helloclass', 'install'));
        register_deactivation_hook(__FILE__, array('helloclass', 'uninstall'));
        
    }
}
new HelloWorld_Plugin();
