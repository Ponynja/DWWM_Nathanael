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
define( 'DB_HOST', 'serverWordpress:3308' );

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
define( 'AUTH_KEY',         'NeqGO~F_c3n=Nb@#hod0;cjtv-a:N)qk(cxgiK?;&>H1%!<QJl).G#k`;OBS[^]3' );
define( 'SECURE_AUTH_KEY',  'QS8Omw-}^*IG^<>(+pz|Ey!lALDEb2*2V8<uSb&bLwie#fiNvbG1hQfE4nvj^i.Q' );
define( 'LOGGED_IN_KEY',    'JlLkOh,H,eEc[h``Tg>?^b=]X*32z&p ,+BJ+B6*{1<52R09cPD!E/[Q6joe4N%.' );
define( 'NONCE_KEY',        'u+~6OU6aXl}D_v0-/Vu!>e4gHiGc.JS`0f0WY2;U6~`U;,&=g?ut6}#Es?!H1$ER' );
define( 'AUTH_SALT',        '`u)|KzV(pvC:j45{DP@h1y}5~=#%m4})KacD`3SwoPr)Mo/ NZ,9WmfKOjRx^ wO' );
define( 'SECURE_AUTH_SALT', 'e7Kc 9-Qohiq[m*ub|0i_+!4+w(6;T<t&iaBl*{)d AfFd&?Fw4g&Z9u$RCH#~]1' );
define( 'LOGGED_IN_SALT',   'OX[8[kr  %y`-xu#Sf8CBc4H@;&/^5fV:Axd}&9&;Q)lxGx?^$^gIw{V?K=G!IK6' );
define( 'NONCE_SALT',       'coDrg|#$fbsSNKW-rkv+@3ozr:m&;h.twT<DNo3Gk+frX@sXU/la]42LEGv:4g1M' );
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
