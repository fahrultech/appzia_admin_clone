import "./index.css";
import Logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="main flex">
        <div className="sidebar w-[240px] bg-white h-screen">
          <div className="logo flex justify-center items-center h-[70px]">
            <img src={Logo} className="h-[28px]" alt="" />
          </div>
          <div className="sidemenu">
            <ul className="menu">
              <li className="px-[25px] py-[12px] text-[13px]">Menu</li>
              <li className="has-menu text-[15px]">
                <a
                  className="hover:bg-red-200 px-[25px] py-[12px] block space-x-3"
                  href=""
                >
                   <i className="text-[18px] mdi mdi-home"></i>
                   <span>Dashboard</span>
                  
                </a>
              </li>
              <li className="has-menu">
                <a
                  className="hover:bg-red-200 px-[25px] py-[12px] block space-x-3"
                  href=""
                >
                   <i className="text-[18px] mdi mdi-album"></i>
                   <span>UI Elements</span>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">content</div>
      </div>
    </div>
  );
}

export default App;
