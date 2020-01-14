<script>
    import styled from 'vue-styled-components';
    const props = {
        size: Number,
    }
    export const NBody = styled('p', props)`
        margin: 0;
        font-family: "Open Sans Regular",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: ${
            props => props.size < 14 ? 14 : props.size > 16 ? 16 : props.size
        }px;
        font-weight: 400;
        line-height: 1.571;
        color: #444;
        background-color: #fff;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    `;

    export const PortionMarking = styled.span`
        font-family: "Open Sans Condensed Light",sans-serif !important; 
    `;

    export default NBody;
</script>

<style>
    @font-face {
        font-family: "Open Sans Bold";
        src: url("fonts/OpenSans-Bold.eot");
        src: url("fonts/OpenSans-Bold.ttf");
    }
    @font-face {
        font-family: "Open Sans Condensed Bold";
        src: url("fonts/OpenSans-CondBold.eot");
        src: url("fonts/OpenSans-CondBold.ttf");
    }
    @font-face {
        font-family: "Open Sans Condensed Light";
        src: url("fonts/OpenSans-CondLight.eot");
        src: url("fonts/OpenSans-CondLight.ttf");
    }
    @font-face {
        font-family: "Open Sans Italic";
        src: url("fonts/OpenSans-Italic.eot");
        src: url("fonts/OpenSans-Italic.ttf");
    }
    @font-face {
        font-family: "Open Sans Light Italic";
        src: url("fonts/OpenSans-LightItalic.eot");
        src: url("fonts/OpenSans-LightItalic.ttf");
    }
    @font-face {
        font-family: "Open Sans Regular";
        src: url("fonts/OpenSans-Regular.eot");
        src: url("fonts/OpenSans-Regular.ttf");
    }
    @font-face {
        font-family: "Open Sans Semi Bold";
        src: url("fonts/OpenSans-Semibold.eot");
        src: url("fonts/OpenSans-Semibold.ttf");
    }
</style>