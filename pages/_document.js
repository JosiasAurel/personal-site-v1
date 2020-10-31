import Document, { Html, Head, Main, NextScript } from 'next/document'

class JADocument extends Document {
	render() {
		return (
			<Html>
				<Head>
				 <meta name="theme-color" content="#0dfde9" />
                  <link rel="stylesheet" href="/style.css" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default JADocument

