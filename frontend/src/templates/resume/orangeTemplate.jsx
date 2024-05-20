import downloadPDF from "../../utils/downloadPDF";
import { convertDate, convertDateYear } from "../../utils/convertDate";

function Orange({ resumeInfo }) {
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
  } = resumeInfo || {};

  const handleDownload = () => {
    downloadPDF("container");
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="container max-w-[459px] bg-orange-100 mx-auto pb-4 shadow-md my-2 p-6 font-serif">
          <div className="text-center font-bold text-orange-500 text-[13px] py-2">
            <h1 className="text-left">
              {firstName} {lastName}
            </h1>
            <p className="text-left text-12 font-semibold">
              {preferredCareer && preferredCareer.join(" | ")}
            </p>
          </div>
          <div className="text-right font-medium text-orange-400 text-[11px]">
            <p>{address}</p>
            <p>{contactNum}</p>
            <span className="font-bold">{email}</span>
            <hr className="my-2 border-orange-900" />
          </div>

          <div className="mx-5">
            <p className="text-orange-400 text-header text-[12px] font-bold">
              About
            </p>
            <p className="font-medium text-[8px] text-justify leading-relaxed">
              {about}
            </p>
            <hr className="mt-2.5 border-orange-900 w-[100%] mx-auto" />

            <p className="text-orange-400 text-header text-[12px] font-bold">
              Skills
            </p>
            <div className="list-container flex gap-12">
              <ul className="left-list text-[9px] flex-1 list-disc">
                {skills.map((skill, key) => (
                  <li className="font-semibold mx-3" key={key}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="my-2 border-orange-900 w-[100%] mx-auto" />
            <p className="text-orange-400 text-header text-[12px] font-bold ">
              Education
            </p>

            <div>
              {education.map((educ, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-orange-700 text-[9px] ">
                    [{`${educ.degree}, ${educ.program}`}]
                  </p>
                  <p className="text-[9px] text-orange-600 font-semibold">
                    [{educ.schoolName}]
                  </p>
                  <p className="text-[9px]">{`${convertDateYear(
                    educ.startDate
                  )} - ${convertDateYear(educ.endDate)}`}</p>
                </div>
              ))}
            </div>

            <hr className="my-2 border-orange-900 w-[100%] mx-auto" />

            <p className="text-orange-400 font-serif text-header text-[12px] font-bold">
              Projects
            </p>
            <div>
              {projects.map((project, key) => (
                <div className="mb-2" key={key}>
                  <p className=" text-orange-700 text-[9px] font-bold">
                    [{project.projectTitle}]{" "}
                    <span className="space-x-11">{`${convertDateYear(
                      project.startDate
                    )} - ${convertDateYear(project.endDate)}`}</span>
                  </p>
                  <p className=" text-orange-600 text-[9px]  font-semibold">
                    [{project.subTitle}]
                  </p>
                  <p className="text-orange-600 text-[9px]">
                    [{project.technologiesUsed}]
                  </p>
                </div>
              ))}
            </div>

            <hr className="my-2 border-orange-900 w-[100%] mx-auto" />

            <p className="text-orange-400 font-serif text-header text-[12px] font-bold">
              Activities and Involvements
            </p>
            <div>
              {activitiesAndInvolvements.map((activity, key) => (
                <div className="mb-2" key={key}>
                  <p className=" text-orange-700 text-[9px] font-bold">
                    [{activity.title}]{" "}
                    <span className="space-x-11">{`${convertDateYear(
                      activity.startDate
                    )} - ${convertDateYear(activity.endDate)}`}</span>
                  </p>
                  <p className=" text-orange-600 text-[9px]  font-semibold">
                    [
                    {`${activity.typeOfActivity} at ${activity.organizationOrCompanyName}`}
                    ]
                  </p>
                  <p className="text-orange-600 text-[9px]">
                    [{activity.description}]
                  </p>
                </div>
              ))}
            </div>

            <hr className="my-2 border-orange-900 w-[100%] mx-auto" />

            <p className="text-orange-400 text-header text-[12px] font-bold">
              Awards
            </p>
            <div>
              {awards.map((award, key) => (
                <div className="" key={key}>
                  <p className="text-orange-700 text-[9px] font-bold ">
                    [{award.title}]
                  </p>
                  <p className="font-medium text-orange-600 text-[9px] ">
                    [{convertDate(award.dateReceived)}]
                  </p>
                  <p className="font-medium text-[9px] text-justify">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            <hr className="my-2 border-orange-900 w-[100%] mx-auto" />

            <p className="text-orange-400 text-header text-[12px] font-bold">
              Certifications
            </p>
            <div>
              {certs.map((cert, key) => (
                <div className="" key={key}>
                  <p className="text-orange-700 text-[9px] font-bold ">
                    [{cert.title}]
                  </p>
                  <p className="font-medium text-orange-600 text-[9px] ">
                    [{convertDate(cert.dateReceived)}]
                  </p>
                  <p className="font-medium text-[9px] text-justify">
                    {cert.description}
                  </p>
                </div>
              ))}
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

export default Orange;
