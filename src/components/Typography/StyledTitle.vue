
<script>
    import styled from 'vue-styled-components';
    export const NH1 = styled.h1`
        font-family: "PT Serif Regular",serif;
        color: #444444;
    `
    export const NH2 = NH1.withComponent("h2");
    export const NH3 = NH1.withComponent("h3");
    export const NH4 = NH1.withComponent("h4");
    export const NH5 = NH1.withComponent("h5");
    export const NH6 = NH1.withComponent("h6");
    
    export default NH1;
</script>

<style>
    @font-face {
        font-family: "PT Serif Regular";
        src: url("fonts/PT_Serif-Web-Regular.ttf");
    }
    @font-face {
        font-family: "PT Serif Bold";
        src: url("fonts/PT_Serif-Web-Bold.ttf");
    }
    @font-face {
        font-family: "PT Serif Italic";
        src: url("fonts/PT_Serif-Web-Italic.ttf");
    }
</style>