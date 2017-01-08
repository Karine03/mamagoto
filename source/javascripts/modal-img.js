
$(document).ready(function() {
	$(document).on("click", ".modal-link", function() {
		var imageId = $(this).parents(".picture-card").attr("id");
		var imageUrl = document.getElementById(imageId).style.backgroundImage;
		var imageSrc = "images/gallery/gallery" + imageId + ".jpg"
		$("#modal-img").closest
		$("#image-src").attr("src", imageSrc);
	});
});
