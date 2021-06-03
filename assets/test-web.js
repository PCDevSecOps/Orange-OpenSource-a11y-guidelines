$(document).ready(function(){function a(a,b){const c=b||h;if(!i.hasOwnProperty(c))throw new Error(`translate(): Translation's locale \`${c}\` does not exist`);if(!i[c].hasOwnProperty(a))throw new Error(`translate(): Translation's key \`${a}\` does not exist for locale \`${c}\``);return i[c][a]}//requette XMLHttpRequest
function b(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE)return 200===this.status?b(null,this.responseText):b({errCode:this.status,errMsg:this.statusText})},c.open("GET",a,!0),c.send(null)}//appel des Json
function c(){let a=document.getElementById("refTests");a.innerHTML="<div class=\"alert alert-warning\">Erreur chargement ressource JSON</div>"}//on concatene les 2 jsons en les réorganisant par tests
function d(c,a){// si les titres sont identiques, on regroupe par titre
for(var b=0;b<c.length;b++){let f=c[b].title;for(var d,e=0;e<a.length;e++)d=a[e].title,f==d&&(c.splice(b++,0,a[e]),a.splice(e,1))}//sinon on regroupe les tests par themes
for(var b=0;b<c.length;b++){let d=c[b].themes;for(var f,e=0;e<a.length;e++)f=a[e].themes,d==f&&(c.splice(b,0,a[e]),a.splice(e,1))}return c}// function encode(str){
// str=str.replace(/[\x26\x0A\<>'"^]/gi, function(r){return"&#"+r.charCodeAt(0)+";"});
// str=str.replace(/\&#60;code\&#62;([\s\S]*?)\&#60;\/code\&#62;/g, '<code>$1</code>');
// return str;
// }
function e(a){return a=a.toLowerCase(),a=a.replace(/é|è|ê/g,"e"),a=a.replace(/ /g,"-"),a}//supprimer les doublons dans les filtres
function f(a,b){for(var c=0;c<a.length;c++){//for (let condition of arrCond) {
let d=a[c];if(d.name==b){let b=a.indexOf(d);a.splice(b,1)}}return a}function g(b,c){var g=JSON.parse(b),h=JSON.parse(c),j=[],k=d(g,h);let l=new function(){// Récupération des données
//this.refTests = refTests;
// Retourne la liste des checkboxes
// Retourne les tests filtrés
this.UpdateTypes=function(a,b){let c=[];for(let d in b)for(let a in b[d].type)c.push(b[d].type[a]);let d=c.filter(function(a,b,c){return c.indexOf(a)===b});for(let c in a){var e=document.getElementById("type"+c);e.disabled=!0;var f=document.getElementById("labelType"+c);f.classList.add("disabled")}for(let c in a)for(let b in d)if(a[c]==d[b]){var e=document.getElementById("type"+c);e.disabled=!1;var f=document.getElementById("labelType"+c);f.classList.remove("disabled")}},this.UpdateFeedback=function(b,c){let d=document.getElementById("reinit"),e=document.getElementById("feedback"),f="",g=1<c?"tests":"test";if(b){d.disabled=!1,f="<p><div><b>"+c+"</b> "+g+" "+a("withCurrentFilters")+"</div> <button type=\"button\" class=\"btn btn-secondary btn-sm mt-2 mb-3\" id=\"reinitLink\">"+a("reinitFilters")+"</a></p>",e.innerHTML=f;let b=document.getElementById("reinitLink");b.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)})}else d.disabled=!0,f="<p><b>"+c+"</b> "+a("ongoingTests")+"</p>",e.innerHTML=f},this.FetchAll=function(b){// Selection de l'élément
let c=document.getElementById("refTests"),d="",f="";//on boucle dans le tableau passé en paramètre de la fonction
for(let c in b){if(f!=b[c].themes){let a="0"===c?"":" class=\"pt-5\"";f=b[c].themes,d+="<h2 id=\"test-"+e(b[c].themes)+"\""+a+">"+b[c].themes+"</h2>"}for(let e in d+="<article class=\"card\"><div class=\"card-header\" id=\"heading"+c+"\"><h3 class=\"card-title mb-0\"><a class=\"\" role=\"button\" data-toggle=\"collapse\" href=\"#collapse"+c+"\" aria-expanded=\"false\" aria-controls=\"collapse"+c+"\"><span class=\"accordion-title h6 mb-0 flex-grow-1\">"+b[c].title+"</span><span class=\"badge badge-pill badge-light mr-2 align-self-center\">"+("Concepteur"==b[c].profils[0]?a("conception"):a("development"))+"</span></a></h3>",d+="</div><div id=\"collapse"+c+"\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading"+c+"\">",d+="<div class=\"card-block\"><div class=\"row\">",d+="<div class=\"col-lg-6\"><h4>"+a("process")+"</h4><ol>",b[c].tests)d+="<li>"+b[c].tests[e]+"</li> ";for(let e in d+="</ol></div>",d+="<div class=\"col-lg-6\"><h4>"+a("check")+"</h4><ol>",b[c].verifier)d+="<li>"+b[c].verifier[e]+"</li> ";for(let e in d+="</ol></div>",d+="</div>",d+="<div class=\"row\">",d+="<div class=\"col-lg-12\"><h4>"+("Concepteur"==b[c].profils[0]?a("justification"):a("results"))+"</h4><ol>",b[c].resultat)d+="<li>"+b[c].resultat[e]+"</li> ";for(let e in d+="</ol></div>",d+="</div>",b[c].exception&&(d+="<div class=\"row\"><div class=\"col-lg-12\" ><h4>"+a("exceptions")+"</h4>",d+="<p>"+b[c].exception+"</p> ",d+="</div>",d+="</div>"),d+="</div><div class=\"card-footer text-muted\"><b>"+a("profiles")+": </b>",b[c].profils)d+=b[c].profils[e],e==b[c].profils.length-1?"":d+=",  ";for(let e in d+="<br />"+(0<b[c].type.length?"<b>"+a("tools")+": </b>":""),b[c].type)d+="<i class=\"fa fa-tag\" aria-hidden=\"true\"></i> "+b[c].type[e]+" ";d+="</div>",d+="</div></article>"}// Affichage de l'ensemble des lignes en HTML
c.innerHTML=0===b.length?"<div class=\"alert alert-warning\">"+a("noResults")+"</div>":d},this.DisplayFilters=function(){let b=document.getElementById("filter-footer"),c="";c+="<button id=\"reinit\" class=\"btn btn-secondary\" disabled>"+a("reinitFilters")+"</button>",b.innerHTML=c;let d=document.getElementById("reinit");d.addEventListener("click",function(){l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)});// Selection de l'élément
let e=document.getElementById("types"),f=[],g=document.getElementById("profils"),h=[];// Chaque ligne (test)
for(let a in k){// Chaque "type" dans chaque ligne (test)
for(let b in k[a].type)f.push(k[a].type[b]);// Chaque "profil" dans chaque ligne (test)
for(let b in k[a].profils)h.push(k[a].profils[b])}//let uniqueTypes = types.filter( (value, index, self) => self.indexOf(value) === index );
j=f.filter(function(a,b,c){return c.indexOf(a)===b}),j.sort(function(c,a){return c.toLowerCase().localeCompare(a.toLowerCase())});let m="";for(let b in m+="<li><input type=\"radio\" id=\"typeAll\" name=\"types\" value=\"typeAll\" checked> <label for=\"typeAll\">"+a("allTools")+"</label>",j)m+="<li><input type=\"radio\" id=\"type"+b+"\" name=\"types\" value=\""+j[b]+"\"> <label for=\"type"+b+"\" id=\"labelType"+b+"\">"+j[b]+"</label></li>";//let uniqueProfils = profils.filter( (value, index, self) => self.indexOf(value) === index );
let n=h.filter(function(a,b,c){return c.indexOf(a)===b}),o="";for(let a in n)o+="<li><input type=\"radio\" id=\"profil"+a+"\" name=\"profil\" value=\""+n[a]+"\"> <label for=\"profil"+a+"\">"+n[a]+"</label></li>";e.innerHTML=m,g.innerHTML=o},this.FilterByType=function(){this.DisplayFilters();let a=document.querySelectorAll("input"),b=[],c=[],e=[],g=this,h=!1;/*
        //init array conditions avec valeur Expert Accessibilité
        arrProfil.push("Expert Accessibilité");

        conditions.unshift(function(item) {
          return item.profils.indexOf(arrProfil[0]) !== -1;
        });

        //on nomme la fonction, pour les boutons radio on utilise this.name
        Object.defineProperty(conditions[0], 'name', {value: this.name, writable: false});
        */for(var m=0;m<a.length;m++){let d=a[m];d.addEventListener("click",function(){this.checked&&"profil"===this.name&&(c=[],c.push(d.value)),this.checked&&"typeAll"===this.id?b=[]:this.checked&&"types"===this.name&&(b=[],b.push(d.value));let a=b.length+c.length;0<a?(1==a?(1===c.length&&(f(e,this.name),e.unshift(function(a){//return item.profils === arrProfil[0];
return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),h=!0),1===b.length&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),h=!1)):(this.checked&&"profil"===this.name&&(f(e,this.name),e.unshift(function(a){return-1!==a.profils.indexOf(c[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),h=!0),this.checked&&"types"===this.name&&"allType"!=this.id&&(f(e,this.name),e.unshift(function(a){return-1!==a.type.indexOf(b[0])}),Object.defineProperty(e[0],"name",{value:this.name,writable:!1}),h=!1)),filteredTest=k.filter(function(a){return e.every(function(b){return b(a)})}),l.FetchAll(filteredTest),h&&l.UpdateTypes(j,filteredTest),l.UpdateFeedback(!0,filteredTest.length)):l.FetchAll(k)})}}};// Affichage de tous les tests
// Filtrage
l.FetchAll(k),l.FilterByType(),l.UpdateFeedback(!1,k.length)}const h=document.documentElement.getAttribute("lang");if(!h)throw new Error("A lang attribute must be set on the <html> tag !");const i={en:{process:"Process",check:"To check",conception:"Design",development:"Development",results:"Results",justification:"Justification",profiles:"Profiles",tools:"Tools",allTools:"All tools",exceptions:"Exceptions",ongoingTests:"ongoing tests",noResults:"No results match your selection",withCurrentFilters:"with current filters",reinitFilters:"Reinit <span class=\"sr-only\">&nbsp;filters</span>"},fr:{process:"Proc\xE9dures",check:"A v\xE9rifier",conception:"Conception",development:"D\xE9veloppement",results:"R\xE9sultats",justification:"Justification",profiles:"Profils",tools:"Outils",allTools:"Tous les outils",exceptions:"Exceptions",ongoingTests:"tests en cours",noResults:"Aucun r\xE9sultat ne correspond \xE0 votre s\xE9lection",withCurrentFilters:"dans les filtres en cours",reinitFilters:"R\xE9initialiser <span class=\"sr-only\">&nbsp;les filtres</span>"}};b("https://a11y-guidelines.orange.com/fr/web/la-va11ydette/json/tests-web-"+h+".json",function(a,d){return a&&c(),b("https://a11y-guidelines.orange.com/assets/json/"+h+"/tests-concepteur.json",function(a,b){return a&&c(),g(d,b)})})});