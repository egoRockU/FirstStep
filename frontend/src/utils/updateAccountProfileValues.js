import axios from "axios";

export const updateAccountProfileValues = (
  profileId,
  profileType,
  accountType,
  userEmail
) => {
  return new Promise((resolve, reject) => {
    let newUserData;
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
          newUserData = res.data.user;
          resolve(newUserData);
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
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
          newUserData = res.data.user;
          resolve(newUserData);
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    }
  });
};
