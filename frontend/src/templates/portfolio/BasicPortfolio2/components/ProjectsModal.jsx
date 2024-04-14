function ProjectsModal({ project, onClose }) {
  const { projectTitle, previewImages, subTitle, technologiesUsed } = project;

  return (
    <div className="fixed z-10 inset-0 overflow-y-scroll transition-all cursor-default sm:hidden md:block">
      <div className="flex items-center justify-center min-h-screen w-1/4 mx-auto">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="relative bg-white rounded-lg overflow-hidden">
          <div className="p-8">
            {/* Modal content */}
            <h1 className="text-2xl font-bold mb-4">{projectTitle}</h1>
            <p className="text-gray-700 text-clip overflow-hidden text-justify">
              {subTitle}
            </p>
            <img src={previewImages ? previewImages[0] : hero} alt="" />
            <div className="flex">
              <p className="text-gray-700 mt-4 flex-1 text-center">
                Technologies Used
              </p>
              <p className="text-gray-700 mt-4 flex-1 font-bold underline">
                {technologiesUsed}
              </p>
            </div>
            <button
              onClick={() => onClose()}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 border-2 hover:text-gray-700 active:border-black "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsModal;
