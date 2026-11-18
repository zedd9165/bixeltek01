import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy for SISCO",
  description:
    "This Privacy Policy explains how SISCO collects, uses, discloses, and safeguards your information when you use our mobile application and related services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiscoPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Privacy Policy for SISCO
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-600">
            Effective Date: <span className="text-gray-900 font-semibold">28-04-2026</span>
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-base leading-relaxed text-gray-700">
          {/* Welcome Intro */}
          <section className="space-y-3">
            <p>
              Welcome to <strong>SISCO</strong>. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile application and
              related services.
            </p>
            <p>
              By using SISCO, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              1. Information We Collect
            </h2>
            <p>We collect different types of information to provide and improve our services.</p>

            <div className="pl-2 sm:pl-4 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  a. Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Employee ID</li>
                  <li>Job title and department</li>
                  <li>Profile photo</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  b. Employment Information
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                  <li>Attendance records</li>
                  <li>Leave requests and history</li>
                  <li>Payroll-related data (if applicable)</li>
                  <li>Work schedules and shift details</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  c. Device &amp; Usage Information
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                  <li>Device type and OS</li>
                  <li>IP address</li>
                  <li>App usage data</li>
                  <li>Log files and crash reports</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  d. Location Information (Optional)
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
                  <li>Real-time or background location (for attendance/geofencing features)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>Manage employee records and HR processes</li>
              <li>Track attendance and work hours</li>
              <li>Process leave requests and approvals</li>
              <li>Improve app performance and user experience</li>
              <li>Ensure security and prevent fraud</li>
              <li>Send notifications related to HR activities</li>
            </ul>
          </section>

          {/* 3. Sharing of Information */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              3. Sharing of Information
            </h2>
            <p>We do not sell your personal data.</p>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>Your employer/organization using SISCO</li>
              <li>Authorized HR personnel</li>
              <li>Service providers (hosting, analytics, etc.)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              4. Data Security
            </h2>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>Secure servers</li>
              <li>Data encryption</li>
              <li>Access control mechanisms</li>
            </ul>
            <p className="text-gray-600 italic pt-1">
              However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              5. Data Retention
            </h2>
            <p>We retain your data:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>As long as your organization uses SISCO</li>
              <li>As required by legal or regulatory obligations</li>
            </ul>
            <p>After termination, your data may be deleted or anonymized.</p>
          </section>

          {/* 6. Your Rights */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              6. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
            </ul>
            <p>You can contact your employer or us to exercise these rights.</p>
          </section>

          {/* 7. Permissions Used */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              7. Permissions Used
            </h2>
            <p>SISCO may request the following permissions:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>
                <strong>Location</strong> – for attendance tracking
              </li>
              <li>
                <strong>Camera</strong> – for profile or verification
              </li>
              <li>
                <strong>Storage</strong> – for uploading documents
              </li>
              <li>
                <strong>Notifications</strong> – for updates and alerts
              </li>
            </ul>
          </section>

          {/* 8. Third-Party Services */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              8. Third-Party Services
            </h2>
            <p>We may use third-party services such as:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 sm:pl-4 text-gray-700">
              <li>Analytics tools</li>
              <li>Cloud hosting providers</li>
            </ul>
            <p>These services have their own privacy policies.</p>
          </section>

          {/* 9. Children’s Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              9. Children’s Privacy
            </h2>
            <p>
              SISCO is not intended for individuals under the age of 18. We do not knowingly collect
              data from minors.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy from time to time. Updates will be reflected with a new
              &ldquo;Effective Date.&rdquo;
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              11. Contact Us
            </h2>
            <p>If you have any questions, contact us at:</p>
            <p>
              Email:{" "}
              <a
                href="mailto:connect@sisco.in"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                connect@sisco.in
              </a>
            </p>
          </section>

          {/* 12. Consent */}
          <section className="space-y-3 border-t border-gray-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              12. Consent
            </h2>
            <p>By using SISCO, you consent to this Privacy Policy.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
