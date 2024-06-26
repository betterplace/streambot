all: build

setup:
	asdf install
	yarn

start: setup
	yarn start

build: setup src/**/*
	yarn build

deploy: build
	firebase deploy
