import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="bg-[#F5F5F5]">
            <Navbar />
            <div className="pt-20 md:pt-32">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout