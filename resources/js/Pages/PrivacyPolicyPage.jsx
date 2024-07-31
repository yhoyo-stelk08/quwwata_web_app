import AppLayout from "@/Layouts/AppLayout";

export default function CookiePolicyPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl flex items-center justify-center mx-auto mt-10">
        <div className="flex flex-col items-center justify-center m-0 h-full py-6 bg-transparent  text-slate-200 font-roboto_condensed">
          {/* Title */}
          <div className="flex flex-col justify-center md:justify-start w-full px-6 space-y-3">
            <h1 className="text-3xl  font-bold mb-3 tracking-normal">
              Privacy Policy
            </h1>
            <p>Last updated: 17 July 2024</p>
            <p>
              Welcome to quwwata archery website ! We value your privacy and are
              committed to protecting your personal data. This Privacy Policy
              outlines how we collect, use, and protect your information when
              you visit our website and make use of our services.
            </p>
            <div className="h-[500px] w-full overflow-auto font-roboto_condensed">
              <ul className="list-inside list-decimal  text-2xl">
                <li>
                  <span className="font-bold ">Information We Collect</span>
                  <ul className="list-inside list-disc text-xl p-4">
                    <li className="space-y-4">
                      <strong>Personal Information</strong>
                      <p className="text-base pl-7">
                        Personal Information When you visit our Site, register
                        for an account, place an order, subscribe to our
                        newsletter, or interact with our services, we may
                        collect the following personal information:
                      </p>
                      <ul className="list-inside list-disc text-base pl-7">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Shipping address</li>
                        <li>Billing address</li>
                        <li>Phone number</li>
                        <li>Payment information (credit/debit card details)</li>
                        <li>Date of birth</li>
                        <li>Purchase history</li>
                      </ul>
                    </li>
                    <li className="space-y-4 mt-2">
                      <strong>Non-Personal Information</strong>
                      <p className="text-base pl-7">
                        We also collect non-personal information automatically
                        when you visit our Site, including:
                      </p>
                      <ul className="list-inside list-disc text-base pl-7">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Operating system</li>
                        <li>Referring URLs</li>
                        <li>Pages viewed and the order of those pages</li>
                        <li>Time spent on each page</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">How We Use</span>
                  <p className="text-base pl-7">
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties except in the following
                    circumstances:
                  </p>
                  <ul className="list-inside list-disc text-base pl-7">
                    <li>To process and fulfill your orders</li>
                    <li>
                      To communicate with you regarding your orders and
                      inquiries
                    </li>
                    <li>To personalize your shopping experience</li>
                    <li>To send you promotional emails and newsletters</li>
                    <li>To improve our website and services</li>
                    <li>
                      To prevent fraud and protect the security of our Site
                    </li>
                  </ul>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">Sharing Your Information</span>
                  <p className="text-base pl-7">
                    We do not sell, trade, or otherwise transfer your personal
                    information to outside parties except in the following
                    circumstances:
                  </p>
                  <ul className="list-inside list-disc text-base pl-7">
                    <li>
                      Service Providers: We may share your information with
                    </li>
                    <li>
                      Legal Compliance: We may release your information when we
                    </li>
                    <li>
                      Business Transfers: In the event of a merger, acquisition,
                    </li>
                  </ul>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">Data Security</span>
                  <p className="text-base pl-7">
                    We implement various security measures to maintain the
                    safety of your personal information. These include:
                  </p>
                  <ul className="list-inside list-disc text-base pl-7">
                    <li>Secure Socket Layer (SSL) encryption</li>
                    <li>Regular malware scanning</li>
                    <li>Access control policies</li>
                    <li>Secure payment processing</li>
                  </ul>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">Your Rights</span>
                  <p className="text-base pl-7">
                    You have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-inside list-disc text-base pl-7">
                    <li>Access: You can request access to the personal data</li>
                    <li>Correction: You can request that we correct any</li>
                    <li>
                      Deletion: You can request that we delete your personal
                    </li>
                    <li>Objection: You can object to the processing of your</li>
                    <li>
                      Portability: You can request a copy of your personal
                    </li>
                  </ul>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">
                    Cookies and Tracking Technologies
                  </span>
                  <p className="text-base pl-7">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our Site. Cookies are small data files
                    stored on your device that help us understand how you use
                    our Site and improve our services. You can manage your
                    cookie preferences through your browser settings.
                  </p>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">Third-Party Links</span>
                  <p className="text-base pl-7">
                    Our Site may contain links to third-party websites. We are
                    not responsible for the privacy practices of these sites. We
                    encourage you to review their privacy policies before
                    providing any personal information.
                  </p>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">
                    Changes to Our Privacy Policy
                  </span>
                  <p className="text-base pl-7">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the “Last updated” date. We
                    encourage you to review this Privacy Policy periodically.
                  </p>
                </li>
                <li className="space-y-2 mb-2">
                  <span className="font-bold">Contact Us</span>
                  <p className="text-base pl-7">
                    If you have any questions or concerns about this Privacy
                    Policy or our data practices, please contact us at:
                  </p>
                  <ul className="list-inside text-base pl-7">
                    <li>Email: admin@example.com</li>
                    <li>Address: 123 Main Street</li>
                    <li>Phone: +1 234-567-8901</li>
                  </ul>
                </li>
              </ul>
              <p>By using our Site, you consent to our Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
