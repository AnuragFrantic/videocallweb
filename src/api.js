// Base URL of the JiveCam backend. Set VITE_API_URL (e.g. an HTTPS API domain) in a .env file to call it directly.
export const API_URL = (import.meta.env.VITE_API_URL ?? "http://13.201.80.158/api").replace(/\/+$/, "");

// The live site is HTTPS and the API is plain HTTP, which browsers block as mixed content.
// Production builds therefore go through public/policy-proxy.php unless VITE_API_URL is set.
const USE_PROXY = import.meta.env.PROD && !import.meta.env.VITE_API_URL;
const PROXY_URL = "/policy-proxy.php";

const policiesUrl = (slug) => {
    if (USE_PROXY) return slug ? `${PROXY_URL}?slug=${encodeURIComponent(slug)}` : PROXY_URL;
    return slug ? `${API_URL}/policies/${encodeURIComponent(slug)}` : `${API_URL}/policies`;
};

const getJson = async (url, signal) => {
    const response = await fetch(url, { signal });
    const body = await response.json().catch(() => null);
    if (!response.ok || body?.error) {
        const error = new Error(body?.detail ?? body?.message ?? `Request failed (${response.status})`);
        error.status = response.status;
        throw error;
    }
    return body?.data ?? body;
};

// Active policies only (title + slug, no content), in the order they were created.
let policiesRequest = null;
export const fetchPolicies = () => {
    policiesRequest ??= getJson(policiesUrl())
        .then((list) => (Array.isArray(list) ? list : []).filter((p) => p.is_active !== false).sort((a, b) => a.id - b.id))
        .catch((error) => {
            policiesRequest = null; // allow a retry on the next call
            throw error;
        });
    return policiesRequest;
};

export const fetchPolicy = (slug, signal) => getJson(policiesUrl(slug), signal);
