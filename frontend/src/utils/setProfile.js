import axios from "axios";

export const setProfile = async (profileId, profileType) => {
  let apiRoute;
  if (profileType == "applicant") {
    apiRoute = "/api/applicantprofile/retrieveone";
  } else if (profileType == "employer") {
    apiRoute = "/api/employerprofile/retrieveone";
  } else {
    localStorage.setItem("profileImage", "");
    localStorage.setItem("profileName", "");
    return;
  }
  axios
    .post(
      apiRoute,
      { profileId },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      const profObj = res.data;
      localStorage.setItem("profileImage", JSON.stringify(profObj.profileImg));
      localStorage.setItem(
        "profileName",
        `${profObj.firstName} ${profObj.lastName}`
      );
    });
};
