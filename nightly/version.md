commit 842f047844ac7f06716813c2fa0ebcb3ae64c9a7
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Tue Oct 31 08:57:55 2023 +0200

    fix(ui5-calendar): focus date set in slot (#7735)
    
    fixes: #7693
    
    We are now considering the ui5-date, set trough nested element, for the focus. Previously we only focused the date passes as timestamp, and that timestamp changed based on current day, navigation and etc. We now check if we have a value set to the control and our initial focus goes to it, if the value is set after init state, we set the focus to the newly set date.
