
$('#img-file').on('change', function (e) {
var reader = new FileReader();
reader.onload = function (e) {
$("#prev-image").attr('src', e.target.result);
}
reader.readAsDataURL(e.target.files[0]);
});