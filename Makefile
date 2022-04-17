build-push-docker:
	docker build --pull . -t kuwerin/website:latest
	docker push kuwerin/website:latest
