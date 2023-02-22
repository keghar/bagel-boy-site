function Button(buttonName: any) {
  return (
    <div className="bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 py-2">
      <span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
        {buttonName.label}
      </span>
    </div>
  );
}

export default Button;
