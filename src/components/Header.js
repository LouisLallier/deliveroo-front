import logo from "../assets/images/logo-teal.svg";

const Header = () => {
  return (
    <div className="border-gray-40000 mb-8 h-[60px] w-screen border-b pl-[360px]">
      <img className="h-full pt-2 pb-2" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
