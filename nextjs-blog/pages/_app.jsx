// src/pages/_app.js
import '../global/globalstyle.css'
import { AppWrapper } from '../global/AppContext'; // import based on where you put it
function Application({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default Application