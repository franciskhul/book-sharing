import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

type CustomProps = {
    stretchStart?: number;
    focusstretch?: number;
};

type CustomTextFieldProps = TextFieldProps & CustomProps;

const InputStyle = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'stretchStart' && prop !== 'focusstretch',
})<CustomTextFieldProps>(({ stretchStart, theme, focusstretch = 60 }) => ({
    '& .MuiOutlinedInput-root': {
        transition: theme.transitions.create(['box-shadow', 'width'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
        }),
        '&.Mui-focused': {
            // boxShadow: theme.customShadows.z12,
        },
        ...(stretchStart && {
            width: stretchStart,
            '&.Mui-focused': {
                // boxShadow: theme.customShadows.z12,
                [theme.breakpoints.up('sm')]: {
                    width: stretchStart + focusstretch,
                },
            },
        }),
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        // borderColor: `${theme.palette.grey[500_32]} !important`,
    },
}));

export default InputStyle;
