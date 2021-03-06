 import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import App from "next/app";
import firebase, { FirebaseContext } from "../firebase"


const MyApp = ({ Component, pageProps }) => {
  
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}
export default MyApp;