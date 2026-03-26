package jordan.java.domain.specification;

public abstract sealed class AbstractSpecification<T> implements Specification<T> permits
        AndSpecification,
        OrSpecification,
        NotSpecification,
        CIDRSpecification,
        NetworkAmountSpecification,
        NetworkAvailabilitySpecification,
        RouterTypeSpecification {

    public abstract boolean isSatisfiedBy(T t);

    public Specification<T> and(final Specification<T> specification) {
        return new AndSpecification<T>(this, specification);
    }

    public Specification<T> or(final Specification<T> specification) {
        return new OrSpecification<T>(this, specification);
    }

    public Specification<T> not() {
        return new NotSpecification<T>(this);
    }
}
