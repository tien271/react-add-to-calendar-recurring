#!/usr/bin/env bash

rm -rf ./node_modules ./lib ./dist
npm install

git checkout .

npm version $1

react-docgen ./src/*.js --resolver findAllComponentDefinitions | ./scripts/buildDocs.sh

git add .

git commit -m "Publish new API docs (automated commit)"

git push

git push --tags

npm publish

./docs-site/publish.sh
