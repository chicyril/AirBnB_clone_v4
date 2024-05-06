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
  $.get("http://0.0.0.0:5001/api/v1/status/", data => {
    if (data.status == "OK") {
      $('div#api_status').addClass("available");
    } else {
      $('div#api_status').removeClass("available");
    }
  });
});
