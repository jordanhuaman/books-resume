package jordan.java.domain.specification;

import jordan.java.domain.entity.Router;
import jordan.java.domain.vo.RouterType;

public final class RouterTypeSpecification  extends AbstractSpecification<Router> {
    @Override
    public boolean isSatisfiedBy(Router router) {
        return router.getRouterType().equals(RouterType.EDGE) || router.getRouterType().equals(RouterType.CORE);
    }
}
