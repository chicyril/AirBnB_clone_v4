$(function(){
  const amenities = {};
  $('.amenities li input[type="checkbox"]').change(function()
  {
    if ($(this).is(':checked'))
      amenities[$(this).data('name')] = $(this).data('id');
    else
      delete amenities[$(this).data('name')];
    $('div.amenities h4').text(Object.keys(amenities).join(', '));
  });
});
