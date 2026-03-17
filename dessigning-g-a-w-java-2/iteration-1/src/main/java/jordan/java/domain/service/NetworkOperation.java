package jordan.java.domain.service;

import jordan.java.domain.entity.Router;
import jordan.java.domain.specification.CIDRSpecification;
import jordan.java.domain.specification.NetworkAmountSpecification;
import jordan.java.domain.specification.NetworkAvailabilitySpecification;
import jordan.java.domain.specification.RouterTypeSpecification;
import jordan.java.domain.vo.Network;

public class NetworkOperation {
    public static Router createNewNetwork(Router router, Network network) {
        var availabilitySpec = new NetworkAvailabilitySpecification(network.address(), network.name(), network.cidr());
        var cidrSpec = new CIDRSpecification();
        var routerTypeSpec = new RouterTypeSpecification();
        var amountSpec = new NetworkAmountSpecification();

        if(cidrSpec.isSatisfiedBy(network.cidr()))
            throw new IllegalArgumentException("CIDR is below "+CIDRSpecification.MINIMUM_ALLOWED_CIDR);

        if(!availabilitySpec.isSatisfiedBy(router))
            throw new IllegalArgumentException("Address already exist");

        if(amountSpec.and(routerTypeSpec).isSatisfiedBy(router)) {
            Network newNetwork = router.createNetwork(network.address(), network.name(), network.cidr());
            router.addNetworkToSwitch(newNetwork);
        }
        return router;
    }
}
