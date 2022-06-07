import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';

const Layout: FC = ({ children }) => {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					minHeight: '100vh',
					maxWidth: '100vw'
				}}
			>
				<Navbar />
				<Box sx={{ width: { lg: 1140, xs: '90%' }, margin: 'auto', flex: 1 }}>{children}</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Layout;
