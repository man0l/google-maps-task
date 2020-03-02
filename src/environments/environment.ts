// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'https://5e5cd25297d2ea0014796d06.mockapi.io',
  endpoint: {
    google: '/map',
    openStreet: '/map-open-street'
  },

};
