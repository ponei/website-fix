// ==UserScript==
// @id             Estadao Paywall Remover
// @name           Estadao Paywall Remover
// @namespace      estadao.paywall.remover
// @version        1.0
// @author         ponei
// @include        http*://*.estadao.com.*/*
// @include        http*://*.ae.com.*/*
// @include        http*://brpolitico.com.*/*
// @include        http*://esportefera.com.*/*
// @iconURL        https://statics.estadao.com.br/s2016/portal/logos/favicon/favicon.ico
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
    //main warn
    removeById("paywall-wrapper-iframe-estadao");
    //make scrollbar appear again
    let htmlBase = document.getElementsByTagName("html");
    if (htmlBase !== undefined){
        htmlBase[0].style.width = null;
        htmlBase[0].style.position = null;
        htmlBase[0].style.top = null;
        htmlBase[0].style.overflow = null;
    }
    //ads
    removeByClass("mold-assine");
    removeByClass("lgpd-modal-content");
}, 1000);

function removeById(id){
    let el = document.getElementById(id);
    if (el != undefined){
        logRemove(el);
        el.remove();
    }
}

function removeByClass(classN){
    for (let el of document.getElementsByClassName(classN)){
        logRemove(el);
        el.remove();
    }
}

function logRemove(el) {
    console.log(`[ponei] removing ${el.outerHTML.split('>')[0]}>...`);
}

