/**
 * @package 	WordPress
 * @subpackage 	Bambini
 * @version		1.1.1
 * 
 * Theme Admin Settings Toggles Scripts
 * Created by CMSMasters
 * 
 */


(function ($) { 
	"use strict";
	
	/* General 'Header' Tab Fields Load */
	
	$('label[for="' + cmsmasters_theme_settings.shortname + '_navigation_title_link_bg"]').parents('tr').hide();
	$('label[for="' + cmsmasters_theme_settings.shortname + '_navigation_title_link_bg_hover"]').parents('tr').hide();
} )(jQuery);

