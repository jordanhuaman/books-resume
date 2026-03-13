package jordan.java.framework.adapter.input.stdin;

import jordan.java.application.ports.input.RouterViewInputPort;
import jordan.java.application.usecase.RouterViewUseCase;
import jordan.java.domain.Router;
import jordan.java.domain.RouterType;
import jordan.java.framework.adapter.output.file.RouterViewFileAdapter;

import java.util.List;

public class RouterViewCLIAdapter {
    private RouterViewUseCase routerViewUseCase;

    public RouterViewCLIAdapter(){
        setAdapters();
    }

    public List<Router> obtainRelatedRouters(String type) {
        return routerViewUseCase.getRouters(
                Router.filterRouterByType(RouterType.valueOf(type)));
    }

    private void setAdapters(){
        this.routerViewUseCase = new RouterViewInputPort(RouterViewFileAdapter.getInstance());
    }
}
