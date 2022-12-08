module.exports = {
  webpack: {
    configure: {
      // https://github.com/facebook/create-react-app/discussions/11767#discussioncomment-2421668
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
    },
  },
};