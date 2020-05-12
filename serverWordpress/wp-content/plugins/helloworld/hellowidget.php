<?php
class hellowidget extends WP_Widget
{
    public function __construct()
    {
        parent::__construct('helloworld', 'Hello World', array('description' => 'Un plug-in qui écrit Hello World'));
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
        <h1 class="hellowidget">Hello World</h1>

        <p class="hellowidget">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, cupiditate dolore placeat praesentium in quidem laborum dignissimos sed sit alias maiores similique beatae veniam pariatur, soluta, dolorum fugit modi consequatur.</p>
        <form action="" method="post">
            <p>
                <label for="helloworld_name">Votre nom :</label>
                <input id="helloworld_name" name="helloworld_name" type="texte"/>

                <label for="helloworld_comm">Votre commentaire :</label>
                <input id="helloworld_comm" name="helloworld_comm" type="texte"/>
            </p>
            <input type="submit"/>
        </form>

        <?php

        $couleur = get_option('helloworld_couleur', 'white');
        ?>

            <div id="test" style="color:<?php echo $couleur; ?>">Hello World est un plug-in qui enregistre les commentaires en base de données</div>

        <?php

        echo $args['after_widget'];
    }
}