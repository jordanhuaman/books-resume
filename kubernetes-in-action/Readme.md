### Learning
- When we create a pod using `kubectl create -f deployment.yaml`, we get a container runing.
- The pods lives inside your local device's network or in the cloud. We need to create a tunnel to expand the connection to external user or authenticated user.

### Usefull Commands
- `docker run -p 8080:8080 kubia` -> run kubia after build in chap2
- `kubectl get pods` -> using default namespace
- `kubectl get po kubia-manual -o yaml/json`
- `docker logs {id}`
- `kubectl config get-contexts` 
- `kubectl config current-context`
- `kubectl config use-context minikube`
- `kubectl create -f deployment.yaml`
- `kubectl get pods`
- `docker logs {id}`
- `kubectl port-forward kubia-q5q5q 8080:8080`
- `kubectl get services`
- `get po --show-labels `
- `kubectl get po -L creation_method,env`
- `kubectl label pod kubia-q5q5q creation_method=manual2`
- `kubectl label pod kubia-manual-v2 creation_method=manual2 --overwrite`
- `kubectl get pods -l 'env=test'` 
- `kubectl get pods -l 'env in (production, staging), version notin (2.0), app'`