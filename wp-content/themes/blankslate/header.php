<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( ' | ', true, 'right' ); ?></title>
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/scripts/amarks.js"></script>
<link href="http://allfont.net/css/?fonts=arial-narrow" rel="stylesheet" type="text/css" />
<?php wp_head(); ?>
<link rel="icon" href="http://annabethmarks.info/wp-content/uploads/2015/06/favicon-1.ico" type="image/x-icon" />
<link rel="shortcut icon" href="http://annabethmarks.info/wp-content/uploads/2015/06/favicon-1.ico" type="image/x-icon" /
</head>
<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
<a id="contact-link-mobile" class="contact-link" href="mailto:abmarks@gmail.com">contact</a>
<header id="header" role="banner">
<section id="branding">
<div id="site-title"><?php if ( ! is_singular() ) { echo '<h1>'; } ?><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( get_bloginfo( 'name' ), 'blankslate' ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a><?php if ( ! is_singular() ) { echo '</h1>'; } ?></div>
<div id="recent-menu-full">
    <div id="recent-title">Recent:</div>
    <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
</div>
<div id="recent-menu-small">
    <div id="recent-title"><span>Recent</span><img src="<?php echo esc_url( home_url( '/' ));?>wp-content/themes/blankslate/assets/dropdown_arrow.png"/></div>
    <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
</div>
<a id="contact-link-desktop" class="contact-link" href="mailto:abmarks@gmail.com">contact</a>
</section>
<?php get_sidebar(); ?>
</header>
<div id="mobile-clear-bar"></div>
<div id="container">
