import axios from "axios";

export const updateAccountProfileValues = (
  profileId,
  profileType,
  accountType,
  userEmail
) => {
  const updateInputs = {
    email: userEmail,
    profileType,
    profileId,
  };

  if (accountType == "google") {
    axios
      .post("/api/googleaccounts/addprofile", updateInputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  if (accountType == "local") {
    axios
      .post("/api/localaccounts/addprofile", updateInputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};
