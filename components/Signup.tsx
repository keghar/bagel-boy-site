function Signup() {
  return (
    <div>
      <div className=" bg-gray-200 p-4 w-full h-[50vh] md:h-[30vh]">
        <div className="flex h-full flex-col justify-center items-center m-2">
          <p className="text-center text-xl text-gray-500 tracking-wider uppercase md:text2xl">
            Sign-up for news letter and information on special events
          </p>
          {/* Components needed
        form that collects email
        sign-up button */}
          <div className="mt-5">
            <div className="flex flex-col md:flex-row">
              <form action="" method="POST">
                <div className="flex items-center space-x-3">
                  <div>
                    <input
                      className="border-2 rounded-2xl p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="py-2">
                    <button className="bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 px-4 py-2">
                      <span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] tracking-wide text-xs ">
                        Sign-up
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
