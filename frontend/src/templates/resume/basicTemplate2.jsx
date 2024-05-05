import downloadPDF from "../../utils/downloadPDF";
import { convertDate, convertDateYear } from "../../utils/convertDate";

function BasicTemplate2({ resumeInfo }) {
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
  } = resumeInfo;

  const handleDownload = () => {
    const filename = `${firstName} ${lastName}.pdf`;
    downloadPDF("container", filename);
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="container max-w-[459px] bg-white mx-auto pb-4 shadow-md my-2 rounded-lg font-serif">
          <div className="text-center font-bold text-[13px] py-2">
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{preferredCareer.join(" | ")}</p>
          </div>
          <div className="text-center text-[9px] tracking-tight">
            <p>{address}</p>
            <p>
              {contactNum} <span className="font-bold">{email}</span>
            </p>
            <hr className="my-2 border-gray-900" />
          </div>

          <div className="mx-5">
            <p className="text-header text-[11px] font-bold">
              Career Objective
            </p>
            <p className="text-[8px] text-justify tracking-tight">{about}</p>
            <hr className="mt-2.5 border-gray-900 w-[100%] mx-auto" />
            <p className="text-header text-[11px] font-bold">Achievements</p>
            <div>
              {awards.map((award, index) => (
                <div className="" key={index}>
                  <p className="text-[9px] font-bold ">{award.title}</p>
                  <p className="text-[9px] ">
                    {convertDate(award.dateReceived)}
                  </p>
                  <p className="text-[9px] text-justify">{award.description}</p>
                </div>
              ))}
            </div>
            <hr className="my-2 border-gray-900 w-[100%] mx-auto" />
            <p className="text-header text-[11px] font-bold ">Education</p>
            <div>
              {education.map((educ, index) => (
                <div className="mb-2" key={index}>
                  <p className="text-[9px]">
                    {`${educ.degree}, ${educ.program}`}
                  </p>
                  <p className="text-[9px] text-cyan-500 font-semibold">
                    {educ.schoolName}
                  </p>
                  <p className="text-[9px]">{`${convertDateYear(
                    educ.startDate
                  )} - ${convertDateYear(educ.endDate)}`}</p>
                </div>
              ))}
            </div>
            <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

            <p className="text-header text-[11px] font-bold">Projects</p>
            <div>
              {projects.map((project, index) => (
                <div className="mb-2" key={index}>
                  {" "}
                  <p className="text-[9px] font-bold">
                    {project.projectTitle}{" "}
                    <span className="text-[9px]">{`${convertDateYear(
                      project.startDate
                    )} - ${convertDateYear(project.endDate)}`}</span>
                  </p>
                  <p className="text-[9px] font-semibold">{project.subTitle}</p>
                  <p className="text-[9px]">{project.technologiesUsed}</p>
                </div>
              ))}
            </div>
            <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

            <p className="text-header text-[11px] font-bold">Certifications</p>
            <div>
              {certs.map((cert, index) => (
                <div className="mb-2" key={index}>
                  {" "}
                  <p className="text-[9px] font-bold">{cert.title} </p>
                  <p className="text-[9px] font-bold">
                    {convertDate(cert.dateReceived)}
                  </p>
                  <p className="text-[9px] font-semibold">{cert.description}</p>
                </div>
              ))}
            </div>
            <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

            <p className="text-header text-[11px] font-bold">
              Activities and Involvements
            </p>
            <div>
              {activitiesAndInvolvements.map((activity, index) => (
                <div className="mb-2" key={index}>
                  <p className="text-[9px] font-bold">
                    {activity.title}{" "}
                    <span className="space-x-11">{`${convertDateYear(
                      activity.startDate
                    )} - ${convertDateYear(activity.endDate)}`}</span>
                  </p>
                  <p className="text-[9px]">{activity.typeOfActivity}</p>
                  <p className="text-[9px]">
                    {activity.organizationOrCompanyName}
                  </p>
                  <p className="text-[9px] text-justify">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
            <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

            <p className="text-header text-[11px] font-bold">Skills</p>
            <div className="list-container flex gap-12">
              <ul className="left-list text-[9px] flex-1 list-disc">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
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

export default BasicTemplate2;
