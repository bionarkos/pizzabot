 var x =require("./package.json").dependencies;

 for(d in x){
     x[d] = `commonjs ${d}`;
 }

module.exports = {
  entry: './src/main/index.js',
  target: 'node',
  output: {
    filename: 'target/slackbot/index.js'
  },
  externals : x
}