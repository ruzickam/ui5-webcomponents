import{x as m}from"./lit-element-c5a2b594.js";import{D as v}from"./docs-a89aaec1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-8ddff560.js";import"./iframe-37c3f163.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-37069d6f.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const g={contentLayout:{control:"select",options:["MultipleSteps","SingleStep"]},default:{control:{type:"text"}},"step-change":{description:"Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.",table:{category:"events"},UI5CustomData:{parameters:[{name:"step",type:"sap.ui.webc.fiori.IWizardStep",description:"The new step."},{name:"previousStep",type:"sap.ui.webc.fiori.IWizardStep",description:"The previous step."},{name:"changeWithClick",type:"boolean",description:"The step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation."}]}}},w={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.10"};var l=Object.freeze,f=Object.defineProperty,x=(n,z)=>l(f(n,"raw",{value:l(z||n.slice())})),s,a;const b="ui5-wizard",T={title:"Fiori/Wizard",component:"Wizard",subcomponents:{WizardStep:"WizardStep"},parameters:{docs:{page:v({...w,component:b})}},argTypes:g};let e=0;const i=()=>m(s||(s=x([`
    <ui5-wizard id="wiz-`,`">
        <ui5-wizard-step icon="product" title-text="Product type" selected="">
            <div style="display: flex; min-height: 200px; flex-direction: column;">
                <ui5-title>1. Product Type</ui5-title><br/>
                <ui5-message-strip>
                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                </ui5-message-strip><br/>
                <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
                </ui5-label>
            </div>
            <ui5-button id="wiz-`,`-toStep2" design="Emphasized">Step 2</ui5-button>
        </ui5-wizard-step>
        <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">
            <div style="display: flex;flex-direction: column">
                <ui5-title>2. Product Information</ui5-title><br/>
                <ui5-label wrapping-type="Normal">
                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                </ui5-label>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                        <ui5-label>Name</ui5-label>
                        <ui5-input placeholder="product name..."></ui5-input>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>Weight</ui5-label>
                        <ui5-input value="3.65"></ui5-input>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>Manifacturer</ui5-label>
                        <ui5-select>
                            <ui5-option selected="">Apple</ui5-option>
                            <ui5-option>Samsung</ui5-option>
                            <ui5-option>Huawei</ui5-option>
                        </ui5-select>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>5 years guarantee included</ui5-label>
                        <ui5-switch id="wiz-`,`-sw"></ui5-switch>
                    </div>
                </div>
            </div>
            <ui5-button id="wiz-`,`-toStep3" design="Emphasized" hidden="">Step 3</ui5-button>
        </ui5-wizard-step>
        <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">
            <div style="display: flex; flex-direction: column;">
                <ui5-title>3. Options</ui5-title><br/>
                <ui5-label wrapping-type="Normal">
                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                </ui5-label>
                <ui5-message-strip>
                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                </ui5-message-strip><br/>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                        <ui5-label>Manifacture date</ui5-label>
                        <ui5-date-picker id="wiz-`,`-dp"></ui5-date-picker>
                    </div>
                </div>
            </div>
            <ui5-button id="wiz-`,`-finalize" hidden="" design="Emphasized">Finalize</ui5-button>
        </ui5-wizard-step>
    </ui5-wizard>
    <script>
        const wizard`,'Wiz = document.getElementById("wiz-',`");
        const wizard`,'Sw = document.getElementById("wiz-',`-sw");
        const wizard`,'Dp = document.getElementById("wiz-',`-dp");
        const wizard`,'ToStep2 = document.getElementById("wiz-',`-toStep2");
        const wizard`,'ToStep3 = document.getElementById("wiz-',`-toStep3");
        const wizard`,'Finalize = document.getElementById("wiz-',`-finalize");

        wizard`,`Wiz.addEventListener("step-change", function () {
            console.log(event.detail.step);
        });
        wizard`,`Sw.addEventListener("change", function () {
            wizard`,`ToStep3.removeAttribute("hidden");
        });
        wizard`,`Dp.addEventListener("change", function () {
            wizard`,`Finalize.removeAttribute("hidden");
        });

        wizard`,`ToStep2.addEventListener("click", function () {
            deselectAll`,"(wizard",`Wiz);
            setStep(wizard`,`Wiz, 1);
            wizard`,`ToStep2.setAttribute("hidden", true);
        });
        wizard`,`ToStep3.addEventListener("click", function () {
            deselectAll`,"(wizard",`Wiz);
            setStep(wizard`,`Wiz, 2);
            wizard`,`ToStep3.setAttribute("hidden", true);
        });
        wizard`,`Finalize.addEventListener("click", function () {
            alert("Done!");
        });

        function deselectAll`,`(wizard) {
            Array.from(wizard.children).forEach(function(step) {
                step.selected = false;
            });
        }
        function setStep(wizard, idx) {
            var step = getStep`,`(wizard, idx);
            step.selected = true;
            step.disabled = false;
        }
        function getStep`,`(wizard, idx) {
            return Array.from(wizard.children)[idx];
        }
    <\/script>
`])),++e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),t=()=>m(a||(a=x([`
    <ui5-dialog id="dialog`,`" stretch header-heading="Wizard">
        <ui5-wizard id="wiz-`,`" content-layout="SingleStep">
            <ui5-wizard-step icon="product" title-text="Product type" selected="">
                <div style="display: flex; min-height: 200px; flex-direction: column;">
                    <ui5-title>1. Product Type</ui5-title><br/>
                    <ui5-message-strip>
                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                    </ui5-message-strip><br/>
                    <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
                    </ui5-label>
                </div>
            </ui5-wizard-step>
            <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">
                <div style="display: flex;flex-direction: column">
                    <ui5-title>2. Product Information</ui5-title><br/>
                    <ui5-label wrapping-type="Normal">
                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                    </ui5-label>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                            <ui5-label>Name</ui5-label>
                            <ui5-input placeholder="product name..."></ui5-input>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>Weight</ui5-label>
                            <ui5-input value="3.65"></ui5-input>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>Manifacturer</ui5-label>
                            <ui5-select>
                                <ui5-option selected="">Apple</ui5-option>
                                <ui5-option>Samsung</ui5-option>
                                <ui5-option>Huawei</ui5-option>
                            </ui5-select>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>5 years guarantee included</ui5-label>
                            <ui5-switch id="wiz-`,`-sw"></ui5-switch>
                        </div>
                    </div>
                </div>
            </ui5-wizard-step>
            <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">
                <div style="display: flex; flex-direction: column;">
                    <ui5-title>3. Options</ui5-title><br/>
                    <ui5-label wrapping-type="Normal">
                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                    </ui5-label>
                    <ui5-message-strip>
                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                    </ui5-message-strip><br/>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                            <ui5-label>Manifacture date</ui5-label>
                            <ui5-date-picker id="wiz-`,`-dp"></ui5-date-picker>
                        </div>
                    </div>
                </div>
            </ui5-wizard-step>
        </ui5-wizard>
        <ui5-bar id="footer" slot="footer" design="Footer">
            <ui5-button id="prevButton" design="Emphasized" slot="endContent">Previous Step</ui5-button>
            <ui5-button id="nextButton" design="Emphasized" slot="endContent">Next step</ui5-button>
            <ui5-button id="wiz-`,`-finalize" design="Emphasized" slot="endContent">Finalize</ui5-button>
            <ui5-button id="cancel" design="Transparent" slot="endContent">Cancel</ui5-button>
        </ui5-bar>
    </ui5-dialog>
    <ui5-button id="button">Open dialog</ui5-button>
    <script>
        const btnOpendialog`,` = document.getElementById("button");
        const dialog`,' = document.getElementById("dialog',`");
        const nextStepButton`,` = document.getElementById("nextButton");
        const previousStepButton`,` = document.getElementById("prevButton");
        const cancelButton`,` = document.getElementById("cancel");
        const wizard`,'Wiz = document.getElementById("wiz-',`");
        const wizard`,'Finalize = document.getElementById("wiz-',`-finalize");

        const deselectAll`,` = (wizard) => {
            Array.from(wizard.children).forEach((step) => {
                step.selected = false;
            });
        }

        const getStep`,` = (wizard, idx) => {
            return Array.from(wizard.children)[idx];
        }

        const setNextStep`,` = (wizard, currentStepIndex, nextStepIndex) => {
            const nextStep = getStep`,`(wizard, nextStepIndex);
            const currentStep = getStep`,`(wizard, currentStepIndex);

            nextStep.selected = true;
            currentStep.disabled = false;
        }

        const setPreviousStep`,` = (wizard, currentStepIndex, previousStepIndex) => {
            const previousStep = getStep`,`(wizard, previousStepIndex);
            const currentStep = getStep`,`(wizard, currentStepIndex);

            previousStep.selected = true;
            currentStep.disabled = false;
        }

        const setButtonVisibility`,` = (index, totalItems) => {
            const nextButton = document.getElementById('nextButton');
            const prevButton = document.getElementById('prevButton');

            if (index === 0) {
                wizard`,`Finalize.style.display = 'none';
                prevButton.style.display = 'none';
                nextButton.style.display = 'block';
            } else if (index === totalItems - 1) {
                prevButton.style.display = 'block';
                wizard`,`Finalize.style.display = 'block';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }
        }

        btnOpendialog`,`.addEventListener("click", () => {
            dialog`,`.show();
            const index = wizard`,`Wiz.getSelectedStepIndex();
            setButtonVisibility`,"(index, wizard",`Wiz.children.length);
        });

        wizard`,`Wiz.addEventListener("ui5-step-change", (event) => {
            const index = wizard`,`Wiz.getSelectedStepIndex();
            setButtonVisibility`,"(index, wizard",`Wiz.children.length)
        });

        nextStepButton`,`.addEventListener("click", () => {
            const index = wizard`,`Wiz.getSelectedStepIndex();
            setNextStep`,"(wizard",`Wiz, index, index + 1);
            setButtonVisibility`,"(index + 1, wizard",`Wiz.children.length)
        });

        previousStepButton`,`.addEventListener("click", () => {
            const index = wizard`,`Wiz.getSelectedStepIndex();
            deselectAll`,"(wizard",`Wiz);
            setPreviousStep`,"(wizard",`Wiz, index, index - 1);
            setButtonVisibility`,"(index - 1, wizard",`Wiz.children.length)
        });

        cancelButton`,`.addEventListener("click", () => {
            dialog`,`.close();
        });

        wizard`,`Finalize.addEventListener("click", () => {
            alert("Finalize");
            dialog`,`.close();
        });
    <\/script>
`])),++e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e);var u,d,r;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
    <ui5-wizard id="wiz-\${++index}">
        <ui5-wizard-step icon="product" title-text="Product type" selected="">
            <div style="display: flex; min-height: 200px; flex-direction: column;">
                <ui5-title>1. Product Type</ui5-title><br/>
                <ui5-message-strip>
                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                </ui5-message-strip><br/>
                <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
                </ui5-label>
            </div>
            <ui5-button id="wiz-\${index}-toStep2" design="Emphasized">Step 2</ui5-button>
        </ui5-wizard-step>
        <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">
            <div style="display: flex;flex-direction: column">
                <ui5-title>2. Product Information</ui5-title><br/>
                <ui5-label wrapping-type="Normal">
                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                </ui5-label>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                        <ui5-label>Name</ui5-label>
                        <ui5-input placeholder="product name..."></ui5-input>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>Weight</ui5-label>
                        <ui5-input value="3.65"></ui5-input>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>Manifacturer</ui5-label>
                        <ui5-select>
                            <ui5-option selected="">Apple</ui5-option>
                            <ui5-option>Samsung</ui5-option>
                            <ui5-option>Huawei</ui5-option>
                        </ui5-select>
                    </div>
                    <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                        <ui5-label>5 years guarantee included</ui5-label>
                        <ui5-switch id="wiz-\${index}-sw"></ui5-switch>
                    </div>
                </div>
            </div>
            <ui5-button id="wiz-\${index}-toStep3" design="Emphasized" hidden="">Step 3</ui5-button>
        </ui5-wizard-step>
        <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">
            <div style="display: flex; flex-direction: column;">
                <ui5-title>3. Options</ui5-title><br/>
                <ui5-label wrapping-type="Normal">
                    Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                </ui5-label>
                <ui5-message-strip>
                    The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                </ui5-message-strip><br/>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                        <ui5-label>Manifacture date</ui5-label>
                        <ui5-date-picker id="wiz-\${index}-dp"></ui5-date-picker>
                    </div>
                </div>
            </div>
            <ui5-button id="wiz-\${index}-finalize" hidden="" design="Emphasized">Finalize</ui5-button>
        </ui5-wizard-step>
    </ui5-wizard>
    <script>
        const wizard\${index}Wiz = document.getElementById("wiz-\${index}");
        const wizard\${index}Sw = document.getElementById("wiz-\${index}-sw");
        const wizard\${index}Dp = document.getElementById("wiz-\${index}-dp");
        const wizard\${index}ToStep2 = document.getElementById("wiz-\${index}-toStep2");
        const wizard\${index}ToStep3 = document.getElementById("wiz-\${index}-toStep3");
        const wizard\${index}Finalize = document.getElementById("wiz-\${index}-finalize");

        wizard\${index}Wiz.addEventListener("step-change", function () {
            console.log(event.detail.step);
        });
        wizard\${index}Sw.addEventListener("change", function () {
            wizard\${index}ToStep3.removeAttribute("hidden");
        });
        wizard\${index}Dp.addEventListener("change", function () {
            wizard\${index}Finalize.removeAttribute("hidden");
        });

        wizard\${index}ToStep2.addEventListener("click", function () {
            deselectAll\${index}(wizard\${index}Wiz);
            setStep(wizard\${index}Wiz, 1);
            wizard\${index}ToStep2.setAttribute("hidden", true);
        });
        wizard\${index}ToStep3.addEventListener("click", function () {
            deselectAll\${index}(wizard\${index}Wiz);
            setStep(wizard\${index}Wiz, 2);
            wizard\${index}ToStep3.setAttribute("hidden", true);
        });
        wizard\${index}Finalize.addEventListener("click", function () {
            alert("Done!");
        });

        function deselectAll\${index}(wizard) {
            Array.from(wizard.children).forEach(function(step) {
                step.selected = false;
            });
        }
        function setStep(wizard, idx) {
            var step = getStep\${index}(wizard, idx);
            step.selected = true;
            step.disabled = false;
        }
        function getStep\${index}(wizard, idx) {
            return Array.from(wizard.children)[idx];
        }
    <\/script>
