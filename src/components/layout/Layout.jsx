'use client';
import { useTheme } from '../themeProvider/ThemeProvider';
import styles from './layout.module.css';
import Header from '../header/Header';
import Footer from '../../components/footer/Footer';

export default function Layout({ children }) {
	const [theme, setTheme] = useTheme();

	return (
		<div className={styles.layout} data-theme={theme}>
			<Header />
			{children}

			<Footer />
		</div>
	);
}
