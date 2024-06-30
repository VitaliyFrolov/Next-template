build-dev:
	docker-compose -f docker-compose.dev.yaml up -d --build

dev-down:
	docker-compose -f docker-compose.dev.yaml down