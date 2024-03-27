import downloadPDF from "../../utils/downloadPDF";
import { convertDate, convertDateYear } from "../../utils/convertDate";
import pic from "./images/twoColumnPic.png";
import { toDataURL } from "../../utils/toDataURL";
import { useEffect } from "react";

function TwoColumn({ resumeInfo }) {
  useEffect(() => {
    //convertImage();
  }, []);

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
    characterReference,
  } = resumeInfo;
  const handleDownload = () => {
    downloadPDF("container");
  };

  const convertImage = () => {
    toDataURL(profileImg).then((dataUrl) => {
      console.log(dataUrl);
    });
  };

  return (
    <>
      <div className="w-full">
        {/* ----resume template--- */}
        <div className="flex container max-w-[459px] bg-white mx-auto justify-center items-center font-serif">
          <div className="ml-6 flex-1 border-r-2 border-black w-[229px] mt-6">
            <img
              src={profileImg ? profileImg : pic}
              alt="profile pic"
              className="h-[100px] w-[100px] object-cover border-2 border-indigo-500/100 mb-2"
            />
            <div className="leading-normal">
              <p className="text-[16px] uppercase">{firstName}</p>
              <p className="text-[16px] font-semibold uppercase">{lastName}</p>
            </div>
            <p className="job-description uppercase italic text-[10px]">
              {preferredCareer.join(" | ")}
            </p>
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Contact
            </p>
            <p className="text-[9px]">{address}</p>
            <p className="text-[9px]">{contactNum}</p>
            <p className="text-[9px]">{email}</p>
            <hr className="border-gray-600  w-[178px] mt-2" />
            <p className="text-[11px] mt-1 underline decoration-solid decoration-indigo-950 font-bold">
              Skills
            </p>
            <ul className="text-[9px] list-disc">
              {skills.map((skill, key) => (
                <li key={key}>{skill}</li>
              ))}
            </ul>
            <hr className="border-gray-600  w-[178px] mt-2" />
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Certificates
            </p>
            <div>
              {certs.map((cert, key) => (
                <div className="mb-2" key={key}>
                  {" "}
                  <p className="text-[9px] font-bold">
                    {cert.title}{" "}
                    <span className="space-x-11">
                      {convertDate(cert.dateReceived)}
                    </span>
                  </p>
                  <p className="text-[9px] font-semibold">{cert.description}</p>
                </div>
              ))}
            </div>
            <hr className="border-gray-600  w-[178px] mt-2" />
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Achievements
            </p>
            <div>
              {awards.map((award, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[9px] font-bold ">{award.title}</p>
                  <p className="text-[9px] ">{award.dateRecieved}</p>
                  <p className="text-[9px] text-justify">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-[220px] mx-5">
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Career Objective
            </p>
            <p className="text-justify text-[9px] mt-2">{about}</p>
            <hr className="border-gray-600  w-[200px] mt-2" />
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Education
            </p>
            <div>
              {education.map((educ, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[9px]">{`${educ.degree}, ${educ.program}`}</p>
                  <p className="text-[9px] text-cyan-500 font-semibold">
                    {educ.schoolName}
                  </p>
                  <p className="text-[9px]">{`${convertDateYear(
                    educ.startDate
                  )} - ${convertDateYear(educ.endDate)}`}</p>
                </div>
              ))}
            </div>
            <hr className="border-gray-600  w-[200px] mt-2" />

            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Activities and Involvements
            </p>
            <div>
              {activitiesAndInvolvements.map((activity, key) => (
                <div className="mb-2" key={key}>
                  <p className="text-[9px] font-bold">
                    {activity.title}{" "}
                    <span className="space-x-11">{`${convertDateYear(
                      activity.startDate
                    )} - ${convertDateYear(activity.startDate)}`}</span>
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
            <hr className="border-gray-600  w-[200px] mt-2" />

            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">
              Project
            </p>
            <div>
              {projects.map((project, key) => (
                <div className="mb-2">
                  {" "}
                  <p className="text-[9px] font-bold">
                    {project.projectTitle}{" "}
                    <span className="space-x-11">{`${convertDateYear(
                      project.startDate
                    )} - ${convertDateYear(project.endDate)}`}</span>
                  </p>
                  <p className="text-[9px] font-semibold">{project.subtitle}</p>
                  <p className="text-[9px]">{project.technologiesUsed}</p>
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

export default TwoColumn;
