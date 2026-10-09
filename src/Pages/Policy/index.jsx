import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Insidebanner from "../../Component/Insidebanner";
import Sidebar from "../../Component/Sidebar";
import { fetchPolicy } from "../../api";

// Text pasted into the admin editor often uses non-breaking spaces everywhere, which stops lines from wrapping.
const normalizeSpaces = (html = "") => html.replace(/&nbsp;|\u00A0/g, " ");

// Renders any policy (About, Terms, Privacy, EULA, ...) managed from the admin panel.
const Policy = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ status: "loading", policy: null, error: "" });
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        setState({ status: "loading", policy: null, error: "" });

        fetchPolicy(slug, controller.signal)
            .then((policy) => {
                if (!policy || policy.is_active === false) {
                    setState({ status: "notfound", policy: null, error: "" });
                } else {
                    setState({ status: "ready", policy, error: "" });
                    document.title = `${policy.title} | Jive Cam`;
                }
            })
            .catch((error) => {
                if (error.name === "AbortError") return;
                setState({
                    status: error.status === 404 ? "notfound" : "error",
                    policy: null,
                    error: error.message,
                });
            });

        return () => {
            controller.abort();
            document.title = "Jive Cam";
        };
    }, [slug, retry]);

    const { status, policy } = state;
    const bannerTitle = status === "ready" ? policy.title : status === "notfound" ? "Page Not Found" : " ";

    return (
        <>
            <Insidebanner title={bannerTitle} />
            <section className={`pb-5 aboutus policy-page ${slug}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="content">
                                {status === "loading" && (
                                    <div className="py-5 text-center">
                                        <div className="spinner-border" role="status" style={{ color: "#9B30FF" }}>
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                )}

                                {status === "notfound" && (
                                    <div className="py-5">
                                        <p>The page you are looking for does not exist or is no longer available.</p>
                                        <Link to="/">Go back home</Link>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="py-5">
                                        <p>We couldn&apos;t load this page right now. Please try again.</p>
                                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setRetry((n) => n + 1)}>
                                            Retry
                                        </button>
                                    </div>
                                )}

                                {status === "ready" && (
                                    <div className="policy-content" dangerouslySetInnerHTML={{ __html: normalizeSpaces(policy.content) }} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Policy;
