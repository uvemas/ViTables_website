_pages: node_modules
	node build.js

node_modules: package.json
	npm install

.PHONY: _pages

