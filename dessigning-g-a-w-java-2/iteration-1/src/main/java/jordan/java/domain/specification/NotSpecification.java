package jordan.java.domain.specification;

public final class NotSpecification<T> extends AbstractSpecification<T> {
    private final Specification<T> spec;

    public NotSpecification(final Specification<T> spec) {
        this.spec = spec;
    }

    public boolean isSatisfiedBy(final T t) {
        return !spec.isSatisfiedBy(t);
    }
}
