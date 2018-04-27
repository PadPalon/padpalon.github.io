$(function() {
    let container = $(".container");
    container.on("show.bs.collapse",".collapse", function() {
        container.find(".collapse.show").collapse("hide");
    });
});