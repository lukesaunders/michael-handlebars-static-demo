jQuery(function() {
    function renderTemplate(path, element) {
        console.log("pulling template", path);
        var source;
        var template;

        $.get(path, function(data) {
            source    = data;
            template  = Handlebars.compile(source);
            $(element).html(template);
        });
    }

    renderTemplate('templates/header.handlebars', $('header'));
    renderTemplate('templates/footer.handlebars', $('footer'));
});
