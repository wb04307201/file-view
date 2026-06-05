package cn.wubo.file.view.auth;

import jakarta.servlet.http.HttpServletRequest;

/**
 * Authentication interface for file-view requests.
 * Implement and register as a Spring bean to control access to all file-view endpoints.
 * If no custom bean is provided, {@code AllowAllAuth} (allow all) is used by default.
 */
public interface IAuth {

    /**
     * Check whether the current request is allowed.
     *
     * @param request the HTTP servlet request
     * @param path    the request URI path (e.g. "/file/view/upload")
     * @return auth result indicating whether the request should be allowed
     */
    AuthResult check(HttpServletRequest request, String path);
}
