import downloadPDF from "../../utils/downloadPDF";
import { convertDate } from "../../utils/convertDate";

function NameOfTemplateHere({ resumeInfo }) {
  const handleDownload = () => {
    downloadPDF("container");
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        {/* ---------------------- */}
      </div>
      <div className="w-full flex justify-center py-5">
        <button
          className="border border-[#444b88] py-1 px-4 font-bold text-base text-[#444b88] hover:bg-[#bad2ff]"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </>
  );
}

export default NameOfTemplateHere;
