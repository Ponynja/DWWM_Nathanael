<?php
//on inclu la definition du widget
include_once plugin_dir_path(__FILE__) . '/livredorWidget.php';
class LivreDorClass
{
    public function __construct()
    {
// on déclare le widget
        add_action('widgets_init', function () {register_widget('LivreDorWidget');});
        add_action('wp_enqueue_scripts', array($this, 'persoCSS'), 15);
        add_action('wp_loaded', array($this, 'save_comm'));
        add_action('admin_menu', array($this, 'add_admin_menu'), 20);
        add_action('admin_init', array($this, 'register_settings'));
    }

    public function persoCSS()
    {
        wp_enqueue_style('Livredorcss', plugins_url('livredor/design.css'));
    }

    public static function install()
    { //méthode déclenchée à l'activation du plug-in
        global $wpdb;
        $wpdb->query("CREATE TABLE IF NOT EXISTS {$wpdb->prefix}livredor (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) NOT NULL, message VARCHAR(100) NOT NULL, datemessage DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);");
    }

    public static function uninstall()
    { //méthode déclenchée à la suppression du module
        global $wpdb;
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}livredor;");
    }

    public function save_comm()
    {
        // var_dump($_POST);
        if (isset($_POST['livredor_message']) && !empty($_POST['livredor_message']) && isset($_POST['livredor_name']) && !empty($_POST['livredor_name'])) {
            global $wpdb;
            $name = $_POST['livredor_name'];
            $message = $_POST['livredor_message'];

            $row = $wpdb->get_row("SELECT * FROM {$wpdb->prefix}livredor WHERE message = '$message' AND name='$name'");

            if (is_null($row)) {
                $wpdb->insert("{$wpdb->prefix}livredor", array('message' => $message,'name'=> $name));

            }

        }
    }

    public function add_admin_menu()
    { //on ajoute une page dans le menu administrateur
        add_menu_page('Livre d\'Or', 'Livre d\'Or Plugin', 'manage_options',

            'livredor', array($this, 'menu_html'));

    }
    public function menu_html()
    {
        echo '<h1>' . get_admin_page_title() . '</h1>';?>
        <form method="post" action="options.php">
            <?php settings_fields('livredor_settings')?>
            <label>Vitesse de défilement (ms)</label>
            <input type="number" name="livredor_vitesse" value="<?php echo get_option("livredor_vitesse") ?>"/>

            <?php submit_button();?>
        </form>
        <?php
    }

    public function register_settings()
    {
        register_setting('livredor_settings', 'livredor_vitesse');
    }
}
