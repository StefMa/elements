"use strict";(self.webpackChunkreactwind_showcase=self.webpackChunkreactwind_showcase||[]).push([[899],{6899:function(t,n,e){e.r(n),e.d(n,{github_version_switcher:function(){return h}});var r=e(4165),a=e(5861),s=e(5671),c=e(3144),i=e(8403),h=function(){function t(n){var e=this;(0,s.Z)(this,t),(0,i.r)(this,n),this._defaultBranch="latest",this.groups=[{name:"Versions",branches:[]},{name:"Features",branches:[]},{name:"Bugfixes",branches:[]},{name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.stripString=function(t){return t.replace(/[^a-zA-Z0-9-]/g,"")},this.fetchFromGitHubApi=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),this.setCurrentBranch=function(t){var n=window.location.href,r=t.find((function(t){return n.includes(t)}));r&&(e.currentBranch=r)},this.setBranches=function(t){var n=t.map((function(t){return t.name})).filter((function(t){return"gh-pages"!==t&&!t.includes("dependabot")}));n.forEach((function(t){t.startsWith("feat")||t.startsWith("feature")?e.groups[1].branches.push(t):t.startsWith("fix")||t.startsWith("bugfix")?e.groups[2].branches.push(t):e.groups[3].branches.push(t)})),e.setCurrentBranch(n)},this.setTags=function(t){var n=t.map((function(t){return t.name}));n.forEach((function(t){e.groups[0].branches.push(t)})),e.setCurrentBranch(n)}}return(0,c.Z)(t,[{key:"defaultBranch",get:function(){return this._defaultBranch},set:function(t){this._defaultBranch=t}},{key:"componentWillLoad",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n,e,a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.stripString(this.owner),this.cleanOwner=n,e=this.stripString(this.repo),this.cleanRepo=e,t.next=6,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(n,"/").concat(e,"/branches"));case 6:return a=t.sent,this.setBranches(a),t.next=10,this.fetchFromGitHubApi("https://api.github.com/repos/".concat(n,"/").concat(e,"/tags"));case 10:s=t.sent,this.setTags(s);case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t,n,e){if(n&&e){var r=top.location.href.split("?"),a=r[r.length-1],s=3===t.split(".").length&&t.startsWith("v");top.location="https://".concat(n,".github.io/").concat(e).concat(this._defaultBranch===t?"":"".concat(s?"/version":"/review","/").concat(t),"/?").concat(a)}}},{key:"render",value:function(){var t,n=this;return(0,i.h)(i.H,null,(null===(t=this.groups)||void 0===t?void 0:t.length)>0&&(0,i.h)("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:function(t){return n.handleChange(t.target.value,n.cleanOwner,n.cleanRepo)}},(0,i.h)("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter((function(t){var n;return(null===(n=t.branches)||void 0===n?void 0:n.length)>0})).map((function(t){return(0,i.h)("optgroup",{key:t.name,label:t.name},t.branches.map((function(e,r){return(0,i.h)("option",{key:"".concat(t.name,"-").concat(e,"-").concat(r),value:e,selected:n.currentBranch===e},e)})))}))))}}]),t}();h.style=".gh-version-switcher select{max-width:196px}"}}]);
//# sourceMappingURL=899.09ddd638.chunk.js.map