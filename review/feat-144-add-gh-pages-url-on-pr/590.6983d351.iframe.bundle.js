"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[590],{"./packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_accordion:()=>DbAccordion});var _index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-96b5c21f.js");function cov_2q8mtr1wpq(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f91def77d7b84384bbd9627bcff95dfdc3ce18d7"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-accordion.entry.js",statementMap:{0:{start:{line:3,column:23},end:{line:3,column:4734}},1:{start:{line:5,column:20},end:{line:16,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:11,column:4},end:{line:11,column:26}},4:{start:{line:14,column:4},end:{line:14,column:178}},5:{start:{line:17,column:0},end:{line:17,column:35}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:12,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:13,column:2},end:{line:13,column:3}},loc:{start:{line:13,column:11},end:{line:15,column:3}},line:13}},branchMap:{0:{loc:{start:{line:14,column:68},end:{line:14,column:98}},type:"cond-expr",locations:[{start:{line:14,column:84},end:{line:14,column:90}},{start:{line:14,column:93},end:{line:14,column:98}}],line:14}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f91def77d7b84384bbd9627bcff95dfdc3ce18d7"});var actualCoverage=coverage[path];return cov_2q8mtr1wpq=function(){return actualCoverage},actualCoverage}cov_2q8mtr1wpq();var dbAccordionCss=(cov_2q8mtr1wpq().s[0]++,'@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-accordion{border-bottom:1px solid #d7dce1;padding-left:var(--db-accordion---paddingLeft);padding-right:1rem;--db-accordion---paddingLeft:2.875rem}.cmp-accordion summary{height:3rem;display:flex;align-items:center;transform:translateX(calc(var(--db-accordion---paddingLeft) * -1));width:calc(\n\t\t\t100% + var(--db-accordion---paddingLeft) + 1rem\n\t\t)}.cmp-accordion summary::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-accordion summary::before{content:var(--icon-glyph)/""}}@media aural{.cmp-accordion summary::before{content:none}}@media speech{.cmp-accordion summary::before{content:none}}.cmp-accordion summary::-webkit-details-marker{display:none}.cmp-accordion summary:first-of-type{list-style-type:none}.cmp-accordion summary::before{margin-left:0.875rem;--icon-margin-after:0.5rem}.cmp-accordion summary+p{margin-top:0}.cmp-accordion[open]>summary::before{content:"⌃"}.cmp-accordion[data-emphasis=high]{--db-accordion---paddingLeft:3.375rem}.cmp-accordion[data-emphasis=high] summary{font-weight:700;height:3.5rem}.cmp-accordion[data-emphasis=high] summary::before{--icon-font-size:2rem}.cmp-accordion[data-size=small]{--db-accordion---paddingLeft:2.125rem}.cmp-accordion[data-size=small] summary{height:2.5rem;font-size:0.875rem}.cmp-accordion[data-size=small] summary::before{--icon-font-size:1.25rem;margin-left:0.375rem;--icon-margin-after:0.375rem}.cmp-accordion[data-size=large]{--db-accordion---paddingLeft:3.375rem}.cmp-accordion[data-size=large] summary{height:4rem;font-size:1.25rem}.cmp-accordion[data-size=large] summary::before{--icon-font-size:2rem}');cov_2q8mtr1wpq().s[1]++;var DbAccordion=function(){function DbAccordion(hostRef){cov_2q8mtr1wpq().f[0]++,cov_2q8mtr1wpq().s[2]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2q8mtr1wpq().s[3]++,this.size="regular"}return DbAccordion.prototype.render=function render(){return cov_2q8mtr1wpq().f[1]++,cov_2q8mtr1wpq().s[4]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("details",{class:"cmp-accordion","data-emphasis":this.emphasis?(cov_2q8mtr1wpq().b[0][0]++,"high"):(cov_2q8mtr1wpq().b[0][1]++,!1),"data-size":this.size},(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("summary",null,this.summary),(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))},DbAccordion}();cov_2q8mtr1wpq().s[5]++,DbAccordion.style=dbAccordionCss}}]);