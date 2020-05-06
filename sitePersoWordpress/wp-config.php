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
define( 'DB_NAME', "wordpress" );


/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', "wordpress" );


/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', "wordpress" );


/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', "localhost:3308" );


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
define( 'AUTH_KEY',         'dPHT0|E8=*<!*|(5?`&tF]w]CZlM7Xf0F.,iw2 u^O~w:{!~i6_jkfaW]PyWptm=' );

define( 'SECURE_AUTH_KEY',  'e!j=+Z`(gS*S:L/!T>r{nP~ugOVD@T98ta/.CdJ$r6$m6I)$2T|4n9ULQ2V,:KJG' );

define( 'LOGGED_IN_KEY',    ' q5?f(A/yy<SK~Vz{x cZa$3ncp5g?/3tBLbH hoS* `*`Tc*Lz%-1xU8T&l24Jv' );

define( 'NONCE_KEY',        'Pi2499`K3.2>Zh%$=@nVo=t;8?u8|d-e&7hP%`M5:lPto(`|NHb~a*d%]3<vtww>' );

define( 'AUTH_SALT',        'txW{,ubE4+%3>[D,-o$k5fEXB1lvmg898XDJMeNnr}|6mces)Kv Kb<xtC((OJUR' );

define( 'SECURE_AUTH_SALT', '$VDhw)VXw|CtYK]0jKwXm~88=*pBL!f!@|CaIO/uIF0sx}z42J<r|lQ-lTz(E9KK' );

define( 'LOGGED_IN_SALT',   'AsY8}noaa:Ae/|tJ>=;pHQvpi{2,z3}c.e(>a<gJ)9?`2<vJBTam;XOWR0%kj:1[' );

define( 'NONCE_SALT',       '5v,)fZB>9OMSLE.;:fBnLC j!mn%/)6q*`G%>-u&tIP|`7|u2NG_Bt3Q+<Vq6t;f' );

/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_perso_';


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
