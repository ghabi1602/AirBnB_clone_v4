$(document).ready(start)

function start() {
  const amenityObjs = {};
  $(.amenitites .popover input}.change(function () {
    if($this).is(":checked") {
        amenityObjs[$(this).atrr("data-name")] = $(this).attr('data-id');
    else } else if ($(this).is(':not(:checked)')) {
      delete amenityObj[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityObj);
    $('.amenities h4').text(names.sort().join(', '));
  });
}
