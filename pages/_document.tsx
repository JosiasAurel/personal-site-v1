import Document, { Html, Head, Main, NextScript } from 'next/document'

class JADocument extends Document {

	render() {
		return (
			<Html>
				<Head>
				<meta name="monetization" content="$ilp.uphold.com/ZQJwqFyPPwrF" />
				 <meta name="theme-color" content="black" />
                  <link rel="stylesheet" href="/style.css" />
					<link rel="shortcut icon" href="/josias.jpg" />	
					<script src="/gtag.js">
					</script>				    
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

