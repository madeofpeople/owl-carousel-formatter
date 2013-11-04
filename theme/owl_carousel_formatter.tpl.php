<?php
/**
 * @file
 * Template file for the owl-carousel-formatter
 */

/**
 *  @todo see if there's a way to get breakpoints
 * make owl-carrousel options available through drupal.settings
 * $data['alt']
 * $data['title']
 */

?>
<h1>OWL CAROUSEL</h1>
<div class="owl-carousel-formatter carousel">
      <?php foreach ($images as $id => $data): ?>
        <div id="<?php print $data['hash_id']; ?>">
          <?php print $data['image']; ?>
        </div>
      <?php endforeach; ?>
  </div>
</div>
