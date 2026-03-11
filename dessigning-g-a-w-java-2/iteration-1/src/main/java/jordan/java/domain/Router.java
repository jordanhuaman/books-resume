package jordan.java.domain;

import java.util.ArrayList;
import java.util.List;

public class Router {
    private final Type type;
    private final RouterId id;

    public Router(Type type, RouterId id) {
        this.type = type;
        this.id = id;
    }

    public static List<Router> checkRouter(
            Type type, List<Router> routers) {
        List<Router> routersList = new ArrayList<>();
        routers.forEach(router -> {
            if (router.type == type) {
                routersList.add(router);
            }
        });
        return routersList;
    }

    public RouterId getId(){
        return this.id;
    }
}
