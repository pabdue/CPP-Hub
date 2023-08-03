document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = 'libs/jquery-3.7.0.js';
    document.head.appendChild(script);

    script.onload = function() {
        $(document).ready(function() {
            $('#searchBar').on('keyup', function() {
                var searchValue = $(this).val().toLowerCase();
                $('.extension-content .message').each(function() {
                    var message = $(this);
                    var hasMatchingLinks = false;
                    $(this).find('.buttons a').each(function() {
                        var linkText = $(this).text().toLowerCase();
                        if (linkText.indexOf(searchValue) > -1) {
                            $(this).show();
                            hasMatchingLinks = true;
                        } else {
                            $(this).hide();
                        }
                    });
                    if (hasMatchingLinks) {
                        message.show();
                    } else {
                        message.hide();
                    }
                });
            });
        });
    };
});
