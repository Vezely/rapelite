import './globals.css';
import { ThemeProvider } from '../components/themeProvider/ThemeProvider';
import Layout from '../components/layout/Layout';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<></>
			<ThemeProvider>
				<body style={{ maxWidth: '1500px', margin: '0 auto' }}>
					<Layout>
						<div className='content'>{children}</div>
					</Layout>
				</body>
			</ThemeProvider>
		</html>
	);
}