<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package moon-nft
 */

?>

<footer class="footer">
        <div class="container-fluid">
          <div class="footer__wrapper">
            <?php if ( get_field( 'header__logo-link' ) ) : ?>
            <div class="footer__logo"><img src="<?php the_field( 'header__logo-link' ); ?>" alt=""></div>
            <?php endif ?>
          </div>
        </div>
      </footer>
  </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"></script>
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/libs.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/main.min.js"></script>
    <script>
      AOS.init();
    </script>

<?php wp_footer(); ?>

</body>
</html>
