import { ThemeProvider } from "../context/theme";
import { AuthProvider } from "../context/auth";
// import "antd/dist/antd.css";
import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TopNav />
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
