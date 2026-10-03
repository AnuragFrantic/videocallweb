import Insidebanner from "../../Component/Insidebanner"
import Sidebar from "../../Component/Sidebar"

const DeleteAccount = () => {
    return (
        <>
            <Insidebanner title="Delete Your JiveCam Account" />
            <section className="pb-5 aboutus">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                <h4 className="main-title2 mb-3">How to request account deletion</h4>
                                <p>
                                    You can request deletion from the JiveCam app by signing in, opening your
                                    Profile, selecting <strong>Delete Account</strong>, and confirming your request.
                                    If you cannot access the app, email <a href="mailto:privacy@jivecam.live">privacy@jivecam.live</a>
                                    from the email address registered to your account with the subject
                                    &quot;JiveCam account deletion&quot;. We may ask you to verify that you own the account.
                                </p>
                                <h4 className="main-title2">What happens after you request deletion</h4>
                                <p>
                                    Your account and associated personal data will be permanently deleted within
                                    14 days of receiving and verifying your request. You will no longer be able
                                    to use that account after deletion is complete.
                                </p>
                                <p>
                                    Deletion includes your account profile and personal information, as well as
                                    content and other data associated with your account, except for information
                                    we are required or permitted to retain for legal, security, fraud-prevention,
                                    or dispute-resolution purposes. Any retained information will be kept only
                                    for the applicable purpose and handled in accordance with our
                                    <a href="/privacy-policy"> Privacy Policy</a>.
                                </p>
                                <h4 className="main-title2">Need help?</h4>
                                <p>
                                    For help with an account deletion request, contact
                                    {" "}<a href="mailto:privacy@jivecam.live">privacy@jivecam.live</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeleteAccount
