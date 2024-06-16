import { alpha } from '@mui/material/styles';

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    500_8: alpha('#919EAB', 0.08),
    500_12: alpha('#919EAB', 0.12),
    500_16: alpha('#919EAB', 0.16),
    500_24: alpha('#919EAB', 0.24),
    500_32: alpha('#919EAB', 0.32),
    500_48: alpha('#919EAB', 0.48),
    500_56: alpha('#919EAB', 0.56),
    500_80: alpha('#919EAB', 0.8),
};

const palette = {
    primary: {
        main: '#5ACCCC', /**turquoise */
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#F76434', /**orangeRed */
    },
    turquoiseLight: '#CFFAFA', /**turquoiseLight main background*/
    white: '#FFFFFF', /**main */
    steelBlue: '#335C6E', /** main info*/
    yellow: '#FABD33', /** main warning*/
    orangeRed: "#F76434" /** secondary*/,
    teal: '#4AA088',/** secondary*/
    yellowDark: '#FAAD00', /** secondary*/
    turquoiseDark: '#53C2C2', /** secondary*/
    orangePastel: '#FFE6DC', /** secondary*/
    turquoiseDark2: '#28B8B8', /** secondary*/
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] }
}

export default palette;