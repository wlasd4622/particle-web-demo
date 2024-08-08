#!/bin/sh
 
rm -rf .vercel

# yarn vercel link --token=${VERCEL_PARTICLE_NETWORK_TOKEN} --scope=team_3WZARnZBFhLudP0VSISpBYJK --project web-demo --yes &&
#   yarn vercel pull --yes --token=${VERCEL_PARTICLE_NETWORK_TOKEN} &&
#   yarn vercel build --prod &&
#   yarn vercel --prebuilt --prod --token=${VERCEL_PARTICLE_NETWORK_TOKEN}

token=sZcEYK20nFc2BZJVQh0ipjJG
team=team_fCExlsjtWdbAHtInE8xAnfBO

yarn vercel link --token=$token --scope=$team --project private-web-demo --yes &&
  yarn vercel pull --yes --token=$token &&
  yarn vercel lerna run build --scope=web-demo --prod --token=$token &&
  yarn vercel --prebuilt --prod --token=$token