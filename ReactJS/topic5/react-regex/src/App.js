import React from "react"
import axios from "axios"
import './App.css';

class App extends React.Component {


  constructor(){
    super()

    this.state={
      sert1:false,
      sert2:false,
      sert3:false,
      sert4:false,
      sert5:false,
      guc:0,
    }

    this.getEmail = this.getEmail.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    
  }

  getEmail(){
    // axios.get("https://yellowpages.az/Az/alphabetical-index/?letter-ru=%D0%90")
           let response = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport"
           content="width=device-width, initial-scale=1"><link media="all"
           href="https://yellowpages.az/wp-content/cache/autoptimize/css/autoptimize_6737753ea653316678c11be29f306bc2.css"
           rel="stylesheet" /><title>Yellowpages &raquo; Alfabetik indeks</title><meta
           name="description" content="Yellow pages refers to a telephone directory
           of businesses, organized by category, rather than alphabetically by
           business name and in which advertising is sold."><meta name="keywords"
           content="Yellow pages, telephone directory, businesses."><link
           href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900|Open+Sans:400,600,700,300'
           rel='stylesheet' type='text/css'> <script type="text/javascript">var bhittani_plugin_kksr_js = {"nonce":"7ab7b50d20","grs":true,"ajaxurl":"https:\/\/yellowpages.az\/wp-admin\/admin-ajax.php","func":"kksr_ajax","msg":"Rate this post","fuelspeed":400,"thankyou":"Thank you for your vote","error_msg":"An error occurred","tooltip":"1","tooltips":[{"tip":"","color":"#ffffff"},{"tip":"","color":"#ffffff"},{"tip":"","color":"#ffffff"},{"tip":"","color":"#ffffff"},{"tip":"","color":"#ffffff"}]};</script>
         <link rel='dns-prefetch' href='//maps.google.com' /><link
           href='https://sp-ao.shortpixel.ai' rel='preconnect' /><link
           rel="alternate" type="application/rss+xml" title="Yellowpages &raquo;
           Alfabetik indeks Şərh Qidalandırıcısı"
           href="https://yellowpages.az/Az/alphabetical-index/feed/" /> <script
           type='text/javascript'
           src='https://yellowpages.az/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp'
           id='jquery-core-js'></script> <script type='text/javascript'
           id='wpgmza_data-js-extra'>var wpgmza_google_api_status = {"message":"Enqueued","code":"ENQUEUED"};
     var wpgmza_google_api_status = {"message":"Enqueued","code":"ENQUEUED"};
     var wpgmza_google_api_status = {"message":"Enqueued","code":"ENQUEUED"};</script>
         <script type='text/javascript'
           src='//maps.google.com/maps/api/js?v=quarterly&#038;language=az&#038;libraries=geometry%2Cplaces%2Cvisualization&#038;key=AIzaSyDvwL08-w0iVTcGbgFKi1k8O3Vlp08HCnM&#038;ver=5.5.7'
           id='wpgmza_api_call-js'></script> <script type='text/javascript'
           id='wpgmza-js-extra'>var WPGMZA_localized_data = {"adminurl":"https:\/\/yellowpages.az\/wp-admin\/","ajaxurl":"https:\/\/yellowpages.az\/wp-admin\/admin-ajax.php","resturl":"https:\/\/yellowpages.az\/Az\/wp-json\/wpgmza\/v1","html":{"googleMapsAPIErrorDialog":"<div id=\"wpgmza-google-api-error-dialog\" data-remodal-id=\"wpgmza-google-api-error-dialog\">\r\n\r\n\t<h2>Maps API Error<\/h2>\r\n\t\r\n\t<div>\r\n\t\r\n\t\t<p>\r\n\t\t\tOne or more error(s) have occured attempting to initialize the Maps API:\t\t<\/p>\r\n\t\r\n\t\t<ul id=\"wpgmza-google-api-error-list\">\r\n\t\t\t<li class=\"template notice notice-error\">\r\n\t\t\t\t<span class=\"wpgmza-message\"><\/span>\r\n\t\t\t\t<span class=\"wpgmza-documentation-buttons\">\r\n\t\t\t\t\t<a target=\"_blank\">\r\n\t\t\t\t\t\t<i class=\"fa\" aria-hidden=\"true\"><\/i>\r\n\t\t\t\t\t<\/a>\r\n\t\t\t\t<\/span>\r\n\t\t\t<\/li>\r\n\t\t<\/ul>\r\n\t\r\n\t<\/div>\r\n\t\r\n\t<p>\r\n\t\tSee our documentation for solutions to common Google API issues:\t<\/p>\r\n\t\r\n\t<ul>\r\n\t\t<li>\r\n\t\t\t<a href=\"https:\/\/www.wpgmaps.com\/documentation\/troubleshooting\/this-page-cant-load-google-maps-correctly\/\">\r\n\t\t\t\t\u201cThis page can\u2019t load Google Maps correctly\u201d\t\t\t<\/a>\r\n\t\t<\/li>\r\n\t\t<li>\r\n\t\t\t<a href=\"https:\/\/www.wpgmaps.com\/documentation\/troubleshooting\/this-api-project-is-not-authorized-to-use-this-api\/\">\r\n\t\t\t\t\u201cThis API project is not authorized to use this API\u201d\t\t\t<\/a>\r\n\t\t<\/li>\r\n\t\t<li>\r\n\t\t\t<a href=\"https:\/\/www.wpgmaps.com\/documentation\/troubleshooting\/api-not-activated-map-error\/\">\r\n\t\t\t\t\u201cAPI Not Activated Map Error\u201d\t\t\t<\/a>\r\n\t\t<\/li>\r\n\t<\/ul>\r\n\t\r\n\t<p>\r\n\t\tPlease see the <a href=\"https:\/\/www.wpgmaps.com\/documentation\/creating-a-google-maps-api-key\/\">WP Google Maps Documentation<\/a> for a step by step guide on setting up your Google Maps API key.\t<\/p>\r\n\t\r\n\t<p>\r\n\t\tPlease open your Developer Tools (F12 for most browsers) and see your JavaScript console for the full error message.\t<\/p>\r\n\t\r\n\t<p class=\"wpgmza-front-end-only\">\r\n\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"><\/i>\r\n\t\tThis dialog is only visible to administrators\t<\/p>\r\n\t\r\n\t<button data-remodal-action=\"confirm\" class=\"remodal-confirm\">\r\n\t\tDismiss\t<\/button>\r\n\r\n<\/div>"},"settings":{"wpgmza_settings_map_streetview":"yes","wpgmza_settings_map_zoom":"yes","wpgmza_settings_map_pan":"yes","wpgmza_settings_map_type":"yes","wpgmza_settings_marker_pull":"0","wpgmza_gdpr_company_name":"Yellowpages","wpgmza_gdpr_retention_purpose":"displaying map tiles, geocoding addresses and calculating and display directions.","wpgmza_gdpr_notice_override_text":"","wpgmza_load_engine_api_condition":"where-required","use_fontawesome":"4.*","wpgmza_maps_engine":"google-maps","wpgmza_settings_map_open_marker_by":"1","wpgmza_custom_css":"","wpgmza_custom_js":"","wpgmza_settings_access_level":"manage_options","wpgmza_store_locator_radii":"1,5,10,25,50,75,100,150,200,300","engine":"google-maps","google_maps_api_key":"AIzaSyDvwL08-w0iVTcGbgFKi1k8O3Vlp08HCnM","default_marker_icon":"\/\/maps.gstatic.com\/mapfiles\/api-3\/images\/spotlight-poi2.png","developer_mode":false,"wpgmza_gdpr_enabled":1,"wpgmza_gdpr_default_notice":"<p>\r\n\tI agree for my personal data to be processed by <span name=\"wpgmza_gdpr_company_name\"><\/span>, for the purpose(s) of <span name=\"wpgmza_gdpr_retention_purpose\"><\/span>.\r\n<\/p>\r\n\r\n<p>\t\r\n\tI agree for my personal data, provided via map API calls, to be processed by the API provider, for the purposes of geocoding (converting addresses to coordinates), reverse geocoding and\tgenerating directions.\r\n<\/p>\r\n<p>\r\n\tSome visual components of WP Google Maps use 3rd party libraries which are loaded over the network. At present the libraries are Google Maps, Open Street Map, jQuery DataTables and FontAwesome. When loading resources over a network, the 3rd party server will receive your IP address and User Agent string amongst other details. Please refer to the Privacy Policy of the respective libraries for details on how they use data and the process to exercise your rights under the GDPR regulations.\r\n<\/p>\r\n<p>\r\n\tWP Google Maps uses jQuery DataTables to display sortable, searchable tables, such as that seen in the Advanced Marker Listing and on the Map Edit Page. jQuery DataTables in certain circumstances uses a cookie to save and later recall the \"state\" of a given table - that is, the search term, sort column and order and current page. This data is held in local storage and retained until this is cleared manually. No libraries used by WP Google Maps transmit this information.\r\n<\/p>\r\n<p>\r\n\tPlease <a href=\"https:\/\/developers.google.com\/maps\/terms\">see here<\/a> and <a href=\"https:\/\/maps.google.com\/help\/terms_maps.html\">here<\/a> for Google's terms. Please also see <a href=\"https:\/\/policies.google.com\/privacy?hl=en-GB&amp;gl=uk\">Google's Privacy Policy<\/a>. We do not send the API provider any personally identifying information, or information that could uniquely identify your device.\r\n<\/p>\r\n<p>\r\n\tWhere this notice is displayed in place of a map, agreeing to this notice will store a cookie recording your agreement so you are not prompted again.\r\n<\/p>"},"currentPage":null,"userCanAdministrator":"0","localized_strings":{"unsecure_geolocation":"Many browsers are no longer allowing geolocation from unsecured origins. You will need to secure your site with an SSL certificate (HTTPS) or this feature may not work for your visitors","google_api_not_loaded":"The map cannot be initialized because the Maps API has not been loaded. Please check your settings.","documentation":"Documentation","api_dashboard":"API Dashboard","verify_project":"Verify Project"},"api_consent_html":"<div><p>\r\n\tI agree for my personal data to be processed by <span name=\"wpgmza_gdpr_company_name\">Yellowpages<\/span>, for the purpose(s) of <span name=\"wpgmza_gdpr_retention_purpose\">displaying map tiles, geocoding addresses and calculating and display directions.<\/span>.\r\n<\/p>\r\n\r\n<p>\t\r\n\tI agree for my personal data, provided via map API calls, to be processed by the API provider, for the purposes of geocoding (converting addresses to coordinates), reverse geocoding and\tgenerating directions.\r\n<\/p>\r\n<p>\r\n\tSome visual components of WP Google Maps use 3rd party libraries which are loaded over the network. At present the libraries are Google Maps, Open Street Map, jQuery DataTables and FontAwesome. When loading resources over a network, the 3rd party server will receive your IP address and User Agent string amongst other details. Please refer to the Privacy Policy of the respective libraries for details on how they use data and the process to exercise your rights under the GDPR regulations.\r\n<\/p>\r\n<p>\r\n\tWP Google Maps uses jQuery DataTables to display sortable, searchable tables, such as that seen in the Advanced Marker Listing and on the Map Edit Page. jQuery DataTables in certain circumstances uses a cookie to save and later recall the \"state\" of a given table - that is, the search term, sort column and order and current page. This data is held in local storage and retained until this is cleared manually. No libraries used by WP Google Maps transmit this information.\r\n<\/p>\r\n<p>\r\n\tPlease <a href=\"https:\/\/developers.google.com\/maps\/terms\">see here<\/a> and <a href=\"https:\/\/maps.google.com\/help\/terms_maps.html\">here<\/a> for Google's terms. Please also see <a href=\"https:\/\/policies.google.com\/privacy?hl=en-GB&gl=uk\">Google's Privacy Policy<\/a>. We do not send the API provider any personally identifying information, or information that could uniquely identify your device.\r\n<\/p>\r\n<p>\r\n\tWhere this notice is displayed in place of a map, agreeing to this notice will store a cookie recording your agreement so you are not prompted again.\r\n<\/p><p class='wpgmza-centered'><button class='wpgmza-api-consent'>I agree<\/button><\/div><\/p>","basic_version":"7.10.49","_isProVersion":"","is_admin":"0"};</script>
         <link rel="https://api.w.org/" href="https://yellowpages.az/Az/wp-json/" /><link
           rel="alternate" type="application/json"
           href="https://yellowpages.az/Az/wp-json/wp/v2/pages/43" /><link
           rel="EditURI" type="application/rsd+xml" title="RSD"
           href="https://yellowpages.az/xmlrpc.php?rsd" /><link rel="wlwmanifest"
           type="application/wlwmanifest+xml"
           href="https://yellowpages.az/wp-includes/wlwmanifest.xml" /><meta
           name="generator" content="WordPress 5.5.7" /><link rel="canonical"
           href="https://yellowpages.az/Az/alphabetical-index/" /><link
           rel='shortlink' href='https://yellowpages.az/Az/?p=43' /><link
           rel="alternate" type="application/json+oembed"
           href="https://yellowpages.az/Az/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fyellowpages.az%2FAz%2Falphabetical-index%2F"
           /><link rel="alternate" type="text/xml+oembed"
           href="https://yellowpages.az/Az/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fyellowpages.az%2FAz%2Falphabetical-index%2F&#038;format=xml"
           /> <script type="text/javascript">(function(url){
       if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
       var addEvent = function(evt, handler) {
         if (window.addEventListener) {
           document.addEventListener(evt, handler, false);
         } else if (window.attachEvent) {
           document.attachEvent('on' + evt, handler);
         }
       };
       var removeEvent = function(evt, handler) {
         if (window.removeEventListener) {
           document.removeEventListener(evt, handler, false);
         } else if (window.detachEvent) {
           document.detachEvent('on' + evt, handler);
         }
       };
       var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
       var logHuman = function() {
         var wfscr = document.createElement('script');
         wfscr.type = 'text/javascript';
         wfscr.async = true;
         wfscr.src = url + '&r=' + Math.random();
         (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
         for (var i = 0; i < evts.length; i++) {
           removeEvent(evts[i], logHuman);
         }
       };
       for (var i = 0; i < evts.length; i++) {
         addEvent(evts[i], logHuman);
       }
     })('//yellowpages.az/Az/?wordfence_lh=1&hid=3B275D4E6384DF709FD7460A395055E3');</script>
         <link hreflang="en"
           href="https://yellowpages.az/en/alphabetical-index/?letter-ru=%D0%90"
           rel="alternate" /><link hreflang="ru"
           href="https://yellowpages.az/ru/alphabetical-index/?letter-ru=%D0%90"
           rel="alternate" /><link hreflang="az"
           href="https://yellowpages.az/Az/alphabetical-index/?letter-ru=%D0%90"
           rel="alternate" /><link hreflang="az"
           href="https://yellowpages.az/az/alphabetical-index/?letter-ru=%D0%90"
           rel="alternate" /><link hreflang="x-default"
           href="https://yellowpages.az/alphabetical-index/?letter-ru=%D0%90"
           rel="alternate" /><meta name="generator" content="qTranslate-X 3.4.6.8" />
         <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
       ga('create', 'UA-110882193-1', 'auto');
       ga('send', 'pageview');</script>
       </head><body class="Az"> <script type="text/javascript">new Image().src = "//counter.yadro.ru/hit?r"+
         escape(document.referrer)+((typeof(screen)=="undefined")?"":
         ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
         screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
         ";h"+escape(document.title.substring(0,150))+
         ";"+Math.random();</script>
         <div class="header-banners"> <iframe frameborder="0" scrolling="no"
             src="/banners/edge/antaris_banner_yellowpages_700x100_az2.html"></iframe>
           <iframe frameborder="0" scrolling="no"
             src="/banners/edge/maxprint220x100.html"></iframe></div><header
           class="main-header" id="header"><div class="bg-color"><nav class="nav
               navbar-default navbar-fixed-top"><div class="container"><div
                   class="navbar-header"> <button type="button" class="navbar-toggle
                     collapsed" data-toggle="collapse" data-target="#mynavbar"
                     aria-expanded="false" aria-controls="navbar"> <span class="fa
                       fa-bars"></span> </button> <a
                     href="https://yellowpages.az/Az/" class="navbar-brand"> <img
                       src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://yellowpages.az/wp-content/themes/yellowpages/img/logo.png"><h1>
                       Yellow Pages <span>Azerbaijan</span></h1> </a></div><div
                   class="top-banners"> <iframe frameborder="0" scrolling="no"
                     src="/banners/edge/azimut220x100_6.html"></iframe> <iframe
                     frameborder="0" scrolling="no"
                     src="/banners/edge/azimut220x100_6.html"></iframe></div></div></nav><div
               class="container text-center"><div class="wrapper"><div
                   class="forms-wraper"><div class="google-search"><div
                       class="textwidget"><p><script>(function() {
         var cx = '014546105795379878682:brdcsc71vbo';
         var gcse = document.createElement('script');
         gcse.type = 'text/javascript';
         gcse.async = true;
         gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(gcse, s);
       })();</script><br
                           /> <gcse:searchbox-only></gcse:searchbox-only></p></div></div><form
                     class="search-form" action="https://yellowpages.az/Az/results/"
                     method="get"><div class="search-form__input"> <input type="text"
                         name="search-title" class="form-control" id="name"
                         placeholder="Buraya yazın .." value="" data-rule="minlen:4"
                         data-msg="Please enter at least 4 chars" /></div><div
                       class="search-form__controls"> <button class="btn btn-submit"
                         type="submit">Axtarış</button></div><div
                       class="search-form__options"><div class="row"><div
                           class="col-md-4 col-sm-6"><p>Axtarış:</p> <label
                             for="radio-brand"> <input type="radio" id="radio-brand"
                               name="search-by" value="brand"> <span>brendlər üzrə</span>
                           </label> <label for="radio-categories"> <input
                               type="radio" id="radio-categories" name="search-by"
                               value="category"> <span>kateqoriyalar üzrə</span>
                           </label> <label for="radio-phone"> <input type="radio"
                               id="radio-phone" name="search-by" value="numbers">
                             <span>telefon nömrələri ilə</span> </label> <label
                             for="radio-google"> <input type="radio"
                               id="radio-google" name="search-by" value="google">
                             <span>via Google™</span> </label></div><div
                           class="col-md-4 col-sm-6"><p>Sırala:</p> <label for="asc">
                             <input type="radio" id="asc" name="sort-by" value="asc">
                             <span>əlifba sırası ilə</span> </label> <label
                             for="desc"> <input type="radio" id="desc" name="sort-by"
                               value="desc"> <span>sondan əlifba sırası ilə</span>
                           </label> <label for="ratings"> <input type="radio"
                               id="ratings" name="sort-by" value="ratings"> <span>reytinq
                               üzrə</span> </label></div><div class="col-md-4
                           col-sm-6"><p>Reytinq:</p> <select name="rating-star"
                             id=""><option value="" disabled selected>Hər hansı bir</option><option
                               value="5">★★★★★</option><option value="4">★★★★</option><option
                               value="3">★★★</option><option value="2">★★</option><option
                               value="1">★</option> </select> <label for="checkBox">
                             <input id="checkBox" type="checkbox" name="recommended">
                             <span>Yellow Pages Seçilmişləri</span> </label></div></div></div></form><ul
                     id="menu-language-menu" class="language-nav"><li
                       id="menu-item-10032" class="qtranxs-lang-menu
                       qtranxs-lang-menu-Az menu-item menu-item-type-custom
                       menu-item-object-custom current-menu-parent
                       menu-item-has-children menu-item-10032"><a title="Azerbaijani"
                         href="#">(Русский) Language Menu:&nbsp;<img
                           src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://yellowpages.az/wp-content/plugins/qtranslate-x/flags/az.png"
                           alt="Azerbaijani" /></a><ul class="sub-menu"><li
                           id="menu-item-10033" class="qtranxs-lang-menu-item
                           qtranxs-lang-menu-item-en menu-item menu-item-type-custom
                           menu-item-object-custom menu-item-10033"><a
                             title="English"
                             href="https://yellowpages.az/en/alphabetical-index/?letter-ru=%D0%90"><img
                               src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://yellowpages.az/wp-content/plugins/qtranslate-x/flags/gb.png"
                               alt="English" />&nbsp;English</a></li><li
                           id="menu-item-10034" class="qtranxs-lang-menu-item
                           qtranxs-lang-menu-item-ru menu-item menu-item-type-custom
                           menu-item-object-custom menu-item-10034"><a
                             title="Русский"
                             href="https://yellowpages.az/ru/alphabetical-index/?letter-ru=%D0%90"><img
                               src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://yellowpages.az/wp-content/plugins/qtranslate-x/flags/ru.png"
                               alt="Русский" />&nbsp;Русский</a></li><li
                           id="menu-item-10035" class="qtranxs-lang-menu-item
                           qtranxs-lang-menu-item-Az menu-item menu-item-type-custom
                           menu-item-object-custom current-menu-item
                           menu-item-10035"><a title="Azerbaijani"
                             href="https://yellowpages.az/Az/alphabetical-index/?letter-ru=%D0%90"
                             aria-current="page"><img
                               src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://yellowpages.az/wp-content/plugins/qtranslate-x/flags/az.png"
                               alt="Azerbaijani" />&nbsp;Azerbaijani</a></li><li
                           id="menu-item-10036" class="qtranxs-lang-menu-item
                           qtranxs-lang-menu-item-az menu-item menu-item-type-custom
                           menu-item-object-custom menu-item-10036"><a
                             href="https://yellowpages.az/az/alphabetical-index/?letter-ru=%D0%90"><img
                               src="https://yellowpages.az/wp-content/plugins/qtranslate-x/flags/"
                               alt="" />&nbsp;</a></li></ul></li></ul></div></div></div></div></header><section
           class="section-padding"><div class="container"><div class="content-row"><main><form
                   action="https://yellowpages.az/Az/alphabetical-index/"
                   method="get" class="alphabet-list wow fadeIn delay-05s"> <label
                     for="letter-aр"> <input type="radio" id="letter-aр"
                       name="letter-ru" value="А" checked='checked'> <span>А</span>
                   </label> <label for="letter-б"> <input type="radio" id="letter-б"
                       name="letter-ru" value="Б"> <span>Б</span> </label> <label
                     for="letter-вр"> <input type="radio" id="letter-вр"
                       name="letter-ru" value="В"> <span>В</span> </label> <label
                     for="letter-г"> <input type="radio" id="letter-г"
                       name="letter-ru" value="Г"> <span>Г</span> </label> <label
                     for="letter-др"> <input type="radio" id="letter-др"
                       name="letter-ru" value="Д"> <span>Д</span> </label> <label
                     for="letter-ер"> <input type="radio" id="letter-ер"
                       name="letter-ru" value="Е"> <span>Е</span> </label> <label
                     for="letter-жр"> <input type="radio" id="letter-жр"
                       name="letter-ru" value="Ж"> <span>Ж</span> </label> <label
                     for="letter-зр"> <input type="radio" id="letter-зр"
                       name="letter-ru" value="З"> <span>З</span> </label> <label
                     for="letter-ир"> <input type="radio" id="letter-ир"
                       name="letter-ru" value="И"> <span>И</span> </label> <label
                     for="letter-кр"> <input type="radio" id="letter-кр"
                       name="letter-ru" value="К"> <span>К</span> </label> <label
                     for="letter-л"> <input type="radio" id="letter-л"
                       name="letter-ru" value="Л"> <span>Л</span> </label> <label
                     for="letter-мр"> <input type="radio" id="letter-мр"
                       name="letter-ru" value="М"> <span>М</span> </label> <label
                     for="letter-нр"> <input type="radio" id="letter-нр"
                       name="letter-ru" value="Н"> <span>Н</span> </label> <label
                     for="letter-ор"> <input type="radio" id="letter-ор"
                       name="letter-ru" value="О"> <span>О</span> </label> <label
                     for="letter-п"> <input type="radio" id="letter-п"
                       name="letter-ru" value="П"> <span>П</span> </label> <label
                     for="letter-рр"> <input type="radio" id="letter-рр"
                       name="letter-ru" value="Р"> <span>Р</span> </label> <label
                     for="letter-ср"> <input type="radio" id="letter-ср"
                       name="letter-ru" value="С"> <span>С</span> </label> <label
                     for="letter-тр"> <input type="radio" id="letter-тр"
                       name="letter-ru" value="Т"> <span>Т</span> </label> <label
                     for="letter-ур"> <input type="radio" id="letter-ур"
                       name="letter-ru" value="У"> <span>У</span> </label> <label
                     for="letter-ф"> <input type="radio" id="letter-ф"
                       name="letter-ru" value="Ф"> <span>Ф</span> </label> <label
                     for="letter-хр"> <input type="radio" id="letter-хр"
                       name="letter-ru" value="Х"> <span>Х</span> </label> <label
                     for="letter-ц"> <input type="radio" id="letter-ц"
                       name="letter-ru" value="Ц"> <span>Ц</span> </label> <label
                     for="letter-ч"> <input type="radio" id="letter-ч"
                       name="letter-ru" value="Ч"> <span>Ч</span> </label> <label
                     for="letter-ш"> <input type="radio" id="letter-ш"
                       name="letter-ru" value="Ш"> <span>Ш</span> </label> <label
                     for="letter-щ"> <input type="radio" id="letter-щ"
                       name="letter-ru" value="Щ"> <span>Щ</span> </label> <label
                     for="letter-э"> <input type="radio" id="letter-э"
                       name="letter-ru" value="Э"> <span>Э</span> </label> <label
                     for="letter-ю"> <input type="radio" id="letter-ю"
                       name="letter-ru" value="Ю"> <span>Ю</span> </label> <label
                     for="letter-я"> <input type="radio" id="letter-я"
                       name="letter-ru" value="Я"> <span>Я</span> </label></form><form
                   action="https://yellowpages.az/Az/alphabetical-index/"
                   method="get" class="alphabet-list wow fadeIn delay-05s"> <label
                     for="letter-a"> <input type="radio" id="letter-a"
                       name="letter-en" value="A"> <span>A</span> </label> <label
                     for="letter-b"> <input type="radio" id="letter-b"
                       name="letter-en" value="B"> <span>B</span> </label> <label
                     for="letter-c"> <input type="radio" id="letter-c"
                       name="letter-en" value="c"> <span>C</span> </label> <label
                     for="letter-d"> <input type="radio" id="letter-d"
                       name="letter-en" value="D"> <span>D</span> </label> <label
                     for="letter-e"> <input type="radio" id="letter-e"
                       name="letter-en" value="E"> <span>E</span> </label> <label
                     for="letter-f"> <input type="radio" id="letter-f"
                       name="letter-en" value="f"> <span>F</span> </label> <label
                     for="letter-g"> <input type="radio" id="letter-g"
                       name="letter-en" value="g"> <span>G</span> </label> <label
                     for="letter-h"> <input type="radio" id="letter-h"
                       name="letter-en" value="h"> <span>H</span> </label> <label
                     for="letter-i"> <input type="radio" id="letter-i"
                       name="letter-en" value="i"> <span>I</span> </label> <label
                     for="letter-j"> <input type="radio" id="letter-j"
                       name="letter-en" value="j"> <span>J</span> </label> <label
                     for="letter-k"> <input type="radio" id="letter-k"
                       name="letter-en" value="k"> <span>K</span> </label> <label
                     for="letter-l"> <input type="radio" id="letter-l"
                       name="letter-en" value="l"> <span>L</span> </label> <label
                     for="letter-m"> <input type="radio" id="letter-m"
                       name="letter-en" value="m"> <span>M</span> </label> <label
                     for="letter-n"> <input type="radio" id="letter-n"
                       name="letter-en" value="n"> <span>N</span> </label> <label
                     for="letter-o"> <input type="radio" id="letter-o"
                       name="letter-en" value="o"> <span>O</span> </label> <label
                     for="letter-p"> <input type="radio" id="letter-p"
                       name="letter-en" value="p"> <span>P</span> </label> <label
                     for="letter-q"> <input type="radio" id="letter-q"
                       name="letter-en" value="q"> <span>Q</span> </label> <label
                     for="letter-r"> <input type="radio" id="letter-r"
                       name="letter-en" value="r"> <span>R</span> </label> <label
                     for="letter-s"> <input type="radio" id="letter-s"
                       name="letter-en" value="s"> <span>S</span> </label> <label
                     for="letter-t"> <input type="radio" id="letter-t"
                       name="letter-en" value="t"> <span>T</span> </label> <label
                     for="letter-u"> <input type="radio" id="letter-u"
                       name="letter-en" value="u"> <span>U</span> </label> <label
                     for="letter-v"> <input type="radio" id="letter-v"
                       name="letter-en" value="v"> <span>V</span> </label> <label
                     for="letter-w"> <input type="radio" id="letter-w"
                       name="letter-en" value="w"> <span>W</span> </label> <label
                     for="letter-x"> <input type="radio" id="letter-x"
                       name="letter-en" value="x"> <span>X</span> </label> <label
                     for="letter-y"> <input type="radio" id="letter-y"
                       name="letter-en" value="y"> <span>Y</span> </label> <label
                     for="letter-z"> <input type="radio" id="letter-z"
                       name="letter-en" value="z"> <span>Z</span> </label></form><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/150-bar-gril/">1.
                           &#8220;150 Bar &#038; Grill&#8221;</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1065, Bakı</p> <address
                               class="txt-tl">İzmir küç., 5</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994125370516">(+994
                                   12) <strong>5370516</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/restaurants_cafes_and_bars/">
                                 <span>Restoranlar, Kafelər, Barlar</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="5244"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;150 Bar
                               &#038; Grill&#8221;</div><span itemprop="ratingValue">2.3</span>
                             (46.67%) <span itemprop="ratingCount">3</span> votes<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/3-bochki/">2.
                           &#8220;3 Boçki Pub &#038; Restaurant&#8221;</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1010, Bakı</p> <address
                               class="txt-tl">Dilarə Əliyeva küç., 251</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124980812">(+994
                                   12) <strong>4980812</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/restaurants_cafes_and_bars/">
                                 <span>Restoranlar, Kafelər, Barlar</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="4986"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;3 Boçki Pub
                               &#038; Restaurant&#8221;</div><span
                               itemprop="ratingValue">5</span> (100%) <span
                               itemprop="ratingCount">1</span> vote<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/6-ci-mertebe/">3.
                           &#8220;6-cı Mərtəbə&#8221;</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1010, Bakı</p> <address
                               class="txt-tl">Kövkəb Səfərəliyeva küç., 12</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124997860">(+994
                                   12) <strong>4997860</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124997861">(+994
                                   12) <strong>4997861</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a
                                   href="mailto:office@6-cimertebe.az">office@6-cimertebe.az</a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank"
                                   href="http://6-cimertebe.com">6-cimertebe.com</a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/woodworking/">
                                 <span>Ağac Emalı</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/stone_working/">
                                 <span>Daş Emalı</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/houses_and_buildings/">
                                 <span>Evlər, Tikililər, Binalar və Qurğular</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/furniture_production/">
                                 <span>Mebel: İstehsalat</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/marble/">
                                 <span>Mərmər: Çıxarılma, Emal, Məhsulların Istehsalı</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/windows/">
                                 <span>Pəncərələr</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/welding/">
                                 <span>Qaynaq İşləri</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/industrial_and_civil_engineering_design/">
                                 <span>Sənaye Xarakterli və Mülki Dizayn</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/building_materials_facing_materials/">
                                 <span>Tikinti Materialları: Üzlük və Dekorasiya</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/construction_and_repairing_works/">
                                 <span>Tikinti-Təmir və Tamamlama İşləri</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/construction_roofing/">
                                 <span>Tikinti: Dam İşləri</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/civil_engineering_design_and_construction/">
                                 <span>Tikinti: Elmi, Layihə-Konstruktor İşləri və
                                   Xidmətləri</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/construction_installation_and_adjustment_operations/">
                                 <span>Tikinti: Quraşdırma və İstismara Buraxılma</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="4614"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;6-cı
                               Mərtəbə&#8221;</div><span itemprop="ratingValue">3</span>
                             (60%) <span itemprop="ratingCount">2</span> votes<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/absheron-sanatorium/">4.
                           &#8220;Abşeron&#8221; İxtisaslaşdırılmış Mədə-Bağırsaq
                           Sanatoriyası</a></h4><div class="card-recording__rating"></div><div
                         class="row-flex"><div class="col-sm-6 contact-block
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-map-marker" aria-hidden="true"></i></div><div
                             class="icon-text"><p class="txt-tl">AZ1044, Bakı</p>
                             <address class="txt-tl">Yesenin küç., 95; Mərdəkan qəs.</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124543530">(+994
                                   12) <strong>4543530</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124542229">(+994
                                   12) <strong>4542229</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124542267">(+994
                                   12) <strong>4542267</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124542350">(+994
                                   12) <strong>4542350</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank"
                                   href="http://abseron-sanatoriyasi.az">abseron-sanatoriyasi.az</a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/holiday_homes_and_sanatoria/">
                                 <span>İstirahət Evləri, Sanatoriyalar</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="855"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Abşeron&#8221;
                               İxtisaslaşdırılmış Mədə-Bağırsaq Sanatoriyası</div><span
                               itemprop="ratingValue">5</span> (100%) <span
                               itemprop="ratingCount">1</span> vote<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/absheron-art-gallery/">5.
                           &#8220;Abşeron&#8221;, Rəsm Qalereyası</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1000, Bakı</p> <address
                               class="txt-tl">Asəf Zeynallı küç., 11; İçəri Şəhər</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124920600">(+994
                                   12) <strong>4920600</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124922142">(+994
                                   12) <strong>4922142</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a
                                   href="mailto:eldaniz_ibrahimov@rambler.ru">eldaniz_ibrahimov@rambler.ru</a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank" href="http://"></a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/galleries/">
                                 <span>Qalereya</span><i>,</i> </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="684"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Abşeron&#8221;,
                               Rəsm Qalereyası</div><span itemprop="ratingValue">2.8</span>
                             (56.67%) <span itemprop="ratingCount">6</span> votes<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/accounting-az-llc/">6.
                           &#8220;Accounting.Az&#8221; MMC</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1065, Bakı</p> <address
                               class="txt-tl">Cəfər Cabbarlı küç., 44; 17-ci mərtəbə;
                               &quot;Caspian Plaza II&quot;</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994125982070">(+994
                                   12) <strong>5982070</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994125983798">(+994
                                   12) <strong>5983798</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994502505258">(+994
                                   50) <strong>2505258</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="mailto:info@accounting.az">info@accounting.az</a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank"
                                   href="http://accounting.az">accounting.az</a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/auditing_services/">
                                 <span>Audit Xidmətləri</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/accounting_services/">
                                 <span>Mühasibatlıq Xidmətləri</span><i>,</i> </a>
                             </i></div></div></div></div><div class="col-sm-4"><div
                         class="kk-star-ratings top-left lft" data-id="10213"><div
                           class="kksr-stars kksr-star gray"><div class="kksr-fuel
                             kksr-star yellow" style="width:0%;"></div> <a href="#1"></a><a
                             href="#2"></a><a href="#3"></a><a href="#4"></a><a
                             href="#5"></a></div><div class="kksr-legend"><div
                             itemprop="aggregateRating" itemscope
                             itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Accounting.Az&#8221;
                               MMC</div><span itemprop="ratingValue">5</span> (100%)
                             <span itemprop="ratingCount">1</span> vote<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/adabiyyat-gazeti/">7.
                           &#8220;Ədəbiyyat Qəzeti&#8221;</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1073, Bakı</p> <address
                               class="txt-tl">Mətbuat pr., məhəllə 529</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994125395256">(+994
                                   12) <strong>5395256</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994125395067">(+994
                                   12) <strong>5395067</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/newspapers/">
                                 <span>Qəzetlər</span><i>,</i> </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="378"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Ədəbiyyat
                               Qəzeti&#8221;</div>Rate this post<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/nil-kitab-kirtasiye-sarayi-corporate-sales/">8.
                           &#8220;Aden&#8221; MMC</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1095, Bakı</p> <address
                               class="txt-tl">Fikrət Əmirov küç., 1</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124985898">(+994
                                   12) <strong>4985898</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994503968514">(+994
                                   50) <strong>3968514</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="mailto:adenmagaza@aden.az">adenmagaza@aden.az</a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/cards/">
                                 <span>Açıqçalar</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/stationery/">
                                 <span>Dəftərxana Malları</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/foil/">
                                 <span>Folqa</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/paper/">
                                 <span>Kağız</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/books_delivery_sale/">
                                 <span>Kitablar: Təchizat, Satış</span><i>,</i> </a>
                               <a
                                 href="https://yellowpages.az/Az/category/copying_machines_accessories_and_materials/">
                                 <span>Kopyalama və Çoxaltma Avadanlığı, Aksessuarlar
                                   və Materiallar</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/ink_and_paste/">
                                 <span>Mürəkkəb və Pastalar</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/office_equipment/">
                                 <span>Ofis Avadanlığı, Orqtexnika</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/watches_clocks_timers_units_and_parts/">
                                 <span>Saat və Vaxt Göstərən Qurğular, Onların
                                   Qovşaqları və Detalları</span><i>,</i> </a> <a
                                 href="https://yellowpages.az/Az/category/representative_offices_of_foreign_companies_organizations_and_jointventures/">
                                 <span>Xarici Firma və Təşkilatların
                                   Nümayəndəlikləri, Müştərək Müəssisələr</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/glues_and_adhesives/">
                                 <span>Yapışqan və Yapışdırıcı Materiallar</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/suitcases/">
                                 <span>Çamadanlar, Çantalar, Səyahət Vasitələri</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/drawing_appliances/">
                                 <span>Çertyoj Vasitələri və Aksessuarları</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="6246"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Aden&#8221;
                               MMC</div><span itemprop="ratingValue">4.7</span>
                             (93.33%) <span itemprop="ratingCount">3</span> votes<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/affa-azerbaijan-footbol-federations-association/">9.
                           &#8220;Affa&#8221;, Azərbaycan Futbol Federasiyaları
                           Assosiasiyası</a></h4><div class="card-recording__rating"></div><div
                         class="row-flex"><div class="col-sm-6 contact-block
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-map-marker" aria-hidden="true"></i></div><div
                             class="icon-text"><p class="txt-tl">AZ1025, Bakı</p>
                             <address class="txt-tl">8 Noyabr pr., 57F; 2208-ci
                               məhəllə</address></div></div><div class="col-sm-6
                           contact-block contact-block--small"><div class="icon
                             icon--green"> <i class="fa fa-phone" aria-hidden="true"></i></div><div
                             class="icon-text"><div><p class="txt-tl"><a
                                   href="tel:(+994124042777">(+994 12) <strong>4042777</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124042778">(+994
                                   12) <strong>4042778</strong></a></p></div><div><p
                                 class="txt-tl"><a href="tel:(+994124042779">(+994
                                   12) <strong>4042779</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="mailto:info@affa.az">info@affa.az</a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank"
                                   href="http://affa.az">affa.az</a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/sport/">
                                 <span>İdman Təşkilatları</span><i>,</i> </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="1343"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Affa&#8221;,
                               Azərbaycan Futbol Federasiyaları Assosiasiyası</div>Rate
                             this post<meta itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class="card-recording"><div class="row"><div class="col-sm-8"><h4><a
                           href="https://yellowpages.az/Az/business/ag-chicayim/">10.
                           &#8220;Ağ Çiçəyim&#8221;</a></h4><div
                         class="card-recording__rating"></div><div class="row-flex"><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-map-marker"
                               aria-hidden="true"></i></div><div class="icon-text"><p
                               class="txt-tl">AZ1106, Bakı</p> <address
                               class="txt-tl">Azadlıq pr., 191</address></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon icon--green"> <i class="fa fa-phone"
                               aria-hidden="true"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a href="tel:(+994124404616">(+994
                                   12) <strong>4404616</strong></a></p></div></div></div><div
                           class="col-sm-6 contact-block contact-block--small"><div
                             class="icon"> <i class="fa fa-envelope"
                               aria-hidden="true"></i></div><div class="icon-text"></div></div><div
                           class="col-sm-6 contact-block contact-block--full
                           contact-block--small"><div class="icon"> <i class="fa
                               fa-desktop"></i></div><div class="icon-text"><div><p
                                 class="txt-tl"><a target="_blank"
                                   href="http://agciceyim.az">agciceyim.az</a></p></div></div></div><div
                           class="col-sm-12"><p class="toggle-next"> Show More <i
                               class="fa fa-caret-down" aria-hidden="true"></i></p><div
                             class="card-recording__more"> <i class="tags"> <i
                                 class="fa fa-tags" aria-hidden="true"></i> <a
                                 href="https://yellowpages.az/Az/category/flowers/">
                                 <span>Çiçəklər və Dekorativ Bitkilər</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/flowers_devices_for_growing/">
                                 <span>Çiçəklər: Əkin Üçün Material və Vasitələr</span><i>,</i>
                               </a> <a
                                 href="https://yellowpages.az/Az/category/flowers_artificial_flowers/">
                                 <span>Цветы И Декоративные Растения: Искусственные</span><i>,</i>
                               </a> </i></div></div></div></div><div
                       class="col-sm-4"><div class="kk-star-ratings top-left lft"
                         data-id="1398"><div class="kksr-stars kksr-star gray"><div
                             class="kksr-fuel kksr-star yellow" style="width:0%;"></div>
                           <a href="#1"></a><a href="#2"></a><a href="#3"></a><a
                             href="#4"></a><a href="#5"></a></div><div
                           class="kksr-legend"><div itemprop="aggregateRating"
                             itemscope itemtype="http://schema.org/AggregateRating"><div
                               itemprop="name" class="kksr-title">&#8220;Ağ
                               Çiçəyim&#8221;</div>Rate this post<meta
                               itemprop="bestRating" content="5" /><meta
                               itemprop="worstRating" content="1" /><div
                               itemprop="itemReviewed" itemscope
                               itemtype="http://schema.org/CreativeWork"></div></div></div></div>
                       <a class="pull-right print"><i class="fa fa-print"
                           aria-hidden="true"></i> Print business card</a><div
                         class="clearfix"></div></div></div></div><div
                   class='wp-pagenavi' role='navigation'> <span class='pages'>1</span><span
                     aria-current='page' class='current'>1</span><a class="page
                     larger" title="Page 2"
                     href="https://yellowpages.az/Az/alphabetical-index/page/2/?letter-ru=%D0%90">2</a><a
                     class="page larger" title="Page 3"
                     href="https://yellowpages.az/Az/alphabetical-index/page/3/?letter-ru=%D0%90">3</a><a
                     class="page larger" title="Page 4"
                     href="https://yellowpages.az/Az/alphabetical-index/page/4/?letter-ru=%D0%90">4</a><a
                     class="page larger" title="Page 5"
                     href="https://yellowpages.az/Az/alphabetical-index/page/5/?letter-ru=%D0%90">5</a><a
                     class="page larger" title="Page 6"
                     href="https://yellowpages.az/Az/alphabetical-index/page/6/?letter-ru=%D0%90">6</a><a
                     class="page larger" title="Page 7"
                     href="https://yellowpages.az/Az/alphabetical-index/page/7/?letter-ru=%D0%90">7</a><a
                     class="page larger" title="Page 8"
                     href="https://yellowpages.az/Az/alphabetical-index/page/8/?letter-ru=%D0%90">8</a><a
                     class="page larger" title="Page 9"
                     href="https://yellowpages.az/Az/alphabetical-index/page/9/?letter-ru=%D0%90">9</a><a
                     class="page larger" title="Page 10"
                     href="https://yellowpages.az/Az/alphabetical-index/page/10/?letter-ru=%D0%90">10</a><a
                     class="nextpostslink" rel="next"
                     href="https://yellowpages.az/Az/alphabetical-index/page/2/?letter-ru=%D0%90">»</a><a
                     class="last"
                     href="https://yellowpages.az/Az/alphabetical-index/page/17/?letter-ru=%D0%90">Последняя
                     »</a></div></main><aside class="sidebar"><div
                   class="sidebar-menu"><ul id="menu-main-menu" class="sidebar-nav"><li
                       id="menu-item-10578" class="menu-item menu-item-type-post_type
                       menu-item-object-page current-menu-item page_item page-item-43
                       current_page_item menu-item-10578"><a
                         href="https://yellowpages.az/Az/alphabetical-index/"
                         aria-current="page">Əlifba göstəricisi</a></li><li
                       id="menu-item-48" class="menu-item menu-item-type-post_type
                       menu-item-object-page menu-item-48"><a
                         href="https://yellowpages.az/Az/categories/">Yellow Pages
                         kateqoriyaları</a></li><li id="menu-item-49"
                       class="menu-item menu-item-type-post_type
                       menu-item-object-page menu-item-49"><a
                         href="https://yellowpages.az/Az/emergency-contacts/">Qaynar
                         Xətt əlaqə nömrələri</a></li></ul></div></aside></div></div></section><footer
           class="" id="footer"><div class="container"><div class="row"><div
                 class="col-sm-12 footer-copyright"> <a
                   href="//www.liveinternet.ru/click"
                   target="_blank"><img src="//counter.yadro.ru/logo?52.6"
                     title="LiveInternet: показано число просмотров и посетителей за
                     24 часа"
                     alt="" border="0" width="88" height="31" /></a><ul
                   id="menu-footer-menu" class="footer-nav"><li id="menu-item-10024"
                     class="menu-item menu-item-type-post_type menu-item-object-page
                     menu-item-home menu-item-10024"><a
                       href="https://yellowpages.az/Az/">Əsas Səhifə</a></li><li
                     id="menu-item-10017" class="menu-item menu-item-type-post_type
                     menu-item-object-page menu-item-10017"><a
                       href="https://yellowpages.az/Az/about-yellow-pages/">Yellow
                       Pages Haqqında</a></li><li id="menu-item-10583"
                     class="menu-item menu-item-type-post_type menu-item-object-page
                     menu-item-10583"><a
                       href="https://yellowpages.az/Az/partnership/">Əməkdaşlıq</a></li><li
                     id="menu-item-7223" class="menu-item menu-item-type-post_type
                     menu-item-object-page menu-item-7223"><a
                       href="https://yellowpages.az/Az/terms-conditions/">İstifadə
                       qaydaları</a></li><li id="menu-item-7227" class="menu-item
                     menu-item-type-post_type menu-item-object-page menu-item-7227"><a
                       href="https://yellowpages.az/Az/contacts/">Əlaqə nömrələri</a></li></ul></div></div></div></footer>
         <script type='text/javascript' id='wp-api-request-js-extra'>var wpApiSettings = {"root":"https:\/\/yellowpages.az\/Az\/wp-json\/","nonce":"0f7fb14b65","versionString":"wp\/v2\/"};</script>
         <script type='text/javascript' id='ditty-news-ticker-js-extra'>var mtphr_dnt_vars = {"is_rtl":""};</script>
         <script type='text/javascript' id='wp-polyfill-js-after'>( 'fetch' in window ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-fetch.min.js?ver=3.0.0"></scr' + 'ipt>' );( document.contains ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-node-contains.min.js?ver=3.42.0"></scr' + 'ipt>' );( window.DOMRect ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-dom-rect.min.js?ver=3.42.0"></scr' + 'ipt>' );( window.URL && window.URL.prototype && window.URLSearchParams ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-url.min.js?ver=3.6.4"></scr' + 'ipt>' );( window.FormData && window.FormData.prototype.keys ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-formdata.min.js?ver=3.0.12"></scr' + 'ipt>' );( Element.prototype.matches && Element.prototype.closest ) || document.write( '<script src="https://yellowpages.az/wp-includes/js/dist/vendor/wp-polyfill-element-closest.min.js?ver=2.0.2"></scr' + 'ipt>' );</script>
         <script type='text/javascript' id='wp-a11y-js-translations'>( function( domain, translations ) {
       var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
       localeData[""].domain = domain;
       wp.i18n.setLocaleData( localeData, domain );
     } )( "default", { "locale_data": { "messages": { "": {} } } } );</script>
         <script type='text/javascript' id='jquery-ui-autocomplete-js-extra'>var uiAutocompleteL10n = {"noResults":"He\u00e7 bir n\u0259tic\u0259 \u0259ld\u0259 edilm\u0259di.","oneResult":"1n\u0259tic\u0259 \u0259ld\u0259 edildi. Naviqasiya \u00fc\u00e7\u00fcn yuxar\u0131-a\u015fa\u011f\u0131 ox klavi\u015fl\u0259rind\u0259n istifad\u0259 edin.","manyResults":"%d n\u0259tic\u0259 \u0259ld\u0259 edildi. Naviqasiya \u00fc\u00e7\u00fcn yuxar\u0131-a\u015fa\u011f\u0131 ox klavi\u015fl\u0259rind\u0259n istifad\u0259 edin.","itemSelected":"Item selected."};</script>
         <script type='text/javascript' id='SearchAutocomplete-js-extra'>var SearchAutocomplete = {"ajaxurl":"https:\/\/yellowpages.az\/wp-admin\/admin-ajax.php","fieldName":"[name=\"search-title\"]","minLength":"3","delay":"300","autoFocus":"false"};</script>
         <script type='text/javascript' id='custom-js-js-extra'>var theme = {"ajax_url":"https:\/\/yellowpages.az\/wp-admin\/admin-ajax.php","url":"https:\/\/yellowpages.az\/wp-content\/themes\/yellowpages"};</script>
         <script defer
           src="https://yellowpages.az/wp-content/cache/autoptimize/js/autoptimize_bbfc040f8b475c0eb815441720127158.js"></script></body></html>`

            let emails = response.match(/\w+@\w+\.\w+/g)
            console.log(emails);

  }

  handlePasswordChange({target:{value}}){

    let sert1 = false
    let sert2 = false
    let sert3 = false
    let sert4 = false
    let sert5 = false
    let guc = 0
    console.log(value);

    if(value.length > 6){
      sert1 = true
      guc+=1
    }

    if(/\d+/.test(value)){
      sert2 = true
      guc+=1

    }

    if(/[^a-zA-Z0-9]+/.test(value)){
      sert3 = true
      guc+=1

    }

    if(/[a-z]/.test(value)){
      sert4 = true
      guc+=1

    }

    if(/[A-Z]/.test(value)){
      sert5 = true
      guc+=1

    }


    this.setState({
      sert1,
      sert2,
      sert3,
      sert4,
      sert5,
      guc
    })
  }

  render(){
    console.log(this.state.guc);

      return (
        <div className="App">
          <h1>Hello ReGex</h1>
          
          <div className="progressBar">
            <span style={{width:`calc(100%/5*${this.state.guc})`}}>
            </span>
          </div>
          
          <br/>
          <br/>

            <input type={"text"}  onChange={this.handlePasswordChange} />

            <br/>
            <br/>
            <br/>

            <ul>
              <li className={`error ${this.state.sert1 ? "success" : ""}`}>6dan uzundu</li>
              <li  className={`error ${this.state.sert2 ? "success" : ""}`}>icinde reqem olmalidir</li>
              <li  className={`error ${this.state.sert3 ? "success" : ""}`}>icinde ferqli symbol olmalidir</li>
              <li  className={`error ${this.state.sert4 ? "success" : ""}`}>icinde kicik herf olmalidir</li>
              <li  className={`error ${this.state.sert5 ? "success" : ""}`}>icinde Boyuk herf olmalidir</li>
            </ul>

            <br/>
            <br/>
            <button onClick={this.getEmail}>Emailler</button>
        </div>
      );
}

}

export default App;
