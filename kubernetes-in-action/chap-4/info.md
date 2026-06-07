### Kukernetes basic structure

ReplicaSet (el objeto en sí)
├── metadata        ← identifica al ReplicaSet
└── spec            ← define cómo debe comportarse
      ├── replicas
      ├── selector  ← qué pods debe controlar
      └── template  ← molde para crear pods nuevos
            ├── metadata  ← identifica a los pods creados
            └── spec      ← define cómo son esos pods

### Match expression example:
```
# Selecciona pods con env=prod O env=staging, Y que NO sean versión 3
matchExpressions:
  - key: env
    operator: In
    values:
      - prod
      - staging
  - key: version
    operator: NotIn
    values:
      - "3"
```