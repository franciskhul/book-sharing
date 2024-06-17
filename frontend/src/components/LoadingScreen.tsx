// @mui
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
// @components
import Logo from '../components/Logo'
// import Logo from '../../../components/Logo';

const RootStyle = styled('div')(({ theme }) => ({
    right: 0,
    bottom: 0,
    zIndex: 99999,
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
}));

const LoadingScreen = () => {
    return (
        <RootStyle>
            <Box >
                <Logo />
                <Typography variant="h4">
                    Loading...
                </Typography>
            </Box>
        </RootStyle>
    )
}

export default LoadingScreen;