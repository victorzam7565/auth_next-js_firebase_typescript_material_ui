import Footer from "./footer";
import Navbar from "./header";

const Layout = ({ children }: any) => {
  return ( 
    
    <> 
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </>
  )
  
};

export default Layout;