\``,...(r=(d=i.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var o,p,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => html\`
    <ui5-dialog id="dialog\${++index}" stretch header-heading="Wizard">
        <ui5-wizard id="wiz-\${index}" content-layout="SingleStep">
            <ui5-wizard-step icon="product" title-text="Product type" selected="">
                <div style="display: flex; min-height: 200px; flex-direction: column;">
                    <ui5-title>1. Product Type</ui5-title><br/>
                    <ui5-message-strip>
                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                    </ui5-message-strip><br/>
                    <ui5-label wrapping-type="Normal">Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
                    </ui5-label>
                </div>
            </ui5-wizard-step>
            <ui5-wizard-step icon="hint" title-text="Product Information" disabled="">
                <div style="display: flex;flex-direction: column">
                    <ui5-title>2. Product Information</ui5-title><br/>
                    <ui5-label wrapping-type="Normal">
                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                    </ui5-label>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                            <ui5-label>Name</ui5-label>
                            <ui5-input placeholder="product name..."></ui5-input>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>Weight</ui5-label>
                            <ui5-input value="3.65"></ui5-input>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>Manifacturer</ui5-label>
                            <ui5-select>
                                <ui5-option selected="">Apple</ui5-option>
                                <ui5-option>Samsung</ui5-option>
                                <ui5-option>Huawei</ui5-option>
                            </ui5-select>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
                            <ui5-label>5 years guarantee included</ui5-label>
                            <ui5-switch id="wiz-\${index}-sw"></ui5-switch>
                        </div>
                    </div>
                </div>
            </ui5-wizard-step>
            <ui5-wizard-step icon="action-settings" title-text="Options" disabled="">
                <div style="display: flex; flex-direction: column;">
                    <ui5-title>3. Options</ui5-title><br/>
                    <ui5-label wrapping-type="Normal">
                        Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
                    </ui5-label>
                    <ui5-message-strip>
                        The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
                    </ui5-message-strip><br/>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
                            <ui5-label>Manifacture date</ui5-label>
                            <ui5-date-picker id="wiz-\${index}-dp"></ui5-date-picker>
                        </div>
                    </div>
                </div>
            </ui5-wizard-step>
        </ui5-wizard>
        <ui5-bar id="footer" slot="footer" design="Footer">
            <ui5-button id="prevButton" design="Emphasized" slot="endContent">Previous Step</ui5-button>
            <ui5-button id="nextButton" design="Emphasized" slot="endContent">Next step</ui5-button>
            <ui5-button id="wiz-\${index}-finalize" design="Emphasized" slot="endContent">Finalize</ui5-button>
            <ui5-button id="cancel" design="Transparent" slot="endContent">Cancel</ui5-button>
        </ui5-bar>
    </ui5-dialog>
    <ui5-button id="button">Open dialog</ui5-button>
    <script>
        const btnOpendialog\${index} = document.getElementById("button");
        const dialog\${index} = document.getElementById("dialog\${index}");
        const nextStepButton\${index} = document.getElementById("nextButton");
        const previousStepButton\${index} = document.getElementById("prevButton");
        const cancelButton\${index} = document.getElementById("cancel");
        const wizard\${index}Wiz = document.getElementById("wiz-\${index}");
        const wizard\${index}Finalize = document.getElementById("wiz-\${index}-finalize");

        const deselectAll\${index} = (wizard) => {
            Array.from(wizard.children).forEach((step) => {
                step.selected = false;
            });
        }

        const getStep\${index} = (wizard, idx) => {
            return Array.from(wizard.children)[idx];
        }

        const setNextStep\${index} = (wizard, currentStepIndex, nextStepIndex) => {
            const nextStep = getStep\${index}(wizard, nextStepIndex);
            const currentStep = getStep\${index}(wizard, currentStepIndex);

            nextStep.selected = true;
            currentStep.disabled = false;
        }

        const setPreviousStep\${index} = (wizard, currentStepIndex, previousStepIndex) => {
            const previousStep = getStep\${index}(wizard, previousStepIndex);
            const currentStep = getStep\${index}(wizard, currentStepIndex);

            previousStep.selected = true;
            currentStep.disabled = false;
        }

        const setButtonVisibility\${index} = (index, totalItems) => {
            const nextButton = document.getElementById('nextButton');
            const prevButton = document.getElementById('prevButton');

            if (index === 0) {
                wizard\${index}Finalize.style.display = 'none';
                prevButton.style.display = 'none';
                nextButton.style.display = 'block';
            } else if (index === totalItems - 1) {
                prevButton.style.display = 'block';
                wizard\${index}Finalize.style.display = 'block';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }
        }

        btnOpendialog\${index}.addEventListener("click", () => {
            dialog\${index}.show();
            const index = wizard\${index}Wiz.getSelectedStepIndex();
            setButtonVisibility\${index}(index, wizard\${index}Wiz.children.length);
        });

        wizard\${index}Wiz.addEventListener("ui5-step-change", (event) => {
            const index = wizard\${index}Wiz.getSelectedStepIndex();
            setButtonVisibility\${index}(index, wizard\${index}Wiz.children.length)
        });

        nextStepButton\${index}.addEventListener("click", () => {
            const index = wizard\${index}Wiz.getSelectedStepIndex();
            setNextStep\${index}(wizard\${index}Wiz, index, index + 1);
            setButtonVisibility\${index}(index + 1, wizard\${index}Wiz.children.length)
        });

        previousStepButton\${index}.addEventListener("click", () => {
            const index = wizard\${index}Wiz.getSelectedStepIndex();
            deselectAll\${index}(wizard\${index}Wiz);
            setPreviousStep\${index}(wizard\${index}Wiz, index, index - 1);
            setButtonVisibility\${index}(index - 1, wizard\${index}Wiz.children.length)
        });

        cancelButton\${index}.addEventListener("click", () => {
            dialog\${index}.close();
        });

        wizard\${index}Finalize.addEventListener("click", () => {
            alert("Finalize");
            dialog\${index}.close();
        });
    <\/script>
\``,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const F=["Basic","PageMode"];export{i as Basic,t as PageMode,F as __namedExportsOrder,T as default};
//# sourceMappingURL=Wizard.stories-7f1ce802.js.map
