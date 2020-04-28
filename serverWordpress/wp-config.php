<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'wordpress' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'wordpress' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost:3308' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{f56mS{=}xXtY@lKhd7t1L,{l_{5VO_!>9~]GI=mdUp4d3iwXlZbl+%gb%# Dqyp' );
define( 'SECURE_AUTH_KEY',  '%S!>51gY`RTQ,}E[3*bp%#9Ctc,% c|=#4IQ0GhLX@o<.#iApIDMl3,[xK2_aQy`' );
define( 'LOGGED_IN_KEY',    'of[p[qG6l{[[4jbwF[6_??{|Z4`cP,9JGV~<7OcLd8ee]%mh(9$9jZogbH?:DJ8T' );
define( 'NONCE_KEY',        'G,apIP3MtUw&mcqQ1<~WBt%Z_Sao}[x-?F5>hFw}QBvo_@NKM@!g_bV|T`e^1rfs' );
define( 'AUTH_SALT',        ' RYP>AM[_:uUb@TkYB~1E)oaD@^Wjhb>u3cp]l(4A[8Y|cbU52lKRA?L@#RTPlHW' );
define( 'SECURE_AUTH_SALT', 'i7iH;P;-0N5XEynZqkf~SQ>TO=W>TD/?.]As!Q>pM5<Y~D)*$wgUCU7R9N>7IH*H' );
define( 'LOGGED_IN_SALT',   'uyk./_>IvEQn/1PB%KHOr<<#g7]J6uEKUeQ#ns<bs7c2HM$1^Pi(I#}TTlD|l)t]' );
define( 'NONCE_SALT',       'E5p2NVpYp.^,r(c#K0c3GoCt-U$+Gk$G6L?5E#_@M c`<zoaD`7Y:Y19Z fn_.wc' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
