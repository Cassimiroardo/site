var tab = document.form_gallery.gallery_nav;
for (var i = 0; i < tab.length; i++) {
    tab[i].onclick = function () {
        changeImages(this);
    }
};
function changeImages(e) {
    switch (e.id) {
        case "radio-tab1":
            $(".section-gallery .table .tab2").css("display", "none")
            $(".section-gallery .table .tab3").css("display", "none")
            $(".section-gallery .table .tab1").css("display", "grid")
            $(".section-gallery .gallery-nav label:nth-child(1)").css("color", "black")
            $(".section-gallery .gallery-nav label:nth-child(2)").css("color", "var(--light_green)")
            $(".section-gallery .gallery-nav label:nth-child(3)").css("color", "var(--light_green)")
            break;
        case "radio-tab2":
            $(".section-gallery .table .tab1").css("display", "none")
            $(".section-gallery .table .tab3").css("display", "none")
            $(".section-gallery .table .tab2").css("display", "grid")
            $(".section-gallery .gallery-nav label:nth-child(1)").css("color", "var(--light_green)")
            $(".section-gallery .gallery-nav label:nth-child(2)").css("color", "black")
            $(".section-gallery .gallery-nav label:nth-child(3)").css("color", "var(--light_green)")
            break;
        case "radio-tab3":
            $(".section-gallery .table .tab1").css("display", "none")
            $(".section-gallery .table .tab2").css("display", "none")
            $(".section-gallery .table .tab3").css("display", "grid")
            $(".section-gallery .gallery-nav label:nth-child(1)").css("color", "var(--light_green)")
            $(".section-gallery .gallery-nav label:nth-child(2)").css("color", "var(--light_green)")
            $(".section-gallery .gallery-nav label:nth-child(3)").css("color", "black")
            break;
    }
}