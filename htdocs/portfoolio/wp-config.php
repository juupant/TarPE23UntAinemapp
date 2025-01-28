<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'd132390sd586797' );

/** Database username */
define( 'DB_USER', 'd132390sa534134' );

/** Database password */
define( 'DB_PASSWORD', 'kpsKMD2EFJu938548' );

/** Database hostname */
define( 'DB_HOST', 'd132390.mysql.zonevs.eu' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define('AUTH_KEY',         'WPktcMIUt2VqvSfOPb4RWyF0nLO53mCCPFLDlvqUNHnhJCqz4t0zGVVoxF1W1fB5');
define('SECURE_AUTH_KEY',  'xl4FnKLYdP6eAE25taUjKFwi3siHfv6YE5lqNq27OyiAUQCUcJpArDxONPN2gE4B');
define('LOGGED_IN_KEY',    'yYlgLNLsUCUCbOsxuYZNUvEcEk9q1SyWLbHzyK47IGhWF3k1MQ1ak4JjaTXlYbCS');
define('NONCE_KEY',        'xvbW78xzI2xBoFIdgzddvfQ4Xebwi3Oy9OMH71UBdZQSB2v1NakprgbvXGoCBSfu');
define('AUTH_SALT',        'M5e7mg6AeK1MUHvjlizZzhJvw4k56SKwf72dR3vHodaIYRocxXtVF8YmyucVw3Kp');
define('SECURE_AUTH_SALT', 'jvOeVwLBUOH2kUVCxg1YEQlBENmhgEFL68QDhoOi2Ju1VhOLEmijgurZDLYXRzRm');
define('LOGGED_IN_SALT',   'ujgtSuvItFC6RZWVZah3s7nQ7je4akMzP3EEo4XE26yiUcYaNvodFmmqMOlLy4ba');
define('NONCE_SALT',       'UOMfvGpsJOaJ7LVjNsh8E6ymUoqZJGMqbDAU5smDBAoyG9ro2Rb1TK4TeKmggGXI');

/**
 * Other customizations.
 */
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'fuke_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
define( 'DOMAIN_CURRENT_SITE', 'alanmarkusunt23.thkit.ee' );
define( 'PATH_CURRENT_SITE', '/portfoolio/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
