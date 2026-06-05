package cn.wubo.file.view.auth;

/**
 * Result of an authentication check.
 * <p>
 * Three outcomes are possible:
 * <ul>
 *   <li>{@link #allow()} — proceed with the request</li>
 *   <li>{@link #deny(String)} — reject with 403 JSON (for API clients)</li>
 *   <li>{@link #redirect(String)} — 302 redirect to a login page (for BFF flows)</li>
 * </ul>
 */
public class AuthResult {

    private static final AuthResult ALLOW = new AuthResult(true, null, null);

    private final boolean allowed;
    private final String message;
    private final String redirectUrl;

    private AuthResult(boolean allowed, String message, String redirectUrl) {
        this.allowed = allowed;
        this.message = message;
        this.redirectUrl = redirectUrl;
    }

    /**
     * Return a pre-built result that allows the request.
     */
    public static AuthResult allow() {
        return ALLOW;
    }

    /**
     * Create a result that denies the request with a reason message (403 JSON).
     *
     * @param message reason shown to the client
     */
    public static AuthResult deny(String message) {
        return new AuthResult(false, message, null);
    }

    /**
     * Create a result that redirects the browser to a login page (302).
     * Used in BFF mode where the user sees a login form instead of a 403 error.
     *
     * @param url the redirect target (e.g. "/login?from=/file/view")
     */
    public static AuthResult redirect(String url) {
        return new AuthResult(false, null, url);
    }

    public boolean isAllowed() {
        return allowed;
    }

    public String getMessage() {
        return message;
    }

    /**
     * Non-null when a 302 redirect is desired.
     */
    public String getRedirectUrl() {
        return redirectUrl;
    }
}
