<template>
    <button v-bind:class="classString" v-on:click="buttonClicked">
        <span v-if="loading">Posting...</span>
        <span v-if="!loading">{{value}}</span>
    </button>
</template>

<script>
export default {
    name:'posting-button',
    props:{
        classString: {
            type: String
        },
        loading:{
            type: Boolean
        },
        value:{
            type: String,
            default:'Submit'
        },
        btnSubmit:{
            type: Function
        }
    },
    methods:{
        buttonClicked: function(){
            this.$emit("clicked");
        }
    }
}
</script>
