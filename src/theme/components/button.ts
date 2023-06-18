export const Button = {
  baseStyle: () => ({
    py: '4',
    fontSize: '14px',
    borderRadius: '5px',
    _text: {
      fontWeight: 700,
    },
    _stack: {
      space: 2,
      alignItems: 'center',
    },
    _disabled: {
      opacity: 0.5,
    },
  }),
  variants: {
    solid: {
      shadow: 6,
    },
    outline: (props: any) => {
      return {
        borderColor: props.theme.colors.neutralLight['400'],
        _text: {
          color: props.theme.colors.neutralGray['400'],
        },
      };
    },
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'primary',
  },
};
