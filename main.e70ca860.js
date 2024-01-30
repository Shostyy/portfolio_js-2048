parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}var r=document.getElementById("gameArea"),l=function(){function i(){e(this,i),this.field=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.isGameOver=!1,this.totalValue=0}return t(i,[{key:"startGame",value:function(){this.clearField(),this.putRandomNumber(),this.putRandomNumber(),this.countTotalValue(),this.reRender()}},{key:"clearField",value:function(){for(var e=0;e<4;e++)for(var i=0;i<4;i++)this.field[e][i]=0}},{key:"putRandomNumber",value:function(){if(!this.isFieldFull())for(var e=!1;!e;){var i=Math.floor(4*Math.random()),t=Math.floor(4*Math.random()),r=Math.random()<.9?2:4;0===this.field[i][t]&&(this.field[i][t]=r,e=!0)}}},{key:"reRender",value:function(){r.innerHTML="";var e=this.field.map(function(e){var i=e.map(function(e){return 0!==e?'<td class="field-cell field-cell--'.concat(e,'">').concat(e,"</td>"):'<td class="field-cell"></td>'});return'<tr class="field-row">'.concat(i.join(""),"</tr>")});r.innerHTML=e.join("")}},{key:"goUp",value:function(){for(var e=0;e<4;e++)for(var i=1;i<4;i++)if(0!==this.field[i][e])for(var t=i;t>0&&(0===this.field[t-1][e]||this.field[t-1][e]===this.field[t][e]);)this.field[t-1][e]===this.field[t][e]?(this.field[t-1][e]*=2,this.field[t][e]=0):0===this.field[t-1][e]&&(this.field[t-1][e]=this.field[t][e],this.field[t][e]=0),t--;this.putRandomNumber()}},{key:"goDown",value:function(){for(var e=0;e<4;e++)for(var i=2;i>=0;i--)if(0!==this.field[i][e])for(var t=i;t<3&&(0===this.field[t+1][e]||this.field[t+1][e]===this.field[t][e]);)this.field[t+1][e]===this.field[t][e]?(this.field[t+1][e]*=2,this.field[t][e]=0):0===this.field[t+1][e]&&(this.field[t+1][e]=this.field[t][e],this.field[t][e]=0),t++;this.putRandomNumber()}},{key:"goLeft",value:function(){for(var e=0;e<4;e++)for(var i=1;i<4;i++)if(0!==this.field[e][i])for(var t=i;t>0&&(0===this.field[e][t-1]||this.field[e][t-1]===this.field[e][t]);)this.field[e][t-1]===this.field[e][t]?(this.field[e][t-1]*=2,this.field[e][t]=0):0===this.field[e][t-1]&&(this.field[e][t-1]=this.field[e][t],this.field[e][t]=0),t--;this.putRandomNumber()}},{key:"goRight",value:function(){for(var e=0;e<4;e++)for(var i=2;i>=0;i--)if(0!==this.field[e][i])for(var t=i;t<3&&(0===this.field[e][t+1]||this.field[e][t+1]===this.field[e][t]);)this.field[e][t+1]===this.field[e][t]?(this.field[e][t+1]*=2,this.field[e][t]=0):0===this.field[e][t+1]&&(this.field[e][t+1]=this.field[e][t],this.field[e][t]=0),t++;this.putRandomNumber()}},{key:"isGameOverMethod",value:function(){for(var e=0;e<4;e++)for(var i=0;i<4;i++)if(0===this.field[e][i])return!1;for(var t=0;t<4;t++)for(var r=0;r<3;r++)if(this.field[t][r]===this.field[t][r+1])return!1;for(var l=0;l<4;l++)for(var a=0;a<3;a++)if(this.field[a][l]===this.field[a+1][l])return!1;this.isGameOver=!0}},{key:"countTotalValue",value:function(){for(var e=0,i=0;i<4;i++)for(var t=0;t<4;t++)e+=this.field[i][t];this.totalValue=e}},{key:"isFieldFull",value:function(){for(var e=0;e<4;e++)for(var i=0;i<4;i++)if(0===this.field[e][i])return!1;return!0}},{key:"has2048Value",value:function(){for(var e=0;e<4;e++)for(var i=0;i<4;i++)if(2048===this.field[e][i])return!0;return!1}}]),i}(),a=new l,f=document.getElementById("gameScore"),s=document.getElementById("buttonStart"),n=document.getElementById("startMessage"),o=document.getElementById("winMessage"),d=document.getElementById("loseMessage");function h(e){switch(e.key){case"ArrowUp":a.goUp();break;case"ArrowDown":a.goDown();break;case"ArrowLeft":a.goLeft();break;case"ArrowRight":a.goRight()}a.reRender(),a.countTotalValue(),a.isGameOverMethod(),a.has2048Value()&&o.classList.remove("hidden"),a.isGameOver&&(document.removeEventListener("keydown",h),d.classList.remove("hidden")),f.innerText=a.totalValue}s.onclick=function(){a.startGame(),n.classList.add("hidden"),s.classList.remove("start"),s.classList.add("restart"),s.innerText="Restart",document.addEventListener("keydown",h),f.innerText=a.totalValue};
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.e70ca860.js.map