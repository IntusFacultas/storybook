<template>
    <div :title="data.stateDescription" :class="calculateClass(data)"><span>{{data.stateName}}</span></div>
</template>

<script>
    export const NiwsState = {
        name: "niws-state",
        data: function () {
            return {
            }
        },
        props: {
            classMapping: {
                type: Object,
                default: function() {
                    return {
                        "TASK": ["niws-state-task"],
                        "START": ["niws-state-start"],
                        "CANCEL": ['niws-state-cancel'],
                        "COMPLETE": ["niws-state-complete"],
                        "REWORK": ["niws-state-rework"],
                    }
                },
            },
            data: {
                type: Object,
                required: true
            },
        },
        mounted: function() {
            var self = this;
        },
        methods: {
            calculateClass: function(data) {
                var self = this;
                return ["niws-state", self.classMapping[self.data.stateType]];
            }
        }
    }
    export default NiwsState;
</script>

<style scoped>
@import './niwsStateBadge.css';
</style>