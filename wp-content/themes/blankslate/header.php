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
<header id="header" role="banner">
<section id="branding">
<div id="site-title"><?php if ( ! is_singular() ) { echo '<h1>'; } ?><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( get_bloginfo( 'name' ), 'blankslate' ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a><?php if ( ! is_singular() ) { echo '</h1>'; } ?></div>
<div id="site-description"><?php bloginfo( 'description' ); ?></div>
</section>
<?php get_sidebar(); ?>
<div id="about"></div>
<div class="info">
    <span>Installation View</span> 
</div>
<img class="next" src="http://www.annabethmarks.info/wp-content/uploads/2015/05/1433112317_arrows_slim_right-e1433242906425.png"/>
</header>
<div id="container">
