# novi-plugin-countdown
Novi Builder Plugin for visual [jQuery Countdown](http://keith-wood.name/countdown.html) customization

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-countdown.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder

## What you are able to do
* Change type of counter (count down or count up);
* Set time for counter

## Developer Settings
* querySelector — contains a css selector which defines the Plugin container.

## How to add Countdown on your page
If your website doesn't contain Countdown follow the instructions below to install it.

### Include Countdown files to Website
Copy the "assets/countdown.js" and "assets/countdown.css" to website's JS and CSS folders respectively and include this files to your website.

### Add Countdown HTML Layout
Add basic Countdown HTML Layout:

```html
  <div class="countdown novi-countdown" data-type="until" data-time="24 Aug 2017 17:50" data-format="wdhms"></div>
```

### Initialize Countdown
```js

"use strict";

$document.ready(function () {
    var countdown = $(".countdown");
    
    if (countdown.length) {
        var i;
        for (i = 0; i < countdown.length; i++) {
          var countDownItem = countdown[i],
              d = new Date(),
              type = countDownItem.getAttribute('data-type'),
              time = countDownItem.getAttribute('data-time'),
              format = countDownItem.getAttribute('data-format'),
              settings = [];
    
          d.setTime(Date.parse(time)).toLocaleString();
          settings[type] = d;
          settings['format'] = format;
          $(countDownItem).countdown(settings);
        }
      }
});
```