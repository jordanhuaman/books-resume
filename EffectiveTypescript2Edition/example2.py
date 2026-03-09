from sklearn.model_selection import cross_validate, KFold,RepeatedKFold, RepeatedStratifiedKFold
import numpy as np

cv_regressor = RepeatedKFold(
    n_splits=5,
    n_repeats=2,
    random_state=42)


cv_clasification = RepeatedStratifiedKFold(
    n_splits=5,
    n_repeats=2,
    random_state=42
)