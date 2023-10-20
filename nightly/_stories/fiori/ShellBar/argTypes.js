export default {
    "copilotDomRef": {
        "control": {
            "type": false
        }
    },
    "logoDomRef": {
        "control": {
            "type": false
        }
    },
    "notificationsDomRef": {
        "control": {
            "type": false
        }
    },
    "overflowDomRef": {
        "control": {
            "type": false
        }
    },
    "productSwitchDomRef": {
        "control": {
            "type": false
        }
    },
    "profileDomRef": {
        "control": {
            "type": false
        }
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "logo": {
        "control": {
            "type": "text"
        }
    },
    "menuItems": {
        "control": {
            "type": "text"
        }
    },
    "profile": {
        "control": {
            "type": "text"
        }
    },
    "searchField": {
        "control": {
            "type": "text"
        }
    },
    "startButton": {
        "control": {
            "type": "text"
        }
    },
    "closeOverflow": {
        "description": "Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event",
        "table": {
            "category": "methods"
        }
    },
    "co-pilot-click": {
        "description": "Fired, when the co pilot is activated.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "dom ref of the activated element"
                }
            ]
        }
    },
    "logo-click": {
        "description": "Fired, when the logo is activated.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "dom ref of the activated element"
                }
            ]
        }
    },
    "menu-item-click": {
        "description": "Fired, when a menu item is activated <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "DOM ref of the activated list item"
                }
            ]
        }
    },
    "notifications-click": {
        "description": "Fired, when the notification icon is activated.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "dom ref of the activated element"
                }
            ]
        }
    },
    "product-switch-click": {
        "description": "Fired, when the product switch icon is activated. <b>Note:</b> You can prevent closing of overflow popover by calling <code>event.preventDefault()</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "dom ref of the activated element"
                }
            ]
        }
    },
    "profile-click": {
        "description": "Fired, when the profile slot is present.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "dom ref of the activated element"
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "0.8.0"
};
//# sourceMappingURL=argTypes.js.map