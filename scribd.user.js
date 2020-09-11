// ==UserScript==
// @id             Scribd Paywall Remover
// @name           Scribd Paywall Remover
// @namespace      scribd.paywall.remover
// @version        1.0
// @author         ponei
// @include        http*://*.scribd.com/*
// @iconURL        http://www.scribd.com/favicon.ico
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
    //selectable
    for (let el of document.getElementsByClassName("blurred_page")){
        el.classList.remove("blurred_page");
    }
    //ad warn
    removeByClass("auto__doc_page_webpack_doc_page_blur_promo");
    //pdf images fix
    for (let el of document.getElementsByClassName("absimg")){
        if (el.style.opacity != 1) {
            logChange(el);
            el.style.opacity = "1";
        }
    }
    //text unblur
    for (let el of document.getElementsByClassName("text_layer")){
        if (el.style.textShadow != "rgb(0, 0, 0) 0px 0px 0px") {
            logChange(el);
            el.style.color = "#000";
            el.style.textShadow = "0px 0px 0px #000";
        }
    }
}, 1000);

function removeByClass(classN){
    for (let el of document.getElementsByClassName(classN)){
        logRemove(el);
        el.remove();
    }
}

function logRemove(el) {
    console.log(`[ponei] removing ${el.outerHTML.split('>')[0]}>...`);
}

function logChange(el) {
    console.log(`[ponei] changing ${el.outerHTML.split('>')[0]}>...`);
}
