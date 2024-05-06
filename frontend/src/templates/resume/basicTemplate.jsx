import downloadPDF from "../../utils/downloadPDF";
import { convertDate } from "../../utils/convertDate";

function BasicTemplate({ resumeInfo }) {
  const {
    firstName,
    lastName,
    preferredCareer,
    contactNum,
    email,
    address,
    about,
    skills,
    activitiesAndInvolvements,
    projects,
    education,
    awards,
    certs,
    characterReference,
  } = resumeInfo || {};

  const handleDownload = () => {
    const filename = `${firstName} ${lastName}.pdf`;
    downloadPDF("container", filename);
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="container max-w-[459px] bg-white mx-auto shadow-md my-2 rounded-lg font-serif">
          <div className="pr-4 pl-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h2>
                <p className="text-xs text-gray-600">
                  {preferredCareer && preferredCareer.join(" | ")}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-gray-600">Phone: {contactNum}</p>
                <p className="text-[10px] text-gray-600">Email: {email}</p>
                <p className="text-[10px] text-gray-600">Location: {address}</p>
              </div>
            </div>
            <hr className="my-4 border-gray-700 w-[100%] mx-auto"></hr>
            <div>
              <h3 className="text-md font-bold mb-2">Summary</h3>
              <p className="text-xs leading-relaxed">{about}</p>
            </div>

            <hr className="my-4 border-gray-700 w-[100%] mx-auto"></hr>
            <div className="mt-5">
              <h3 className="text-sm  text-gray-800 font-bold mb-2">Skills</h3>
              <ul className="list-disc list-inside text-xs">
                {skills &&
                  skills.map((skill, index) => <li key={index}>{skill}</li>)}
              </ul>
            </div>

            <hr className="my-4 border-gray-700 w-[100%] mx-auto"></hr>
            <div className="mt-4">
              <h3 className="text-md font-bold mb-2">
                Activities and Involvements
              </h3>
              {activitiesAndInvolvements &&
                activitiesAndInvolvements.map((activity, index) => (
                  <div key={index} className="mb-5">
                    <h4 className="text-sm font-semibold">{activity.title}</h4>
                    <p className="text-sm text-gray-700">
                      {activity.typeOfActivity} |{" "}
                      {convertDate(activity.startDate).substring(0, 4)} {" - "}
                      {convertDate(activity.endDate).substring(0, 4)}
                    </p>
                    <ul className="list-disc list-inside text-xs">
                      {activity.description && <li>{activity.description}</li>}
                    </ul>
                  </div>
                ))}
            </div>

            <div className="mt-5">
              <hr className="my-3 border-gray-700 w-[100%] mx-auto"></hr>
              <div>
                <p className="text-header text-md font-bold mb-2">Projects</p>
                {projects &&
                  projects.map((project, index) => (
                    <div className="mt-4" key={index}>
                      {" "}
                      <p className="text-sm  text-gray-800 font-bold">
                        {project.projectTitle}
                        {" | "}
                        <span className="space-x-11">
                          {convertDate(project.startDate).substring(0, 4)} -{" "}
                          {convertDate(project.endDate).substring(0, 4)}
                        </span>
                      </p>
                      <p className="text-xs  text-gray-700 font-semibold">
                        {project.subTitle}
                      </p>
                      <p className="text-[10px]">{project.technologiesUsed}</p>
                      <p className="text-[10px]">{project.description}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-4">
              <hr className="my-3 border-gray-700 w-[100%] mx-auto" />
              <h3 className="text-md font-bold mb-2">Education</h3>
              <div>
                <div>
                  {education &&
                    education.map((educ, index) => (
                      <div className="mb-5" key={index}>
                        <p className="text-sm  text-gray-700 ">
                          {educ.schoolName}
                        </p>
                        <p className="text-xs text-red-600 font-semibold">
                          {`${educ.degree}, ${educ.program}`}
                        </p>
                        <p className="text-[10px]">
                          {convertDate(educ.startDate).substring(0, 4)} -{" "}
                          {convertDate(educ.endDate).substring(0, 4)}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <hr className="my-3 border-gray-700 w-[100%] mx-auto"></hr>
              <p className="text-header text-md font-bold mb-2">Awards</p>
              <div>
                {awards &&
                  awards.map((award, index) => (
                    <div className="mb-2" key={index}>
                      <p className="text-xs font-bold  text-gray-800 ">
                        {award.title}
                      </p>
                      <p className="text-xs  text-gray-700">
                        {convertDate(award.dateReceived)}
                      </p>
                      <p className="text-xs text-justify">
                        {award.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-5">
              <hr className="my-4 border-gray-700 w-[100%] mx-auto" />

              <p className="text-header text-md font-bold mb-2">
                Certifications
              </p>
              <div>
                {certs &&
                  certs.map((cert, index) => (
                    <div className="mb-4" key={index}>
                      <p className="text-sm  text-gray-800 font-bold">
                        {cert.title} |
                        <span className="space-x-11">
                          {convertDate(cert.dateReceived)}
                        </span>
                      </p>
                      <p className="text-xs  text-gray-700 font-semibold">
                        {cert.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-4">
              <hr className="my-4 border-gray-700 w-[100%] mx-auto" />
              <h3 className="text-md font-bold mb-2">References</h3>
              <div>
                <div>
                  {characterReference &&
                    characterReference.map((char, index) => (
                      <div className="mb-5" key={index}>
                        <p className="text-sm  text-gray-800 ">{char.name}</p>
                        <p className="text-xs text-gray-700 font-semibold">
                          {char.position}
                        </p>
                        <p className="text-xs text-gray-700 font-semibold">
                          {char.email}
                        </p>
                        <p className="text-[10px]">{char.contactNum}</p>
                        <p className="text-[10px]">{char.website}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default BasicTemplate;
