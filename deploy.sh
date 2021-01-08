#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
copy dist\* git-public

cd git-public
git add -A
git commit -m 'deploy'
git push

# windows cmd
cd ..