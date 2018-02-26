.PHONY: clean build dist


clean:
	rm -rf _site

build:
	bundle exec jekyll build --config "_config.yml,_config-production.yml"

dist:
	bundle exec s3_website push
