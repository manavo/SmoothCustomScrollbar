SmoothCustomScrollbar

Made by Philip Manavopoulos, 2011

I found myself wanting to have completely customized scrollbars in a site I was working on. I found a bunch of jQuery plugins that offered just that, which worked pretty well. However, I didn't like the fact that they used javascript to alter the CSS properties and make the scrolling less smooth (noticeable especially on OSX since the scroll isn't incremental on the mouse wheel).

After noticing that Facebook came up with a better solution, I figured I'd make a simple plugin to offer just that. Uses native scrolling, just adds a few more containers to hide the actual scrollbar, and add some elemnets needed for the custom scrollbar.

Examples:

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

Looking forward to any feedback you may have!

Thanks,
Philip



Current TODO List
Improve this README to support proper markdown and be formatted nicely.