(function($) {
    $.fn.custom_scrollbar = function(options) {
        var config = $.fn.custom_scrollbar.config;

        if (options !== undefined && options != null) {
            // empty target object, so the original defaults aren't altered
            config = jQuery.extend({}, config, options);
        }

        var wrapperClassName = config.wrapperClassName;
        var contentWrapperClassName = config.contentWrapperClassName;
        var contentClassName = config.contentClassName;
        var scrollbarTrackClassName = config.scrollbarTrackClassName;
        var scrollbarClassName = config.scrollbarClassName;
        var scrollbarWidth = config.scrollbarWidth;
        var scrollbarTrackSpacing = config.scrollbarTrackSpacing;

        // is a class selector is used, we'll end up with several elements here, so we have to loop through each of them
        return $(this).each(function() {
            var wrapperDiv = $(this).find('div.' + wrapperClassName);
            var contentWrapperDiv;
            var contentDiv;
            var scrollbarTrackDiv;
            var scrollbarDiv;

            var contentWidth = ($(this).width() - scrollbarWidth - scrollbarTrackSpacing);

            // if the first child isn't our content wrapper, create it
            if (wrapperDiv.length == 0) {
                wrapperDiv = $('<div />').addClass(wrapperClassName);
                contentWrapperDiv = $('<div />').addClass(contentWrapperClassName);
                contentDiv = $('<div />').addClass(contentClassName);

                // add the current children to the content div
                $(this).children().appendTo(contentDiv);
                // add the content div to the wrapper div
                contentDiv.appendTo(contentWrapperDiv);
                // add the content wrapper div to the overall wrapper div
                contentWrapperDiv.appendTo(wrapperDiv);
                // add the wrapper div to what the current element was (so the children have just been wrapped by 2 divs)
                $(this).append(wrapperDiv);

                // scrollbar track initialization
                scrollbarTrackDiv = $('<div />');
                scrollbarTrackDiv.addClass(scrollbarTrackClassName);
                scrollbarTrackDiv.css('width', scrollbarWidth);
                scrollbarTrackDiv.css('background-color', config.scrollbarTrackColor);
                scrollbarTrackDiv.css('position', 'absolute');
                scrollbarTrackDiv.css('top', 0);
                scrollbarTrackDiv.css('height', '100%');
                scrollbarTrackDiv.appendTo(wrapperDiv);
                scrollbarTrackDiv.click(function(e) {
                    var posX = $(this).offset().left, posY = $(this).offset().top;
                    var x = e.pageX - posX, y = e.pageY - posY;

                    var scrollbarTop = parseFloat(scrollbarDiv.css('top'));
                    var scrollbarHeight = parseFloat(scrollbarDiv.css('height'));

                    // height - 40 pixels. Same jump as Chrome does
                    var scrollJump = contentWrapperDiv.height() - 40;

                    if (y < scrollbarTop) {
                        // clicked above the scrollbar
                        //scrollbarDiv.css('top', scrollbarTop-20);
                        contentWrapperDiv.scrollTop(contentWrapperDiv.scrollTop()-scrollJump);
                    } else if (y > (scrollbarTop + scrollbarHeight)) {
                        // clicked below the scrollbar
                        contentWrapperDiv.scrollTop(contentWrapperDiv.scrollTop()+scrollJump);
                    }
                });

                // scrollbar initialization
                scrollbarDiv = $('<div />');
                scrollbarDiv.addClass(scrollbarClassName);
                scrollbarDiv.css('width', scrollbarWidth);
                scrollbarDiv.css('background-color', config.scrollbarColor);
                scrollbarDiv.css('position', 'absolute');
                scrollbarDiv.css('right', 0);
                scrollbarDiv.appendTo(scrollbarTrackDiv);

                var dragging = false;

                if (jQuery.ui !== undefined) {
                    // jQueryUI loaded, so we can make the scrollbarDiv draggable
                    scrollbarDiv.draggable({
                        containment: "parent",
                        start: function() {
                            dragging = true;
                        },
                        stop: function() {
                            dragging = false;
                        },
                        drag: function(event, ui) {
                            contentWrapperDiv.scrollTop((scrollbarDiv.position().top/contentWrapperDiv.height()) * contentDiv.height());
                        }
                    });
                }

                // default CSS which will be needed for the first time
                $(this).css('overflow', 'hidden');
                wrapperDiv.css('position', 'relative');
                contentWrapperDiv.css('overflow', 'auto');
                contentWrapperDiv.css('width', '150%');
                contentWrapperDiv.css('position', 'relative');

                contentWrapperDiv.scroll(function() {
                    if (!dragging) {
                        var yScrollBar = contentWrapperDiv.scrollTop() / contentDiv.height() * $(this).height();
                        scrollbarDiv.css('top', yScrollBar);
                    }
                });
            } else {
                contentWrapperDiv = $(this).find('div.' + contentWrapperClassName);
                contentDiv = contentWrapperDiv.find('div.' + contentClassName);
                scrollbarTrackDiv = $(this).find('div.' + scrollbarTrackClassName);
                scrollbarDiv = scrollbarTrackDiv.find('div.' + scrollbarClassName);
            }

            scrollbarTrackDiv.css('left', contentWidth + scrollbarTrackSpacing);

            contentDiv.css('width', contentWidth);
            contentWrapperDiv.css('height', $(this).height());

            var scrollbarHeight;
            // only make the scrollbar visible if there is a height
            if (contentDiv.height() > $(this).height()) {
                scrollbarHeight = $(this).height() / contentDiv.height() * $(this).height();
                scrollbarTrackDiv.show();
            } else {
                scrollbarHeight = 0;
                scrollbarTrackDiv.hide();
            }
            scrollbarDiv.css('height', scrollbarHeight);

            // to initialize the positioning of the scrollbar
            contentWrapperDiv.scroll();
        });
    };

    $.fn.custom_scrollbar.config = {
        wrapperClassName: 'custom-scrollbar-wrapper',
        contentWrapperClassName: 'custom-scrollbar-content-wrapper',
        contentClassName: 'custom-scrollbar-content',
        scrollbarTrackClassName: 'custom-scrollbar-track',
        scrollbarClassName: 'custom-scrollbar',
        scrollbarWidth: 6,
        scrollbarTrackSpacing: 4,
        scrollbarColor: '#000000',
        scrollbarTrackColor: '#CCCCCC'
    };

})(jQuery);