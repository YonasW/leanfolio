module.exports = {
  async redirects() {
    return [
      {
        source: '/s-d-c',
        destination: 'https://www.data-card-for-spotify.com',
        permanent: false,
        basePath: false,
      },
    ]
  },
}
