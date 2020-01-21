import Vue from "./vue.js";
import { NH3 } from "../StyledHTML/Typography.vue";
import { DialogButton } from "../StyledHTML/Button.vue";
import { VueInput } from "../StyledHTML/Input.vue";
import { FlexRow, FlexColumn } from "../Layout/flexColumn.vue";
import Theme from "../DesignSystem/theme.js";

export const VueMeDialog = Vue.component('vueme-dialog', {
    components: {
        NH3, DialogButton, VueInput, FlexRow, FlexColumn,
    },
    data: function () {
        return {
            theme: Theme,
            enabled: false,
            autoClose: false,
            closeTime: 10,
            intervalId: null,
            autoCloseIndex: -1,
            fieldValues: {

            },
            dialogConfiguration: {
                show: false,
                type: "vueme-default-dialog",
                title: "Alert",
                icon: "",
                content: "This is an alert.",
                backgroundDismiss: false,
                buttons: [],
                fields: [],
                dialogClass: "vueme-dialog-animation"
            }
        }
    },
    props: {
        destruct: {
            type: Boolean,
            default: true
        }
    },
    mounted: function () {
        var self = this;
        Vue.config.silent = true;
        if (self.destruct) {
            self.$destroy();
            self.$el.parentNode.removeChild(self.$el);
        }
    },
    template: `
        <div class="vueme-dialog-container" v-if="dialogConfiguration.show">
        <transition name="vueme-dialog-backdrop-animation">
            <div class="vueme-dialog-backdrop" v-if="dialogConfiguration.show" @click="closeDialog" ref="backdrop">
            </div>
        </transition>
        <transition :name="dialogConfiguration.dialogClass">
            <div v-if="dialogConfiguration.show" :class="dialogClass" ref="dialogBox">
                <div class="vueme-dialog-content-container">
                    <div class="vueme-title-container">
                        <span v-html="dialogConfiguration.icon"></span>
                        <n-h3 style="margin: 0px">{{dialogConfiguration.title}}</n-h3>
                    </div>
                    <div class="vueme-dialog-content">
                        <div v-html="dialogConfiguration.content"></div>
                        <form v-if="dialogConfiguration.fields.length > 0">
                            <vue-input
                                v-for="field in dialogConfiguration.fields"
                                :key="'field' + field.id"
                                :name="'field' + field.id"
                                :input-type="field.fieldType"
                                :label="field.label"
                                @input="fieldValues[field.id] = $event">
                            </vue-input>
                        </form>
                    </div>
                    <div class="vueme-dialog-button-container">
                        <dialog-button
                            v-for="(button, index) in dialogConfiguration.buttons"
                            :key="'button' + button.id"
                            @click="callFunction(button)"
                            :flavor="button.flavor"
                            :dialog-theme="theme"
                            :small="true">
                                {{button.text}}
                                <span v-if="index == autoCloseIndex">({{closeTime}})</span>
                        </dialog-button>
                    </div>
                </div>
            </div>
        </transition>
        </div>
    `,
    methods: {
        handleAutoClose: function () {
            var self = this;
            if (self.closeTime == 0) {
                clearInterval(self.intervalId)
                self.callFunction(self.dialogConfiguration.buttons[self.autoCloseIndex])
            }
            else {
                self.closeTime--;
            }
        },
        beginAutoClose: function () {
            var self = this;
            self.intervalId = setInterval(self.handleAutoClose, 1000)
        },
        callFunction: function (button) {
            var self = this;
            if (self.enabled) {
                var close = button.action(self.fieldValues);
                if (close !== false) {
                    self.close();
                }
            }
        },
        close: function () {
            var self = this;
            if (self.enabled) {
                self.enabled = false;
                if (self && self.$refs && self.$refs.dialogBox) {
                    self.$refs.dialogBox.classList.remove("vueme-dialog-open");
                    self.$refs.dialogBox.classList.add("vueme-dismiss-dialog");
                }
                if (self && self.$refs && self.$refs.backdrop)
                    self.$refs.backdrop.classList.remove("vueme-dialog-backdrop-open");
                setTimeout(function () {
                    self.dialogConfiguration.show = false;
                    self.$destroy();
                    self.$el.parentNode.removeChild(self.$el);
                }, 420);
            }
        },
        open: function () {
            var self = this;
            self.dialogConfiguration.show = true;
            setTimeout(function () {
                self.$refs.backdrop.classList.add("vueme-dialog-backdrop-open");
                self.$refs.dialogBox.classList.add("vueme-dialog-open");
            }, 50)
        },
        closeDialog: function (e) {
            var self = this;
            if (!self.enabled) {
                return;
            }
            if (self.dialogConfiguration.backgroundDismiss) {
                self.close();
            }
            else {
                if (self && self.$refs && self.$refs.dialogBox)
                    self.$refs.dialogBox.classList.add("vueme-shake-dialog")
                setTimeout(function () {
                    if (self && self.$refs && self.$refs.dialogBox)
                        self.$refs.dialogBox.classList.remove('vueme-shake-dialog')
                }, 1000)
            }
        },
        formatField: function (field) {
            var self = this;
            var label = "Label";
            if (field.label) {
                label = field.label
            }
            var fieldType = 'text';
            if (field.fieldType) {
                fieldType = field.fieldType;
            }
            var id = label + "-" + fieldType;
            if (field.id) {
                id = field.id
            }
            return {
                id: id,
                label: label,
                fieldType: fieldType,
            }
        },
        formatButton: function (button) {
            var self = this;
            var text = "Button";
            if (button.text) {
                text = button.text;
            }
            var flavor = "Primary";
            if (button.flavor) {
                flavor = button.flavor;
            }
            var action = function () { };
            if (button.action) {
                action = button.action;
            }
            var id = Math.round((new Date()).getTime() / 1000);
            if (button.id) {
                id = button.id
            }
            return {
                id: id,
                text: text,
                flavor: flavor,
                action: action
            }

        },
        alert: function (options) {
            var self = this;
            self.enabled = true;
            var type = "vueme-default-dialog";
            if (options.type) {
                type = "vueme-" + options.type + "-dialog";
            }
            self.dialogConfiguration.type = type;
            var title = "Alert";
            if (typeof options.title == "string") {
                title = options.title;
            }
            self.dialogConfiguration.title = title;
            var icon = "";
            if (options.icon) {
                icon = options.icon;
            }
            self.dialogConfiguration.icon = icon;
            var titleClass = "vueme-dialog-header";
            if (options.titleClass) {
                title = options.titleClass
            }
            self.dialogConfiguration.titleClass = titleClass;
            var content = "This is an alert.";
            if (typeof options.content == "string") {
                content = options.content;
            }
            self.dialogConfiguration.content = content;
            var backgroundDismiss = false;
            if (options.backgroundDismiss) {
                backgroundDismiss = options.backgroundDismiss;
            }
            self.dialogConfiguration.backgroundDismiss = backgroundDismiss;
            var buttons = [self.formatButton({})]
            if (options.buttons && Array.isArray(options.buttons)) {
                buttons = [];
                for (var x = 0; x < options.buttons.length; x++) {
                    buttons.push(self.formatButton(options.buttons[x]))
                }
            }
            self.dialogConfiguration.buttons = buttons;
            var fields = []
            if (options.fields && Array.isArray(options.fields)) {
                fields = [];
                for (var x = 0; x < options.fields.length; x++) {
                    fields.push(self.formatField(options.fields[x]))
                }
            }
            self.dialogConfiguration.fields = fields;
            var autoClose = options.autoClose;
            if (autoClose) {
                self.autoClose = true;
                autoClose = autoClose.split("|");
                self.closeTime = Math.ceil(parseInt(autoClose[1]) / 1000);
                for (var x = 0; x < self.dialogConfiguration.buttons.length; x++) {
                    if (self.dialogConfiguration.buttons[x].id == autoClose[0]) {
                        self.autoCloseIndex = x;
                        break;
                    }
                }
            }
            self.open();
            if (self.autoClose) {
                self.beginAutoClose();
            }
        }
    },
    computed: {
        dialogClass: function () {
            var self = this;
            return ["vueme-dialog", self.dialogConfiguration.type];
        }
    }
});
function alert(options, parent) {
    var instance = new NasicDialog({
        propsData: { destruct: false, }
    });
    instance.$mount();
    instance.$parent = parent;
    instance.$parent.$el.appendChild(instance.$el);
    instance.alert(options);
}
export default VueMeDialog;