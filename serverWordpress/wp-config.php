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
define( 'AUTH_KEY',         '<),JHG;Y~@FvP<jmp@BBn]BP[]u9y3#{ePjpkWdAYL3|1=Y]cAN3z;%Nr7yBE5UA' );
define( 'SECURE_AUTH_KEY',  'f#0Z2DuG9M/CJ|yA4-Z->zN%!P^lf|W R*ZGzWmr8p0@@o<oO%|ZL>oNhXmYhwzn' );
define( 'LOGGED_IN_KEY',    'D5 ?$38Xbn?=9JU79c<0_+W HMVfjI-85k;LnHeDvjG~3z!}SU}`WCj5A:Wa|XK4' );
define( 'NONCE_KEY',        ')Q/1*tQnu{|3IKu!h!^9i!VE6LyjZqT8L_Ta,<JS%`9;j[z3wHn`$906|v$nr,nu' );
define( 'AUTH_SALT',        'D-{}b;i2b6wpp2:)E@lnIQ?(FD(:NDYRrfnQ!c0d)85K}2rFi:lgRM-j{t>&#cV#' );
define( 'SECURE_AUTH_SALT', '2iHX V_?FpjMC3r@,deNH%(uegdq],]4d%HKvYL]m}^XzEQ-e>+cpA?Me*.RTRzZ' );
define( 'LOGGED_IN_SALT',   'qNe}),-S,qQ-1c%i3t-P]Nj1[@_h<w)F<ACv%iIsMvEg@{#&W`x/)r/yvMR3N0}^' );
define( 'NONCE_SALT',       '_:|){& E3q`~C-1m Y?+i%NXH1eVZxa5.`CaqeyCM|K|`%|duY}t_d+FzrP<:Ax,' );
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
