docker build --platform=linux/amd64 --no-cache -t swarntech/titan:latest .
docker push swarntech/titan:latest
cd k8s && kubectl apply -f .