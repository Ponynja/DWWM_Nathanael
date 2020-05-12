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


        <div id="livredor">

            <h1 class="livreDorWidget">Livre d'Or</h1>

            <div id="livredorMessages">

                <?php

                global $wpdb;
                $rows = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}livredor");

                foreach ($rows as $row) {

                    $date = date('d/m/Y', strtotime($row->datemessage));

                    echo 
                    
                    '<div class="livredorMessage">
                    
                        <div class="date">'.$date .'</div>
                        <div class="message">'.stripslashes($row->message) .'</div>
                        <div class="name">'.$row->name .'</div>

                    
                    </div>';
                    
                }

                ?>

            </div>

            <h2>Laissez un message et signez-le:</h2>

            <div id="livredorNouveauMessage">

                <form action="" method="post">
                    <p>

                        <label for="livredor_message">Votre message :</label>
                        <textarea name="livredor_message" id="livredor_message" cols="30" rows="10"></textarea>
                        <label for="livredor_name">Votre nom :</label>
                        <input id="livredor_name" name="livredor_name" type="texte"/>

                    </p>
                    <input type="submit"/>
                 </form>

            </div>

        </div>

        <!-- Script de défilement des messages-->

        <script>

            var vitesseDefil = <?php echo get_option('livredor_vitesse', 5000);?>;
            var messages = document.getElementsByClassName('livredorMessage');
            var nbmessages = messages.length;
            var curMessage = 0;

            hideOther(curMessage);

            function hideOther(curMessage){
                for(let i = 0; i<nbmessages; i++){

                    messages[i].style.animationDuration=vitesseDefil+"ms";

                    if(i != curMessage){
                        messages[i].style.display="none";
                    }else{
                        messages[i].style.display="flex";
                    }
                }
            }

            setInterval(function(){
                if(curMessage < nbmessages-1){
                    curMessage++;
                }else{
                    curMessage=0;
                }
                hideOther(curMessage);
            },vitesseDefil);

        </script>

        <?php

        echo $args['after_widget'];
    }
}