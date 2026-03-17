package jordan.java.application.ports.output;

import jordan.java.domain.entity.Router;

import java.util.List;

public interface RouterViewOutputPort {
    List<Router> fetchRouters();
}
