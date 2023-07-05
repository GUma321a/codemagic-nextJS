<?php
/*
Template Name: Глваная страничка
*/
get_header();
?>

<!-- Здесь html/php код шаблона -->

<main class="main">
      <section class="hero" id="hero">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__info">
              <h1 class="hero__info-title">
                <?php the_field( 'hero__info-title' ); ?>
              </h1>
              <p class="hero__info-description">
                <?php the_field( 'hero__info-description' ); ?>
              </p>
            </div>
            <?php if ( have_rows( 'hero__box' ) ) : ?>
	            <?php while ( have_rows( 'hero__box' ) ) : the_row(); ?>
            <div class="hero__box">
              <p class="hero__box-text">
                <?php the_sub_field( 'hero__box-text' ); ?>
              </p>
              <?php if ( have_rows( 'hero__box-inner' ) ) : ?>
			          <?php while ( have_rows( 'hero__box-inner' ) ) : the_row(); ?>
              <div class="hero__box-inner">
                <img alt="box-moon" class="hero__box-moon" src="<?php the_sub_field( 'hero__box-moon' ); ?>">
                <a href="<?php the_sub_field( 'hero__box-link' ); ?>" class="hero__box-link" ><?php the_sub_field( 'hero__box-link-text' ); ?></a>
                  <style>
                  .hero__box-link{
                    background: <?php the_sub_field( 'hero__box-link-color' ); ?>;
                  }
                  .hero__box-link:focus, 
                  .hero__box-link:hover {
                    background: <?php the_sub_field( 'hero__box-link-hover' ); ?>;
                    -webkit-box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'hero__box-link-hover' ); ?>;
                    box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'hero__box-link-hover' ); ?>;
                  }
                </style>
              </div>
                <?php endwhile; ?>
		          <?php endif; ?>
            
            </div>
              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </section>


      <div class="total">A TOTAL OF <span><?php the_field( 'total' ); ?></span> CERTIFICATES WILL BE SOLD</div>


      <section class="what">
        <div class="container">
          <h3 class="what__title"><?php the_field( 'what__title' ); ?></h3>
        </div>
        <div class="swiper">
         
          <div class="what__wrapper swiper-wrapper">
             <?php if ( have_rows( 'what__wrapper' ) ) : ?>
              <?php while ( have_rows( 'what__wrapper' ) ) : the_row(); ?>
            <div class="what__item swiper-slide">
              <h4 class="what__item-title">
                <?php the_sub_field( 'what__item-title' ); ?>
              </h4>
              <div class="what__item-inner" data-simplebar data-simplebar-auto-hide="false">
                <p class="what__item-text">
                  <?php the_sub_field( 'what__item-text' ); ?>
                </p>
              </div>
            </div>
              <?php endwhile; ?>
          <?php else : ?>
                          <?php // no rows found ?>
          <?php endif; ?>
        

            
          </div>
         
          <div class="swiper-pagination"></div>
      
          </div>
    
        </div>
      </section>


      <section class="faq">
        <div class="container">
          <?php if ( have_rows( 'faq__wrapper' ) ) : ?>
	          <?php while ( have_rows( 'faq__wrapper' ) ) : the_row(); ?>
          <div class="faq__wrapper">
            <div class="faq__image">
              <?php if ( get_sub_field( 'faq__image' ) ) : ?>
              <img src="<?php the_sub_field( 'faq__image' ); ?>" alt="">
              <?php endif ?>
              <h3 class="faq__title"><?php the_sub_field( 'faq__title' ); ?></h3>
            </div>
              <?php endwhile; ?>
            <?php endif; ?>

            <div class="faq__accordion">
              <?php if ( have_rows( 'faq__accordion' ) ) : ?>
	              <?php while ( have_rows( 'faq__accordion' ) ) : the_row(); ?>
              <div class="faq__accordion-item">
                <div class="faq__accordion-trigger">
                  <div class="faq__accordion-trigger-text">
                    <?php the_sub_field( 'faq__accordion-trigger' ); ?>
                  </div>
                </div>
                <div class="faq__accordion-content">
                  <div class="faq__accordion-content-text">
                    <p>
                      <?php the_sub_field( 'faq__accordion-content' ); ?>
                    </p>
                  </div>
                </div>
              </div>
              	<?php endwhile; ?>
              <?php else : ?>
              	<?php // no rows found ?>
              <?php endif; ?>
            
              
            </div>
          </div>
        </div>
      </section>


      <div class="global-background">
      <section class="types" id="types">
        <div class="container">
          <h3 class="types__title title"><?php the_field( 'types__title' ); ?></h3>
          <h4 class="types__subtitle"><span>&lt;&ensp;&lt;&ensp;&lt;&ensp;&lt;&ensp;</span><?php the_field( 'types__subtitle' ); ?><span>&ensp;&gt;&ensp;&gt;&ensp;&gt;&ensp;&gt;</span></h4>
          <div class="types__wrapper">

            <?php if ( have_rows( 'types__wrapper' ) ) : ?>
	            <?php while ( have_rows( 'types__wrapper' ) ) : the_row(); ?>
            <div class="types__item">
              <div class="types__item-image">
                <?php if ( get_sub_field( 'types__item-image' ) ) : ?>
                <img src="<?php the_sub_field( 'types__item-image' ); ?>" alt="" class="types__item-image-main">
                <?php endif ?>
                <?php if ( get_sub_field( 'types__item-image-phone' ) ) : ?>
                <img src="<?php the_sub_field( 'types__item-image-phone' ); ?>" alt="" class="types__item-image-phone">
                <?php endif ?>
              </div>
              <a href="<?php the_sub_field( 'types__item-link' ); ?>" class="types__item-link">&lt; <?php the_sub_field( 'types__item-link-text' ); ?> &gt;</a>
              <style>
                .types__item-link{
                  background: <?php the_sub_field( 'types__item-link-color' ); ?>;
                  -webkit-box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'types__item-link-color' ); ?>;
                  box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'types__item-link-color' ); ?>;
                }
                .types__item-link:focus, 
                .types__item-link:hover {
                  background: <?php the_sub_field( 'types__item-link-hover' ); ?>;
                  -webkit-box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'types__item-link-hover' ); ?>;
                  box-shadow: 0 2.81726px 10.5647px <?php the_sub_field( 'types__item-link-hover' ); ?>;
                }
              </style>
            </div>
              <?php endwhile; ?>
            <?php else : ?>
            	<?php // no rows found ?>
            <?php endif; ?>
            
          </div>
        </div>
      </section>


      <section class="about" id="about">
        <div class="container">
          <h3 class="about__title title"><?php the_field( 'about__title' ); ?></h3>
          <?php if ( have_rows( 'about__wrapper' ) ) : ?>
	          <?php while ( have_rows( 'about__wrapper' ) ) : the_row(); ?>
          <div class="about__wrapper">
            <div class="about__info">
              <div class="about__info-title">
                <p class="about__info-title--1"><?php the_sub_field( 'about__info-title-1' ); ?></p>
                <p class="about__info-title--2"><?php the_sub_field( 'about__info-title-2' ); ?></p>
              </div>
              <p class="about__info-text">
                <?php the_sub_field( 'about__info-text' ); ?>
              </p>
            </div>
            <div class="about__image">
            <?php if ( get_sub_field( 'about__image' ) ) : ?>
              <img src="<?php the_sub_field( 'about__image' ); ?>" alt="">
            <?php endif ?>
            </div>
          </div>
            <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </section>


      <section class="ownership">
        <div class="container">
          <h3 class="ownership__title title"><?php the_field( 'ownership__title' ); ?></h3>
          <?php if ( have_rows( 'ownership__wrapper' ) ) : ?>
	          <?php while ( have_rows( 'ownership__wrapper' ) ) : the_row(); ?>
          <div class="ownership__wrapper">
            <div class="ownership__info">
              <p class="ownership__info-title"><?php the_sub_field( 'ownership__info-title' ); ?></p>
              <p class="ownership__info-description">
                <?php the_sub_field( 'ownership__info-description' ); ?>
              </p>
            </div>
            <div class="ownership__image">
            <?php if ( get_sub_field( 'ownership__image' ) ) : ?>
              <img src="<?php the_sub_field( 'ownership__image' ); ?>" alt="">
            <?php endif ?>
            </div>
          </div>
          	<?php endwhile; ?>
          <?php endif; ?>
        </div>
      </section>


      <section class="exchange" id="exchange">
        <div class="container">
          <h3 class="exchange__title title"><?php the_field( 'exchange__title' ); ?></h3>
          <?php if ( have_rows( 'exchange__wrapper' ) ) : ?>
	          <?php while ( have_rows( 'exchange__wrapper' ) ) : the_row(); ?>
          <div class="exchange__wrapper">
            <div class="exchange__info">
              <p class="exchange__info-title">
                <?php the_sub_field( 'exchange__info-title' ); ?>
              </p>
              <p class="exchange__info-text">
                <?php the_sub_field( 'exchange__info-text' ); ?>
              </p>
            </div>
            <div class="exchange__image">
              <?php if ( get_sub_field( 'exchange__image' ) ) : ?>
                <img src="<?php the_sub_field( 'exchange__image' ); ?>" />
              <?php endif ?>
            </div>
          </div>
          	<?php endwhile; ?>
          <?php endif; ?>
        </div>
      </section>
    </div>


      <section class="links">
        <div class="container">
          <div class="links__wrapper">
            <?php if ( have_rows( 'links__list-1' ) ) : ?>
	            <?php while ( have_rows( 'links__list-1' ) ) : the_row(); ?>
            <div class="links__list--1">
              <a href="<?php the_sub_field( 'links__list-link-1' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-1' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-2' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-2' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-3' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-3' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-4' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-4' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-5' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-5' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-6' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-6' ); ?></a>
            </div>
              <?php endwhile; ?>
            <?php endif; ?>

            <?php if ( have_rows( 'links__list-2' ) ) : ?>
	            <?php while ( have_rows( 'links__list-2' ) ) : the_row(); ?>
            <div class="links__list--2">
              <a href="<?php the_sub_field( 'links__list-link-7' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-7' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-8' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-8' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-9' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-9' ); ?></a>
              <a href="<?php the_sub_field( 'links__list-link-10' ); ?>" class="links__list-link"><?php the_sub_field( 'links__list-text-10' ); ?></a>
            </div>
              <?php endwhile; ?>
            <?php endif; ?>

          </div>
        </div>
      </section>


      <section class="roadmap">
        <div class="container">
          <h3 class="roadmap__title"><?php the_field( 'roadmap__title' ); ?></h3>
          <p class="roadmap__description">
            <?php the_field( 'roadmap__description' ); ?>
          </p>
          <div class="roadmap__line"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/roadmap-line.svg" alt="line"></div>
          <?php if ( have_rows( 'roadmap__wrapper' ) ) : ?>
	          <?php while ( have_rows( 'roadmap__wrapper' ) ) : the_row(); ?>
          <div class="roadmap__wrapper">
            <?php if ( have_rows( 'roadmap__item' ) ) : ?>
			        <?php while ( have_rows( 'roadmap__item' ) ) : the_row(); ?>
            <div class="roadmap__item">
              <p class="roadmap__item-title"><?php the_sub_field( 'roadmap__item-title' ); ?></p>
              <p class="roadmap__item-text"><?php the_sub_field( 'roadmap__item-text' ); ?></p>
            </div>
              <?php endwhile; ?>
		        <?php else : ?>
			        <?php // no rows found ?>
		        <?php endif; ?>

            <?php if ( have_rows( 'roadmap__box' ) ) : ?>
			        <?php while ( have_rows( 'roadmap__box' ) ) : the_row(); ?>
            <div class="roadmap__box">
              <p class="roadmap__box-title"><?php the_sub_field( 'roadmap__box-title' ); ?></p>
              <p class="roadmap__box-text"><?php the_sub_field( 'roadmap__box-text' ); ?></p>
            </div>
              <?php endwhile; ?>
		        <?php else : ?>
			        <?php // no rows found ?>
		        <?php endif; ?>
          </div>
            <?php endwhile; ?>
          <?php endif; ?>

        </div>
      </section>
    </main>


<?php

get_footer();
