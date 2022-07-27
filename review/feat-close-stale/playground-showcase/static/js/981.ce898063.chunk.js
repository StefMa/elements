"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[981],{4981:function(e,t,n){n.r(t),n.d(t,{db_metanavigation:function(){return c}});var i=n(5671),o=n(3144),r=n(9875),a=n(2094),c=function(){function e(t){(0,i.Z)(this,e),(0,r.r)(this,t)}return(0,o.Z)(e,[{key:"children",get:function(){return this._children},set:function(e){this._children=e}},{key:"componentWillLoad",value:function(){this.data?this.compData=(0,a.p)(this.data):(this._children=Array.from(this.host.children),this.children.find((function(e){return"li"===e.tagName.toLowerCase()}))?this.hasItemsWrapper=!0:this.host.innerHTML="")}},{key:"render",value:function(){return(0,r.h)(r.H,null,this.compData&&(0,r.h)("ul",{class:"cmp-metanavigation",innerHTML:(0,a.g)(this.compData)}),!this.compData&&(0,r.h)("ul",{class:"cmp-metanavigation"},!this.hasItemsWrapper&&this._children.map((function(e,t){return(0,r.h)("li",{key:"cmp-metanavigation-item-".concat(t),innerHTML:e.outerHTML})})),this.hasItemsWrapper&&(0,r.h)("slot",null)))}},{key:"host",get:function(){return(0,r.g)(this)}}]),e}();c.style=':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-metanavigation{display:flex;list-style:none;margin-bottom:0;margin-top:0;padding-left:0}.cmp-metanavigation li{padding-left:0.5rem;padding-right:0.5rem}.rea-footer .cmp-metanavigation li{padding-left:0.375rem;padding-right:0.375rem}.cmp-metanavigation li .elm-link{text-decoration:none}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link{font-size:0}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link::before{--icon-margin-after:0}@media screen and (max-width: 41rem){.rea-header .cmp-metanavigation li .elm-link{font-size:0}.rea-header .cmp-metanavigation li .elm-link::before{--icon-margin-after:0}}.rea-footer .cmp-metanavigation{justify-content:center;flex-wrap:wrap}@media screen and (max-width: 767px){.rea-footer .cmp-metanavigation{margin-bottom:1rem}}@media screen and (min-width: 768px){.rea-footer .cmp-metanavigation{float:right}}'},2094:function(e,t,n){n.d(t,{a:function(){return r},g:function(){return o},p:function(){return a},u:function(){return i}});var i=function(){try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}catch(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},o=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},r=function e(t,n){t.children&&Array.from(t.children).forEach((function(t){"db-link"===t.tagName.toLowerCase()&&t.setAttribute("icon-variant",n),t.children&&e(t,n)}))},a=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(t){return!1}}}}]);
//# sourceMappingURL=981.ce898063.chunk.js.map