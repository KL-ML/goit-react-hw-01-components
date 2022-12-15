import styled from "@emotion/styled";


const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => {
        return p.disabled
            ? p.theme.colors.secondary
            : p.theme.colors.primery
    }};
  color: ${p => p.theme.colors.muted};
  cursor: pointer;

  :hover:not(:disabled), 
  :focus:not(:disabled) {
      background-color: ${p => p.theme.colors.accent};
  }
`;

export const Button = ({
    icon: Icon,
    type = "button",
    children,
    disabled = false
}) => {
    return (
        <StyledButton type={type} disabled={disabled}>
            {Icon && <Icon />}
            {children}
        </StyledButton>
    )
};