import React from "react";

function Privacyandpolicy({ isOpen, onAccept, onDecline }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 w-[90%] lg:w-[45%] xl:w-1/3 rounded-lg z-50">
            <div className="flex flex-col justify-between mb-4">
              <h2 className="text-3xl font-semibold">
                Privacy Policy for FirstStep
              </h2>
              <p className="text-base">
                This Privacy Policy describes how TechStack ("we", "us", or
                "our") collects, uses, and discloses personal information when
                you use our Profile Building Application (referred to as
                "FirstStep").
              </p>
            </div>
            <div className="overflow-y-auto max-h-80 flex flex-col gap-2">
              <p className="flex flex-col gap-2">
                <span className="font-bold">1. Information We Collect</span>
                <span>
                  1.1. Information You Provide: When you create an account or
                  use the App, we may collect personal information such as your
                  name, email address, contact details, educational background,
                  skills, and other information you choose to provide.
                </span>
                <span>
                  1.2. Information Automatically Collected: We may automatically
                  collect certain information about your device and usage of the
                  App, including your IP address, device type, operating system,
                  and usage patterns. This information helps us improve the App
                  and provide a better user experience.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">2. Use of Information</span>
                <span>
                  2.1. We may use the information we collect for the following
                  purposes:
                </span>
                <span>- To generate resume and portfolio.</span>
                <span>- To provide and maintain the App.</span>
                <span>
                  - To personalize your experience and customize the content you
                  see.
                </span>
                <span>
                  - To communicate with you, including sending you important
                  updates and notifications.
                </span>
                <span>
                  - To comply with legal obligations or protect our rights and
                  interests.{" "}
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">3. Sharing of Information</span>
                <span>
                  3.1. We may share your personal information with third-party
                  service providers who assist us in operating the App and
                  providing related services. These service providers are
                  contractually obligated to use your information only for the
                  purposes of providing services to us and in a manner
                  consistent with this Privacy Policy.
                </span>
                <span>
                  3.2. We may also share your information with employers or
                  recruiters who use the App for the purpose of recruiting
                  potential candidates. However, we do not disclose your
                  personal information to employers without your consent.
                </span>
                <span>
                  3.3. We may disclose your information if required by law or in
                  response to a valid legal request, such as a court order or
                  subpoena.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">4. Data Security</span>
                <span>
                  4.1. We take reasonable measures to protect the security of
                  your personal information and prevent unauthorized access,
                  disclosure, or alteration. However, no method of transmission
                  over the internet or electronic storage is completely secure,
                  and we cannot guarantee absolute security.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">5. Data Retention</span>
                <span>
                  5.1. We will retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">6. Your Rights</span>
                <span>
                  6.1. You have the right to access, correct, or delete your
                  personal information. You may also have the right to restrict
                  or object to certain processing of your information. To
                  exercise these rights, please contact us using the contact
                  information provided below.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">
                  7. Changes to this Privacy Policy
                </span>
                <span>
                  7.1. We may update this Privacy Policy from time to time. Any
                  changes will be effective immediately upon posting the revised
                  policy on the App. We encourage you to review this Privacy
                  Policy periodically for any updates.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">9. Contact Us</span>
                <span>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at{" "}
                  <a href="techstack.firststep2024@gmail.com"></a>
                  techstack.firststep2024@gmail.com.
                </span>
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={onDecline}
                  className="bg-white text-black border border-[#444b88] px-4 py-2 rounded-lg mr-2 hover:bg-red-400"
                >
                  Decline
                </button>
                <button
                  onClick={onAccept}
                  className="bg-[#bad2ff] border border-[#444b88] px-4 py-2 rounded-lg text-black"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Privacyandpolicy;
