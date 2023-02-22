function NavLinks(navlink: any) {
  return (
    <div className="cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 ease-in duration-300 uppercase">
      {navlink.lable}
    </div>
  );
}

export default NavLinks;
