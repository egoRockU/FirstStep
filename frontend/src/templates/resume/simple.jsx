import downloadPDF from "../../utils/downloadPDF";
import { convertDate, convertDateYear } from "../../utils/convertDate";
import pic from "./images/twoColumnPic.png";

function Simple({ resumeInfo }) {
  const handleDownload = () => {
    downloadPDF("container");
  };
  const {
    profileImg,
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

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="container max-w-[459px] bg-white mx-auto font-serif items-center justify-center">
          <div className="flex items-center justify-between">
            <div className="ms-6 w-3/5">
              <h2 className="text-[16px] font-bold uppercase">
                {`${firstName} ${lastName}`}
              </h2>
              <p className="text-[10px] uppercase mb-3">
                {preferredCareer && preferredCareer.join(" | ")}
              </p>

              <p className="text-[9px] text-gray-600">{address}</p>
              <p className="text-[9px] text-gray-600">{contactNum}</p>
              <p className="text-[9px] text-gray-600">{email}</p>
            </div>
            <div className="mr-6">
              <img
                src={profileImg ? profileImg : pic}
                className="h-[120px] w-[120px] object-cover"
                alt=""
              />
            </div>
          </div>
          <hr className="my-2 border-gray-700 mx-auto"></hr>

          <div className="items-center ms-6 mr-6">
            <h2 className="font-bold uppercase text-[13px] mb-2">
              Career Overview
            </h2>
            <p className="text-[10px] text-justify">{about}</p>
          </div>
          <hr className="my-4 border-gray-700 mx-auto"></hr>
          <div className="flex">
            <div className="ms-6 mr-6 flex-row flex-1 w-48">
              <h2 className="font-bold uppercase text-[13px] mb-2">
                education
              </h2>
              {education.map((educ, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[10px] font-bold">[{educ.schoolName}]</p>
                  <p className="text-[10px]">
                    [{`${educ.degree}, ${educ.program}`}]
                  </p>
                  <p className="text-[10px]">
                    [
                    {`${convertDateYear(educ.startDate)} - ${convertDateYear(
                      educ.endDate
                    )}`}
                    ]
                  </p>
                </div>
              ))}

              <h2 className="font-bold uppercase text-[13px] mb-2 mt-4">
                Skills
              </h2>
              <ul className="list-disc text-[10px]">
                {skills.map((skill, key) => (
                  <li key={key}>{skill}</li>
                ))}
              </ul>

              <h2 className="font-bold uppercase text-[13px] mb-2 mt-2">
                Projects
              </h2>
              {projects.map((project, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[10px] font-bold">
                    [{project.projectTitle}] [
                    {`${convertDateYear(project.startDate)} - ${convertDateYear(
                      project.endDate
                    )}`}
                    ]
                  </p>
                  <p className="text-[10px]">[Subtitle]</p>
                  <p className="text-[10px]">[Technologies Used]</p>
                </div>
              ))}
            </div>
            <div className="w-48 ms-6 mr-6 flex-1">
              <h2 className="font-bold uppercase text-[13px] mb-2">
                Activities and Involvements
              </h2>
              {activitiesAndInvolvements.map((activity, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[10px] font-bold">
                    [{activity.title}] [
                    {`${convertDateYear(
                      activity.startDate
                    )} - ${convertDateYear(activity.endDate)}`}
                    ]
                  </p>
                  <p className="text-[10px]">[{activity.typeOfActivity}]</p>
                  <p className="text-[10px]">
                    [{activity.organizationOrCompanyName}]
                  </p>
                  <p className="text-[10px]">[{activity.description}]</p>
                </div>
              ))}

              <h2 className="font-bold uppercase text-[13px] mb-2 mt-2">
                Awards
              </h2>
              {awards.map((award, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[10px] font-bold">[{award.title}]</p>
                  <p className="text-[10px]">
                    [{`${convertDateYear(award.dateReceived)}`}]
                  </p>
                  <p className="text-[10px] text-justify">
                    [{award.description}]
                  </p>
                </div>
              ))}
              <h2 className="font-bold uppercase text-[13px] mb-2 mt-2">
                Certifications
              </h2>
              {certs.map((cert, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[10px] font-bold">
                    [{cert.title}] [{convertDateYear(cert.dateReceived)}]
                  </p>
                  <p className="text-[10px] text-justify">
                    [{cert.description}]
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

export default Simple;
