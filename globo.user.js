// ==UserScript==
// @id             Globo AdBlock Fix
// @name           Globo AdBlock Fix
// @namespace      globo.adblock.fix
// @version        1.0
// @author         ponei
// @include        http*://*.globo.com*/*
// @iconURL        https://oglobo.globo.com/xfavicon.ico.pagespeed.ic.kyxigyT41C.png
// @run-at         document-end
// ==/UserScript==

//https://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

setInterval(function() {
    //scrollbar
    document.body.style.overflow = "scroll";
    document.body.style.position = null;
    //main warn
    removeById("detecta-adblock");
}, 1000);


function removeById(id){
    let el = document.getElementById(id);
    if (el != undefined){
        logRemove(el);
        el.remove();
    }
}

function logRemove(el) {
    console.log(`[ponei] removing ${el.outerHTML.split('>')[0]}>...`);
}

