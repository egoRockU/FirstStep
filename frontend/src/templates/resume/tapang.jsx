import downloadPDF from "../../utils/downloadPDF";
import { convertDate, convertDateYear } from "../../utils/convertDate";

function Tapang({ resumeInfo }) {
  const {
    firstName,
    lastName,
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
    downloadPDF("container");
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="container max-w-[459px] mx-auto flex flex-col text-[12px]">
          <div className="flex flex-col justify-center text-center">
            <p className="text-3xl font-bold py-3">
              {firstName} {lastName}
            </p>
            <div className="flex text-center justify-center space-x-6 ">
              <p>{email}</p>
              <p>{contactNum}</p>
            </div>
          </div>
          <h4 className="font-bold text-[14px] mb-1">Education</h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />

          <div className="mb-3">
            {education.map((educ, index) => (
              <div className="flex justify-between" key={index}>
                <div className="mb-3">
                  <h5 className="font-bold text-[13px]">{educ.schoolName}</h5>
                  <p>{`${educ.degree}, ${educ.program}`}</p>
                </div>
                <div>
                  <p>{`${convertDateYear(educ.startDate)} - ${convertDateYear(
                    educ.endDate
                  )}`}</p>
                </div>
              </div>
            ))}
          </div>
          <h4 className="font-bold text-[14px] mb-1 ">Skills</h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />
          <div className="mb-3">
            <div className="flex py-2 flex-col justify-center items-center gap-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </div>
            </div>
          </div>

          <h4 className="font-bold text-[14px] mb-1">Projects</h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />

          {projects.map((project, index) => (
            <div className="flex" key={index}>
              <div className="w-5/6 mb-3">
                <h5 className="font-bold text-[12px]">
                  {project.projectTitle}
                </h5>
                <p>
                  <i>{project.subTitle}</i>
                </p>
                <p className="w-fit">{project.description}</p>

                {project.technologiesUsed && (
                  <p className="mt-[5px]">
                    <span className="font-bold">Tech Used:</span>{" "}
                    {project.technologiesUsed}
                  </p>
                )}
              </div>
              <div className="w-1/6">{`${convertDateYear(
                project.startDate
              )} - ${convertDateYear(project.endDate)}`}</div>
            </div>
          ))}

          <h4 className="font-bold text-[14px] mb-1">
            Activities and Involvements
          </h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />

          {activitiesAndInvolvements.map((activity, index) => (
            <div className="mb-3" key={index}>
              <p className="font-bold">{activity.title}</p>
              {activity.typeOfActivity &&
                activity.organizationOrCompanyName && (
                  <p>{`${activity.typeOfActivity} at ${activity.organizationOrCompanyName}`}</p>
                )}
              <p>{`${convertDateYear(activity.startDate)} - ${convertDateYear(
                activity.endDate
              )}`}</p>
              <p>{activity.description}</p>
            </div>
          ))}

          <h4 className="font-bold text-[14px] mb-1">Awards</h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />

          {awards.map((award, index) => (
            <div className="mb-3" key={index}>
              <p className="font-bold">{award.title}</p>
              <p>{convertDate(award.dateReceived)}</p>
              <p>{award.description}</p>
            </div>
          ))}

          <h4 className="font-bold text-[14px] mb-1">Certificates</h4>
          <hr className="w-full h-[2px] bg-black border-none mb-2" />

          {certs.map((cert, index) => (
            <div className="mb-3" key={index}>
              <p className="font-bold">{cert.title}</p>
              <p>2{convertDate(cert.dateReceived)}</p>
              <p>{cert.description}</p>
            </div>
          ))}
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

export default Tapang;
