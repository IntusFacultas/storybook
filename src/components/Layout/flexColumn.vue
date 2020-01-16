<script>
    import styled from 'vue-styled-components';
    import layouts from './layout.js';
    const props = {
        col: Number,
        sm: Number,
        md: Number,
        lg: Number,
        xm: Number,
    }
    export const FlexColumn = styled("div", props)`
        min-width: 100%;
        flex: ${props => props.col};

        @media (max-wi)

    `;
    export default FlexColumn;
</script>