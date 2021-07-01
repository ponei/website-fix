// ==UserScript==
// @name         Brainly Bypass
// @id           Brainly Bypass
// @version      1.0
// @author       ponei
// @namespace    brainly.bypass
// @include      http*://brainly.com*/tarefa/*
// @icon         https://styleguide.brainly.com.br/images/favicons/brainly/favicon-0c2222f36b.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(mut => {
        if (mut.addedNodes.length) {
            mut.addedNodes.forEach(mutNode => {
                if (mutNode.nodeName == "SCRIPT") {
                    if (mutNode.src.includes("__qpage")) {
                        mutNode.src = "";
                        observer.disconnect();
                    }
                }
            })
        }
    })
});
observer.observe(document, {childList: true, subtree: true});
