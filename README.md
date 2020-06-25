# Fullstack Twitter Clone

This is the accompanying repository to [this blog post.](https://kunal.sh/posts/building-a-fullstack-twitter-clone)

Check out the Demo app at https://fullstack-twitter.onrender.com/ 

## Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/kunalgorithm/fullstack-twitter)

You'll also need to deploy a postgres instance (starts at $7/month on render) and then copy over the internal access url to an environment variable `DATABASE_URL`. 

The only other variable you'll have to set is `JWT_SECRET` with `jsonwebtoken` uses to create unique cookies to authenticate user sessions. 

### Production build and start scripts 

Render should detect that you're deploying a next app and set the appropriate build and start commands automatically, but in case you need them

Build 
```
yarn; yarn build
```

Start
```
yarn start
```
