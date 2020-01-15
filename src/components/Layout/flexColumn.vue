<script>
    import styled from 'vue-styled-components';
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
    `;
    export default FlexColumn;
</script>