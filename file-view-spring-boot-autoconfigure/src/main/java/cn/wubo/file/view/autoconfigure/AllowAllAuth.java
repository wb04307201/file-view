package cn.wubo.file.view.autoconfigure;

import cn.wubo.file.view.auth.AuthResult;
import cn.wubo.file.view.auth.IAuth;
import jakarta.servlet.http.HttpServletRequest;

/**
 * Default authentication implementation that allows all requests.
 * Replace by providing a custom {@link IAuth} bean.
 */
public class AllowAllAuth implements IAuth {

    @Override
    public AuthResult check(HttpServletRequest request, String path) {
        return AuthResult.allow();
    }
}
