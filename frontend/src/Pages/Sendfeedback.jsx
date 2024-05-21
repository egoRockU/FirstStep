import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import logo from "../images/profile.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImSpinner } from "react-icons/im";
import axios from "axios";

function Sendfeedback() {
  const { user } = useSelector((state) => state.user);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [profileType, setProfileType] = useState();
  const [profileId, setProfileId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileType(user.profileType);
      setProfileId(user.profileId);
    }
  }, [user]);

  const sendFeedback = () => {
    if (!subject) {
      toast.error("Please write something in the subject");
    }
    if (!body) {
      toast.error("Please write something in the body.");
    }

    setLoading(true);
    const inputs = {
      sender: {
        profileType,
        profileId,
      },
      subject,
      body,
    };

    axios
      .post("/api/feedback/create", inputs, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setSubject("");
        setBody("");
        toast.success("Feedback sent! Thank you for sending us a message.");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Sending Feedback Failed");
        console.log(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="w-full pt-20 pb-20">
        <div className="flex flex-col w-full text-center">
          <div className="pt-20 pb-10">
            <h1 className="font-bold text-2xl text-[#444b88]">Send Feedback</h1>
            <p className="italic text-gray-500">
              {" "}
              Let us know how we can improve our site.
            </p>
          </div>
          <div className="border border-[#444b88] w-[90%] lg:w-3/5 mx-auto ">
            <div className="flex flex-col px-3 lg:px-10 py-3 lg:py-6 ">
              <div className=" flex items-center gap-2 w-full pt-5">
                <h1 className="text-xl">Subject:</h1>
                <input
                  type="text"
                  value={subject}
                  className="border-b-2 border-[#444b88] w-full outline-none"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="pt-8">
                <textarea
                  name="Body"
                  id=""
                  cols="30"
                  rows="15"
                  className="w-full border border-[#444b88] outline-none px-3 py-2"
                  placeholder="Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className="flex w-full justify-end gap-4 pt-2">
                <button className="border border-[#444b88] px-2 py-1 rounded-md">
                  Cancel
                </button>
                <button
                  className="border border-[#444b88] px-2 py-1 rounded-md bg-[#bad2ff]"
                  onClick={sendFeedback}
                >
                  {loading ? (
                    <ImSpinner className="animate-spin mr-2" />
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sendfeedback;
