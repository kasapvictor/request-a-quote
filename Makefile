################ Docker commands ################
# include .env - можно брать настройки из .env файла, к переменным обращаться так же $(VARIABLE)
include .env

# вызывает по умолчанию команду help.
.PHONY: help

help: ### Ignore - Show current help message
	@echo "✨ App Commands:"
	@grep -E '^[a-zA-Z_-]+:.*?✨.*$$' ./Makefile | awk '!/## Ignore/' | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

###########################################
#								✨App Commands
###########################################
install: ## ✨ Install yarn Required Packages for the App
	yarn install --frozen-lockfile || yarn install

start: ## ✨ Starts the App Server in Development Mode
	@echo "🚀 Starting server... on https://local.wms.digitalbutlers.me:$(DEFAULT_PORT)"
	DEFAULT_HOST=${DEFAULT_HOST} DEFAULT_PORT=$(DEFAULT_PORT) yarn start

build: type-check lint ## ✨ Builds the App in Production Mode (Compressed Files)
	@echo "🚀 [Build] Running ..."
	yarn build
	@echo "🎉 [Build] Done!"

type-check: ## ✨ Checking Types
	@echo "🔎 [TypeScript] Checking types..."
	yarn type-check
	@echo "✅  [TypeScript] Types check passed"

lint: ## ✨ Check & fix code style js
	@echo "🔎 [ESLint] Checking code style..."
	yarn lint
	@echo "✅  [ESLint] Code style check passed"

pretty: ## ✨ Do pretty code css/js
	@echo "🚀 [Prettier] Formatting code..."
	yarn pretty
	@echo "✅  [Prettier] Code style check passed"

pre-commit: type-check ## ✨ Husky precommit
	@echo "🚀 [Husky] Checking code..."
	yarn pre-commit
	@echo "✅  [Husky] Passed"

test: ## ✨ Run testing
	@echo "🚀 [Test] Starting ..."
	yarn test
	@echo "✅  [Test] Passed"

test-verbose: ## ✨ Run testing
	@echo "🚀 [Test] Starting ..."
	yarn test:verbose
	@echo "✅  [Test] Passed"

test-watch: ## ✨ Run start testing watcher
	@echo "🚀 [Test] Starting ..."
	yarn test:watch
	@echo "✅  [Test] Passed"

test-coverage: ## ✨ Run testing with coverage table
	@echo "🚀 [Test] Starting ..."
	yarn test:coverage
	@echo "✅  [Test] Passed"
