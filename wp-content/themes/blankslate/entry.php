<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php get_template_part( 'entry', ( is_archive() || is_search() ? 'summary' : 'content' ) ); ?>
<div class="post-info">
<span class="post-info-1"><?php $key="info-line-1"; echo get_post_meta($post->ID, $key, true); ?></span>
<span class="post-info-2"><?php $key="info-line-2"; echo get_post_meta($post->ID, $key, true); ?></span>
<span class="post-info-3"><?php $key="info-line-3"; echo get_post_meta($post->ID, $key, true); ?></span>
<span class="post-info-4"><?php $key="info-line-4"; echo get_post_meta($post->ID, $key, true); ?></span>
</div>
</article>
