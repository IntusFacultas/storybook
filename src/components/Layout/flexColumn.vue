<script>
    import styled from 'vue-styled-components';
    const props = {
        col: Number,
        sm: Number,
        md: Number,
        lg: Number,
        xl: Number,
    }
    export const FlexColumn = styled("div", props)`
        flex: ${props => !isNaN(props.col) ? props.col : 1 };
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        @media (min-width: 576px) {
            flex: ${ props => !isNaN(props.sm) ? props.sm : !isNaN(props.col) ? props.col : 1 }
        }
        @media (min-width: 768px) {
            flex: ${ props => !isNaN(props.md) ? props.md : !isNaN(props.col) ? props.col : 1 }
        }
        @media (min-width: 992px) {
            flex: ${ props => !isNaN(props.lg) ? props.lg : !isNaN(props.col) ? props.col : 1 }
        }
        @media (min-width: 1200px) {
            flex: ${ props => !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1 }
        }
    `;
    export const FlexRow = styled.div`
        display: flex;
        width: 100%;
    `;
    export default FlexColumn;
</script>