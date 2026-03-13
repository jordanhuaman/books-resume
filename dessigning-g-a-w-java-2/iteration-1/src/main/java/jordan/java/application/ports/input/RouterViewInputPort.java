package jordan.java.application.ports.input;

import jordan.java.application.ports.output.RouterViewOutputPort;
import jordan.java.application.usecase.RouterViewUseCase;
import jordan.java.domain.Router;

import java.util.List;
import java.util.function.Predicate;

public class RouterViewInputPort implements RouterViewUseCase {

    private final RouterViewOutputPort routerListOutputPort;

    public RouterViewInputPort(RouterViewOutputPort routerViewOutputPort) {
        this.routerListOutputPort = routerViewOutputPort;
    }

    @Override
    public List<Router> getRouters(Predicate<Router> list) {
        var routers = routerListOutputPort.fetchRouters();
        return Router.retrieveRouter(routers, list);
    }
}
