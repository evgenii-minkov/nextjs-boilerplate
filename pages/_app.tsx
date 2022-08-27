import { AppProps } from "next/app";

// import Header from "@components/Header";
// import Footer from "@components/Footer";

import GlobalState from "@contexts/GlobalState";

import styles from "./app.module.scss";
import "@styles/index.scss";


export default function App({ Component, pageProps }: AppProps) {
	return (
		<GlobalState>
			<div className={ styles["page-wrapper"] }>
				{/* <Header /> */}
				<Component { ...pageProps } />
				{/* <Footer /> */}
			</div>
		</GlobalState>
	);
}
