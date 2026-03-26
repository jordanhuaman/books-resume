package jordan.java.domain.service;

import jordan.java.domain.entity.Router;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

// This is a domain service and not a method inside an entity because we handle more than one entity.
public class RouterSearch {
    public static List<Router> retrieveRouter(List<Router> routers, Predicate<Router> predicate) {
        return routers.stream()
                .filter(predicate)
                .collect(Collectors.<Router>toList());
    }
}
