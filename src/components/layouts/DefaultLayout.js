import Header from "../Header";
import Footer from "../Footer";

function DefaultLayout({ children }) {
    return (
        <div id="defaultLayout" className="wrapper">
            <Header />
            <main id="main" className="main">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;