<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'moon_nft' );

/** MySQL database username */
define( 'DB_USER', 'moon_admin' );

/** MySQL database password */
define( 'DB_PASSWORD', '7KVrbEzY' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iA<vGpajIX?tp*p/J0eiS5q+_b5&j)gP!,V<|g2_}n(zk3RRP$ISxODiP.>jnXY{' );
define( 'SECURE_AUTH_KEY',  'SFY7/+w*./V1_h+$fG=4=vD3Wt>o=.209w*FCnGTs#(xmZ!!gwZSk; Txo3=$D$J' );
define( 'LOGGED_IN_KEY',    'n:nqr)EEAFmNtC73Xf2i04[B`09gP. bz8^5fG_: cibpI4w<x*{Q<2#ei/vjJUK' );
define( 'NONCE_KEY',        '?6g5=W&cWbLm!TAlM`%J usu.:`f#`3iINA$?JD$_Bb`6=UqI{/0f]Ve!|}PyW 0' );
define( 'AUTH_SALT',        ' DnSht@Q46C{38zdsxvl@@n`zSq0yC.eJzuxE6Wl1z0xRIV0:JcD!27i+_<{|H!#' );
define( 'SECURE_AUTH_SALT', 'w4P|JQu}KZR0L<49&`slA}cn&k6kB(![JL7cwT*9+|+Yvj&_kc2TakFpO> .BvN0' );
define( 'LOGGED_IN_SALT',   'DSifa]#L$LGhb)jB;Kb|x#># _> :>oW:S)S!th0.H^B*506SqhXatPUv:0<B7Ol' );
define( 'NONCE_SALT',       '.Ku8,%eEfa;2d^)*?a))Zu[V%}N;T::KAaXp3dj=bx-kPsr>GF6fG+>X6KyL1._[' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
