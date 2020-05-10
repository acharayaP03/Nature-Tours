![Webpack image](https://images.ctfassets.net/nj2caiz7hkjw/3VoFdDTP5SowwESKIOAgm/a111ddd784928b61045c8e811e1769be/webpack.png?fm=webp)

# Webpack-Configuration
  A complete webpack set up for any project

Install all Dependencies 

 --[ webpack, webpack cli ]
 
 --[ Loaders - style loader, css loader, sass loader and node sass as a sass dependencies, and file loader for the images ]
 
 -- [Plugins - Html webpack plugins for to generate html template which will dynamically add script file that contains the unique hash, please see output-> filename -> bundle.[contenthash]
 .js. This allows us to bust caching issue and will generate unique file eveytime the content is changed.]
 
 -- [Set mode to 'development' and devtool to none so that we can see how our code is added to the bundle ]
 
 -- [ Here we have split the config.js file into three seperate .dev.js and .prod.js where rules will be shared from .config.js, webpack-merge will allow us to merge both of these to config.js. -> npm instal --save-dev webpack-merge]
 
 
# Add html-loader, file-loader, and clean-webpack-plugin

- Added html-loader to automatically require the files we reference in img tags

- Added file-loader to handle the svg,png,jpg,gif files from our images

- Configured file-loader to add our images to an imgs directory in dist

- Also configured it to add a hash to their filenames

- Lastly, added clean-webpack-plugin to our production config to clean out the dist directory each time we build