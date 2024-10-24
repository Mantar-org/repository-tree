module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/repository-tree/'  // Replace with your repository name
    : '/',
  outputDir: 'dist'
}

