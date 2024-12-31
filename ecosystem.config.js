module.exports = {
    apps: [
      {
        name: "nextjs-app",
        script: "npm",
        args: "start",
        watch: false,
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  