$(document).ready(function() {
  //requires jquery. used to allow dropdowns with materialize css framework.
  $('.dropdown-button').dropdown({hover: false, belowOrigin: true, alignment: 'right'});
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav();
  $('.datepicker').pickadate({selectYears: 20});
  $('select').not('.disabled').material_select();
});
