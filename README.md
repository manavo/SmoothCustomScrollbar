# SmoothCustomScrollbar

Made by Philip Manavopoulos, 2013

I found myself wanting to have completely customized scrollbars in a site I was working on. I found a bunch of jQuery plugins that offered just that, which worked pretty well. However, I didn't like the fact that they used javascript to alter the CSS properties and make the scrolling less smooth (noticeable especially on OSX since the scroll isn't incremental on the mouse wheel).

After noticing that Facebook came up with a better solution, I figured I'd make a simple plugin to offer just that. Uses native scrolling, just adds a few more containers to hide the actual scrollbar, and add some elemnets needed for the custom scrollbar.

## Examples:

```javascript
$(document).ready(function() {
	$('.custom-scrollbar').custom_scrollbar();
});
```

OR

```javascript
var options = {scrollbarClassName: 'red-background', scrollbarTrackColor: 'transparent'};
			
$(document).ready(function() {
	$('.custom-scrollbar').custom_scrollbar();
	$('.red-custom-scrollbar').custom_scrollbar(options);
});
```

Also look at examples.html to see these examples in action.

## Screenshots

![Examples Screenshot](https://github.com/manavo/SmoothCustomScrollbar/raw/master/screenshot.png "Examples Screenshot")

Looking forward to any feedback you may have!

Thanks,
Philip



## Current TODO List
* Figure out how to improve overriding the colors of the scrollbar and scrollbar track (so it doesn't need the !important in the CSS class rule)

## License

The MIT License

Copyright (c) 2013, Philip Manavopoulos <@manavo>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
