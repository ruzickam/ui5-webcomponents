import{s as a}from"../../bundle.esm-db6b0aca.js";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("div");e.innerHTML=`
			<ui5-label for="input">Label:</ui5-label>
			<ui5-input id="input"></ui5-input>
		`,this.shadowRoot.append(e)}}customElements.define("label-page-custom-element",l);var i=document.getElementById("languageSelect"),u={en:"This is a label",fr:"c'est une étiquette","zh-CN":"这是一个标签","zh-Hans":"这是一个标签","zh-TW":"這是一個標籤","zh-Hant":"這是一個標籤"};function n(t){document.getElementById("differentLanguages").querySelectorAll("ui5-label").forEach(function(e){e.innerText=u[t]})}i.addEventListener("ui5-change",function(t){var e=t.detail.selectedOption.id;a(e),n(e)});n("en");
