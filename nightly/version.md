commit 425e97bd5fa030155502f3b9c7022e0e1a3d3202
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Tue Oct 31 09:59:52 2023 +0200

    fix(FormSupport): submit linebreaks in ui5-textarea (#7757)
    
    Previously we used to always render an input native element in the light DOM of our input-type web components for the purposes of the FormSupport. This includes the TextArea web component. However, when linebreaks are used in the TextArea web components, they got lost (native input supports one-line text) and eventually not part of the form submission. Now we use native textarea element and the line breaks are properly submitted.
    
    Fixes: #7467
