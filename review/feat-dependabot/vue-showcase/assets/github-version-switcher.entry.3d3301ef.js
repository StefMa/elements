import{r as c,h as i,H as a}from"./index.9db95625.js";import"./vendor.fa1fd10d.js";const o=".gh-version-switcher select{max-width:196px}",l=class{constructor(e){c(this,e),this.defaultBranch="main",this.branches=[],this.currentBranch=this.defaultBranch,this.stripString=t=>t.replace(/[^a-zA-Z0-9-]/g,"")}componentWillLoad(){const e=this.stripString(this.owner);this.cleanOwner=e;const t=this.stripString(this.repo);this.cleanRepo=t,fetch(`https://api.github.com/repos/${e}/${t}/branches`).then(s=>s.json()).then(s=>{if(s){this.branches=s.map(n=>n.name).filter(n=>n!=="gh-pages");const h=window.location.href,r=this.branches.find(n=>h.includes(n));r&&(this.currentBranch=r)}})}handleChange(e,t,s){if(t&&s){const r=top.location.href.split("?"),n=r[r.length-1];top.location=`https://${t}.github.io/${s}${this.defaultBranch===e?"":`/review/${e}`}/?${n}`}}render(){var e;return i(a,null,((e=this.branches)===null||e===void 0?void 0:e.length)>0&&i("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:t=>this.handleChange(t.target.value,this.cleanOwner,this.cleanRepo)},this.branches.map((t,s)=>i("option",{key:`${t}-${s}`,value:t,selected:this.currentBranch===t},t))))}};l.style=o;export{l as github_version_switcher};
