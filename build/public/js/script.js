"use strict";
// Repeat star X times cuteness level
var elm = document.getElementById('cuteness-level');
if (elm) {
    var elmClasses = elm.getAttribute('class');
    var elmContent = elm.innerHTML;
    elm.innerHTML = elmContent.repeat(elmClasses);
}
