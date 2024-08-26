import React from "react";
import "./footerHelpers.css";
import { Link } from "react-router-dom";
import "./footerHelpers.css"

const FooterHelpers = ({ name }) => {
    return (
        <div>
            <h1 className="helper-header">{name}</h1>
            <div className="line"></div>
            <div className="helper-content">
                {name.toLowerCase() === "disclaimer" ? (
                    <div>
                        <p>
                            This website is maintained by Samatva, a non-profit
                            organization. While we strive to ensure the accuracy
                            and reliability of the information provided on this
                            website, we cannot guarantee its completeness or
                            accuracy. The information presented here is for
                            general informational purposes only and should not
                            be construed as professional advice or a substitute
                            for seeking expert counsel.
                        </p>
                        <p>
                            Samatva disclaims any liability for any errors,
                            omissions, or inaccuracies in the content of this
                            website. We reserve the right to make changes to the
                            information contained herein without notice.
                        </p>
                        <p>
                            The links provided on this website may lead to
                            external websites over which Samatva has no control.
                            We are not responsible for the content or practices
                            of these external websites.
                        </p>
                        <p>
                            By accessing and using this website, you agree to
                            these terms and conditions. If you do not agree with
                            any part of these terms, please refrain from using
                            this website.
                        </p>
                    </div>
                ) : name.toLowerCase() === "privacy-policy" ? (
                    <div className="privacy-policy">
                        <p>
                            User information on this site is kept strictly
                            confidential. The site may, however, use this
                            information from time to time for purposes such as
                            corresponding with the users for various issues. We
                            shall duly seek permission of the users in such
                            cases.
                        </p>
                        <strong>Collecting Information</strong>
                        <p>
                            Like many websites, we gather information about how
                            visitors use our website. In general, you can visit
                            many of our web pages without telling us who you are
                            or revealing any personal information about
                            yourself. We may track your visit for trends and
                            statistics, but you will remain anonymous unless you
                            actively submit your personal data to us through the
                            website. Once you choose to give us your personal
                            information, you are not anonymous to us. For more
                            information, see "Cookies and Pixel Tags" section
                            below.
                        </p>
                        <p>
                            If you choose to use our e-mail link to send
                            information about our site to others, we request
                            your e-mail address and the e-mail addresses of your
                            recipients.
                        </p>
                        <strong>Using Information</strong>
                        <p>
                            If you use our e-mail link to send information about
                            our site to others, we will use the personal
                            information you provide to send your message to the
                            recipients you designate. We may also use your
                            e-mail address to communicate with you about our
                            outreach programs and about updates to our website.
                        </p>
                        <strong>Sharing Information</strong>
                        <p>
                            We will not share your personal information you
                            provide with others.
                        </p>
                        <p>
                            On rare occasions, we may disclose specific
                            information upon governmental request, in response
                            to a court order, when required by law, to enforce
                            our website policies, or to protect our or others'
                            rights, property, or safety. We may also share
                            information with companies assisting in fraud
                            protection or investigation. We do not provide
                            information to these agencies or companies for
                            marketing or commercial purposes.
                        </p>
                        <strong>Protecting Your Information</strong>
                        <p>
                            We use a variety of security measures to maintain
                            the safety of your personal information. Your
                            personal information is contained behind secure
                            networks and is only accessible to a limited number
                            of persons who have special access rights to such
                            systems, and are required to keep the information
                            confidential. Regardless of these efforts, no data
                            transmission over the Internet can be guaranteed to
                            be 100% secure.
                        </p>
                        <strong>Modify or Remove Your Information</strong>
                        <p>
                            You have the right to withdraw any consent given
                            with respect to our use of your personal data.
                            Furthermore you have the right to access to request
                            modification or deletion thereof in the event your
                            data are incorrect or processed without your
                            consent.
                        </p>
                        <p>
                            To modify your personal data or to completely
                            opt-out of thesamatva.org using your personal data,
                            please contact us at team@thesamatva.org
                        </p>
                        <strong>Cookies and Pixel Tags</strong>
                        <p>
                            A cookie is a small removable data file that is
                            stored by your web browser on your computer. Cookies
                            allow us to enhance and personalize your online
                            browsing and shopping experience.
                        </p>
                        <strong>For example, we use cookies to:</strong>
                        <p>
                            • Recognize you when you return to our website{" "}
                            <br />• Analyze visitor behavior
                        </p>
                        <p>
                            You can choose to have your computer warn you each
                            time a cookie is being sent or you can choose to
                            turn off all cookies. You do this through your
                            browser settings. Each browser is a little
                            different, so look at your browser Help menu to
                            learn the correct way to modify your cookie
                            settings. If you turn cookies off, you won't have
                            access to many features that make your site
                            experience more efficient and some of our services
                            may not function properly.
                        </p>
                        <p>
                            We also use pixel tags - tiny graphic images - to
                            help us analyze your online behavior.
                        </p>
                        <p>
                            e may use pixel tags to collect information about
                            your visit, including the pages you view, the links
                            you click and other actions taken in connection with
                            our sites and services. We also collect certain
                            standard information that your browser sends to
                            every website you visit, such as your IP address,
                            browser type and language, access times and
                            referring Web site addresses.
                        </p>
                        <strong>Children's Privacy</strong>
                        <p>
                            We do not knowingly collect personal information
                            from children under 13.
                        </p>
                        <strong>Policy Changes</strong>
                        <p>
                            We may change our privacy policy from time to time.
                            We encourage you to refer to this policy on an
                            ongoing basis so that you understand our current
                            privacy policy. This policy was last modified on
                            27-08-2024.
                        </p>
                        <strong>Questions and Feedback</strong>
                        <p>
                            We welcome your questions, comments, and concerns
                            about privacy. Please send us any and all feedback
                            pertaining to privacy, or any other issue at
                            team@thesamatva.org
                        </p>
                    </div>
                ) : null}
                <br />
                <Link to="/" className="back-btn">
                    &larr; Go Back
                </Link>
            </div>
        </div>
    );
};

export default FooterHelpers;
