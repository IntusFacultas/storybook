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
        font-family: "Open Sans Condensed Light",sans-serif;
    `;

    export default NBody;
</script>