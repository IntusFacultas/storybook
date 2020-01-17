<template>
    <div class="row">
        <div class="col-lg-6 col-sm-12">
            <label for="">Attach optional comment</label>
            <textarea v-model="comment" class="form-control" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="col-lg-6 col-sm-12">
            <label for="" style="display:block">Send to:</label>
            <button 
                class="niws-reviewer-button"
                v-for="transition in transitions"
                @click="submit(transition)"
                :class="calculateClass(transition)">
                {{transition.destinationState.stateName}}
            </button>
        </div>
    </div>
</template>

<script>
    export const NiwsReviewer = {
        data: function () {
            return {
                comment: "",
            }
        },
        props: {
            classMapping: {
                type: Object,
                default: function() {
                    return {
                        "TASK": ["niws-reviewer-task-button"],
                        "START": ["niws-reviewer-start-button"],
                        "CANCEL": ['niws-reviewer-cancel-button'],
                        "COMPLETE": ["niws-reviewer-complete-button"],
                        "REWORK": ["niws-reviewer-rework-button"],
                    }
                },
            },
            transitions: {
                type: Array,
                required: true
            },
            instanceId: {
                type: String,
                required: true
            },
            workflowUrl: {
                type: String,
                required: true,
            },
            workflowId: {
                type: String,
                required: true
            },
            callback: {
                type: Function,
                default: function() {}
            }
        },
        mounted: function() {
            var self = this;
        },
        methods: {
            submit: function(transition) {
                var self = this;
                var url = self.workflowUrl;
                if (url[url.length - 1] != "/") {
                    url += "/";
                }
                url += "workflow/";
                url += self.workflowId;
                url += "/instance/";
                url += self.instanceId;
                url += "/transition/";
                url += transition.transitionId;

                function postAjax(url, data) {
                    // gotten from https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
                    var params = typeof data == 'string' ? data : Object.keys(data).map(
                            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
                        ).join('&');
                
                    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    xhr.open('POST', url);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState > 3) {
                            self.callback({
                                optionClicked: transition,
                                response: xhr
                            })
                        }
                    };
                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.withCredentials = true;
                    xhr.send(params);
                    return xhr;
                }
                postAjax(url, {"comment": self.comment })
            },
            calculateClass: function(transition) {
                var self = this;
                return [self.classMapping[transition.destinationState.stateType]];
            }
        }
    }
    export default NiwsReviewer
</script>

<style scoped>
    @import "./niwsReviewer.css";
</style>

