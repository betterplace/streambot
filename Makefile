all: build

start:
	yarn start

build: src/**/*
	yarn build

deploy: build
	firebase deploy
