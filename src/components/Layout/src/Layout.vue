<script>
import styled from "vue-styled-components";
const props = {
  col: Number,
  xs: Number,
  sm: Number,
  md: Number,
  lg: Number,
  xl: Number
};
export const FlexColumn = styled("div", props)`
  flex: ${props => (!isNaN(props.col) ? props.col : 1)};
  width: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 0px) {
    flex: ${props =>
      !isNaN(props.xs)
        ? props.xs
        : !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1};
    min-width: calc(
      100% /
        (
          12 /
            ${props =>
              !isNaN(props.xs)
                ? props.xs
                : !isNaN(props.sm)
                ? props.sm
                : !isNaN(props.md)
                ? props.md
                : !isNaN(props.lg)
                ? props.lg
                : !isNaN(props.xl)
                ? props.xl
                : !isNaN(props.col)
                ? props.col
                : 1}
        )
    );
  }
  @media (min-width: 576px) {
    flex: ${props =>
      !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1};
    min-width: calc(
      100% /
        (
          12 /
            ${props =>
              !isNaN(props.sm)
                ? props.sm
                : !isNaN(props.md)
                ? props.md
                : !isNaN(props.lg)
                ? props.lg
                : !isNaN(props.xl)
                ? props.xl
                : !isNaN(props.col)
                ? props.col
                : 1}
        )
    );
  }
  @media (min-width: 768px) {
    flex: ${props =>
      !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1};
    min-width: calc(
      100% /
        (
          12 /
            ${props =>
              !isNaN(props.md)
                ? props.md
                : !isNaN(props.lg)
                ? props.lg
                : !isNaN(props.xl)
                ? props.xl
                : !isNaN(props.col)
                ? props.col
                : 1}
        )
    );
  }
  @media (min-width: 992px) {
    flex: ${props =>
      !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1};
    min-width: calc(
      100% /
        (
          12 /
            ${props =>
              !isNaN(props.lg)
                ? props.lg
                : !isNaN(props.xl)
                ? props.xl
                : !isNaN(props.col)
                ? props.col
                : 1}
        )
    );
  }
  @media (min-width: 1200px) {
    flex: ${props =>
      !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1};
    min-width: calc(
      100% /
        (
          12 /
            ${props =>
              !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1}
        )
    );
  }
  box-sizing: border-box;
`;
export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export default FlexColumn;
</script>
