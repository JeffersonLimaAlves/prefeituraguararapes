
deploy-production:
	cd build && aws s3 cp ./ s3://arqueageotec.com.br/ --recursive --profile production
	aws cloudfront create-invalidation --distribution-id E1F94JJ56BNL4F --paths "/static/css*" "/static/js*" "/static/js/*" "/static/*" "/static*" "/static/css/*" --profile production
.PHONY: deploy-production

deploy-stage:
	cd build && aws s3 cp ./ s3://stage.arqueageotec.com.br/ --recursive --profile stage
	aws cloudfront create-invalidation --distribution-id EJ0QUZDUDCT2S --paths "/static/css*" "/static/js*" "/static/js/*" "/static/*" "/static*" "/static/css/*" --profile stage
.PHONY: deploy-stage

install_geoui:
	@echo Installing GeoUI
	export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain bitlayer --domain-owner 463425750923 --region us-east-1 --query authorizationToken --output text --profile development` \
	&& npm install @bitlayer/geoui --@bitlayer:registry=https://bitlayer-463425750923.d.codeartifact.us-east-1.amazonaws.com/npm/bitlayer/ --tag latest --save
.PHONY: install_geoui

install_op_client:
	@echo Installing GeoUI
	export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain bitlayer --domain-owner 463425750923 --region us-east-1 --query authorizationToken --output text --profile development` \
	&& npm install op-client --@bitlayer:registry=https://bitlayer-463425750923.d.codeartifact.us-east-1.amazonaws.com/npm/bitlayer/ --tag latest --save
.PHONY: install_geoui