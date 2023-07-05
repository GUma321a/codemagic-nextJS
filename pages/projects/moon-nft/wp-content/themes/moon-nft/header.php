<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package moon-nft
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NFT MOON - The metaverse blockchain</title>
  <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico" />
  <!-- Styles -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/libs.min.css" />
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.min.css" />
	<?php wp_head(); ?>
</head>

<div class="body__wrapper">
    <header class="header">
    <div class="container-fluid">
      <div class="header__navbar">
          <div class="header__logo">
            <?php if ( get_field( 'header__logo-link' ) ) : ?>
            <a href="#hero" class="header__logo-link"><img src="<?php the_field( 'header__logo-link' ); ?>" alt="Logo"/></a>
            <?php endif ?>
          </div>
          <nav class="header__menu">
            <?php if ( have_rows( 'header__menu-list' ) ) : ?>
	            <?php while ( have_rows( 'header__menu-list' ) ) : the_row(); ?>
            <ul class="header__menu-list">
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-1' ); ?>"><?php the_sub_field( 'header__menu-list-item-1' ); ?></a></li>
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-2' ); ?>"><?php the_sub_field( 'header__menu-list-item-2' ); ?></a></li>
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-3' ); ?>"><?php the_sub_field( 'header__menu-list-item-3' ); ?></a></li>
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-4' ); ?>"><?php the_sub_field( 'header__menu-list-item-4' ); ?></a></li>
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-5' ); ?>"><?php the_sub_field( 'header__menu-list-item-5' ); ?></a></li>
              <li class="header__menu-list-item"><a class="header__menu-list-link" href="<?php the_sub_field( 'header__menu-list-link-6' ); ?>"><?php the_sub_field( 'header__menu-list-item-6' ); ?></a></li>
              <li class="header__menu-list-item dropdown">
                <a class="header__menu-list-link dropbtn" href="<?php the_sub_field( 'header__menu-list-link-7' ); ?>"><?php the_sub_field( 'header__menu-list-item-7' ); ?></a>
                <?php if ( have_rows( 'header__menu-list-item-dropdown' ) ) : ?>
			            <?php while ( have_rows( 'header__menu-list-item-dropdown' ) ) : the_row(); ?>
                <div class="dropdown-content">
                  <a href="<?php the_sub_field( 'dropdown-content-link-1' ); ?>"><?php the_sub_field( 'dropdown-content-1' ); ?></a>
                  <a href="<?php the_sub_field( 'dropdown-content-link-2' ); ?>"><?php the_sub_field( 'dropdown-content-2' ); ?></a>
                  <a href="<?php the_sub_field( 'dropdown-content-link-3' ); ?>"><?php the_sub_field( 'dropdown-content-3' ); ?></a>
                </div>
                  <?php endwhile; ?>
		            <?php endif; ?>
              </li>
            </ul>
              <?php endwhile; ?>
            <?php endif; ?>
          </nav>

          <?php if ( get_field( 'burger' ) ) : ?>
          <div class="burger"><img src="<?php the_field( 'burger' ); ?>" alt=""></div>
          <?php endif ?>
      </div>
    </div>
  </header>
