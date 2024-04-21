import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";

function Inbox() {
  return (
    <>
      <NavbarLoggedIn />
      <div className="flex flex-col pt-20 w-full">
        <div className="flex flex-col gap-2 w-3/5 mx-auto pt-20">
          <div className="pb-5">
            <h1 className="text-2xl font-bold text-[#444b88]">Inbox</h1>
          </div>
          <div className="flex flex-col gap-4 pb-10">
            <div className="flex flex-col border border-[#444b88] p-4">
              <h1 className="text-lg">
                {" "}
                <span className="text-[#444b88]">From:</span> Sender{" "}
              </h1>
              <h1 className="text-xl">
                {" "}
                <span className="text-[#444b88]">Subject: </span> lorem ipsum
                dolor{" "}
              </h1>
            </div>
            <div className="flex flex-col border border-[#444b88] p-4">
              <h1 className="text-lg">
                {" "}
                <span className="text-[#444b88]">From:</span> Sender{" "}
              </h1>
              <h1 className="text-xl">
                {" "}
                <span className="text-[#444b88]">Subject: </span> lorem ipsum
                dolor{" "}
              </h1>
            </div>
            <div className="flex flex-col border border-[#444b88] p-4">
              <h1 className="text-lg">
                {" "}
                <span className="text-[#444b88]">From:</span> Sender{" "}
              </h1>
              <h1 className="text-xl">
                {" "}
                <span className="text-[#444b88]">Subject: </span> lorem ipsum
                dolor{" "}
              </h1>
            </div>
            <div className="flex flex-col border border-[#444b88] p-4">
              <h1 className="text-lg">
                {" "}
                <span className="text-[#444b88]">From:</span> Sender{" "}
              </h1>
              <h1 className="text-xl">
                {" "}
                <span className="text-[#444b88]">Subject: </span> lorem ipsum
                dolor{" "}
              </h1>
            </div>
          </div>
          <div className="w-full justify-end flex">
            <div className="w-full py-4">
              <div className="flex justify-end">
                <button className="px-3 py-1 mx-1 bg-white text-[#444b88]">
                  {"<"}
                </button>
                <button className="px-3 py-1 mx-1 bg-white text-[#444b88] rounded-full">
                  1
                </button>
                <button className="px-3 py-1 mx-1 bg-white text-[#444b88]">
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inbox;
