import React from "react";

function Terms({ isOpen, onAccept, onDecline }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 w-[90%] lg:w-[45%] xl:w-1/3 rounded-lg z-50">
            <div className="flex flex-col justify-between mb-4">
              <h2 className="text-3xl font-semibold">
                Terms and Conditions for FirstStep
              </h2>
              <p className="text-sm">
                These Terms and Conditions govern your use of the Profile
                Building Application (referred to as "FirstStep") provided by
                TechStack, ("we", "us", or "our").
              </p>
              <p className="text-sm font-bold">
                {" "}
                Please read these Terms carefully before using the WebApp.
              </p>
            </div>
            <div className="overflow-y-auto max-h-80 flex flex-col gap-3">
              <p className="flex flex-col">
                <span className="font-bold">1. Acceptance of Terms</span> By
                accessing or using the App, you agree to be bound by these
                Terms. If you do not agree to all the terms and conditions of
                this agreement, then you may not access the App or use any
                services.
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">2. User Accounts</span>
                <span>
                  {" "}
                  2.1. To access certain features of the App, you may be
                  required to create an account. You agree to provide accurate,
                  current, and complete information during the registration
                  process and to keep your account information updated.
                </span>
                <span>
                  2.2. You are responsible for maintaining the confidentiality
                  of your account and password, and you agree to accept
                  responsibility for all activities that occur under your
                  account.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">3. User Content</span>
                <span>
                  3.1. You retain ownership of any content, such as resumes,
                  portfolios, and personal information, that you submit or
                  upload to FirstStep.
                </span>
                <span>
                  3.2. By submitting User Content, you grant us a worldwide,
                  non-exclusive, royalty-free, transferable license to use,
                  reproduce, distribute, prepare derivative works of, display,
                  and perform your User Content in connection with the App and
                  our business operations.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">4. Prohibited Activities</span>
                <span>
                  4.1. You agree not to use the App for any unlawful purpose or
                  in any way that violates these Terms.
                </span>
                <span>
                  4.2. You shall not engage in any conduct that could disable,
                  overburden, damage, or impair the functioning of the App.
                </span>
                <span>
                  4.3. You shall not attempt to gain unauthorized access to any
                  part of the App or any other systems or networks connected to
                  the App.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                {" "}
                <span className="font-bold">5. Employer Use</span>{" "}
                <span>
                  5.1. Employers may use the App to search for potential
                  candidates, review resumes, and communicate with applicants.
                </span>
                <span>
                  5.2. Employers agree to use candidate information obtained
                  through the App solely for legitimate employment-related
                  purposes.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">6. Disclaimer of Warranties</span>
                <span>
                  6.1. The App is provided on an "as is" and "as available"
                  basis. We make no warranties, expressed or implied, regarding
                  the accuracy, reliability, or availability of the App.
                </span>
                <span>
                  6.2. We do not guarantee that the App will be error-free,
                  uninterrupted, or other harmful components.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">7. Limitation of Liability</span>
                <span>
                  7.1. We shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising out of or
                  in connection with your use of the App.
                </span>
                <span>
                  7.2. Our total liability for any claim arising out of or
                  relating to these Terms or the App shall not exceed the amount
                  paid by you (voluntary donation), if any, to access the App.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">8. Termination</span>
                <span>
                  We reserve the right to terminate or suspend your access to
                  the App at any time without prior notice or liability, for any
                  reason whatsoever, including without limitation if you breach
                  these Terms.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">10. Governing Law</span>
                <span>
                  These Terms shall be governed by and construed in accordance
                  with the laws of Republic Act No. 10173(Data Privacy Act of
                  2012), without regard to its conflict of law provisions.
                </span>
              </p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">11. Contact Us</span>
                <span>
                  If you have any questions about these Terms, please contact us
                  at techstack.firststep2024@gmail.com. By using the App, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions.
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

export default Terms;
