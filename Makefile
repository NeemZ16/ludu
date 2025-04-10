backend:
	cd backend && make serve

setup-frontend:
	cd frontend && npm install

dev-frontend:
	cd frontend && npm run dev

start:
	cd backend && make serve & \
	cd frontend && npm run dev

# one-liner setup + run
dev: backend setup-frontend dev-frontend