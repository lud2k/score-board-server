
export const isNpmRunDev = () => {
  return process.env['npm_lifecycle_script'] === 'webpack-watch-server'
}
