<?php
class LivreDorWidget extends WP_Widget
{
    public function __construct()
    {
        parent::__construct('livredor', 'Livre d\'Or', array('description' => 'Livre d\'Or dans lequel les visiteurs peuvent laisser un message'));
    }
    public function widget($args, $instance)
    {

        // formulaire afficher à l'écran pour l'utilisateur

        // on appel les méthodes standard au cas où un autre plug-in les aurait surchargées
        echo $args['before_widget'];
        echo $args['before_title'];
        echo apply_filters('widget_title', $instance['title']);
        echo $args['after_title'];
        // corps du widget
        ?>
        <h1 class="livreDorWidget">Livre d'Or</h1>

        <p class="livreDorWidget">Laissez un message et signez-le.</p>
        <form action="" method="post">
            <p>
            
            <label for="livredor_message">Votre commentaire :</label>
                <input id="livredor_message" name="livredor_message" type="texte"/>
                <label for="livredor_name">Votre nom :</label>
                <input id="livredor_name" name="livredor_name" type="texte"/>

            </p>
            <input type="submit"/>
        </form>
        
        <?php $couleur = get_option('livredor_couleur', 'black');?>
        
        <div id="test" style="color:<?php echo $couleur; ?>">
        <?php

        global $wpdb;
        $rows = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}livredor" );

        foreach($rows as $row){

            echo $row->datemessage.' - '.$row->name.': '.$row->message;
        }

        
        ?>

        </div>

        <?php

        echo $args['after_widget'];
    }
}