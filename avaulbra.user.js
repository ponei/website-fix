// ==UserScript==
// @id             Ulbra AVA Bypass
// @name           Ulbra AVA Bypass
// @namespace      ulbra.ava.bypass
// @version        1.2
// @author         ponei
// @include        http*://servicos.ulbra.br/ava/*
// @run-at         document-start
// @iconURL        https://servicos.ulbra.br/ava/images/favicon.png
// ==/UserScript==

document.onreadystatechange = function () {
    logBypass("ESTADO: " + document.readyState);
    if (document.readyState === "interactive") {
        var modif2 = document.createElement("script");
        modif2.type = "text/javascript";
        modif2.src = 'https://jpillora.com/xhook/dist/xhook.min.js';
        document.getElementsByTagName('head')[0].appendChild(modif2);
        logBypass('referencia a biblioteca inserida');
    } else if (document.readyState === "complete") {
        var modif = document.createElement("script");
        modif.type = "text/javascript";
        modif.innerHTML = `xhook.after(function(request, response) {
if (request.url.includes("executarFuncaoNoApex")) {
let jAtiv = JSON.parse(response.data);
if (request.body.includes("roteiroItemTelaApresentacao") || request.body.includes("montaQuestionario")) {
if (jAtiv.data.data_entrega == undefined) {
if (response.data.includes(\`"permite_realizar":"N"\`)) {
logBypass("atividade encerrada encontrada");
response.data = response.data.replace(\`"permite_realizar":"N"\`,\`"permite_realizar":"S"\`);
logBypass("permitindo finalização");
alert("finalização permitida");
}
}
}
}
});

function logBypass(msg) {
console.log(\`[ponei] $\{msg\}...\`);
}
`;
        document.getElementsByTagName('head')[0].appendChild(modif);
        logBypass('javascript injetado');
    }
}

function logBypass(msg) {
    console.log(`[ponei] ${msg}...`);
}
