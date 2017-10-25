FROM mongo

WORKDIR /var/dmongo
COPY profile_asset.json /var/dmongo
CMD mongoimport --host mongodb -d user -c userProfile --drop --type json --file /var/dmongo/profile_asset.json --jsonArray
