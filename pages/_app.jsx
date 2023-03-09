import Script from 'next/script';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from '@/store/store';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return (
		<Provider store={store}>
			<Layout>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
					crossOrigin="anonymous"
				/>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
