Plugin created for educational purposes so do not use them in real projects


# jQuery.trunc plugin

Truncates text is  plugin for jQuery which truncates text and adds &hellip; to the end if text has too many characters limited by consumer of plugin inputted value. Click on `'...'` should allow you to see the whole text. 


### Installation
Add downloaded plugin in the Header:
```sh
<script type="text/javascript" src="jquery.truncates.js"></script>
```
### Usage
It can be used on element which include the text inside.
Include invocation of trunk in the bottom of body:
```sh
$('.paragraph').trunc(100)
```
or use The Document Ready Event:
```sh
$( document ).ready(function() {
   $('.paragraph').trunc(100);
});
```
Trunc can accept as first argument amount of characters wich consumer want to show in the start page and as second argument an object of additional settings. There are Default Settings Object
```sh
{   'hellip': '&hellip;',  //text of link for showing full text
    'secondPartClass':'continue',  //class name for second part of text
    'hellipClass':'hellip',  //class name for second part for link
    }
```
You can change a text of link `'...'` to `'>>read more'`, and for more comfortable use you can change name of class for new `<span>` elements.  Invokation Example with all arguments:
```sh
$('.paragraph').trunc(200,{
            'hellip': '>>read more',
            'secondPartClass':'lastPartOfParagraph',
            'hellipClass':'button',
        });
});
```
As you see, using this plugin is very simple and can save your precious time.
