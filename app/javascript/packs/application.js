// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { dynamicPrice } from './components/dynamicPrice'
import { toggleBoutique } from './components/toggleBoutique'
import { toggleMobileNavbar } from './components/toggleMobileNavbar'
import { carousel } from './components/carousel'
import { carouselHome } from './components/carouselHome'
import { navHomePage } from './components/navbar'

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  dynamicPrice();
  toggleBoutique();
  toggleMobileNavbar();
  carousel('carouselProduit');
  carousel('carouselSalonGallery');
  carouselHome('carouselHome');
  navHomePage();
});
