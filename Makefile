all: build

setup:
	asdf install
	yarn

start: setup
	yarn start

build: setup src/**/*
	yarn build


deploy-staging: build
	firebase deploy --only hosting:staging

deploy-production: build
	firebase deploy --only hosting:production

deploy:
	@echo Deploy to staging/production with targets deploy-staging/deploy-production respectively.
