module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],

    ui5: {
      url: "https://ui5.sap.com"
    },
    coverageReporter: {
            includeAllSources: true,
            reporters: [
                {
                    type: "html",
                    dir: "coverage"
                },
                {
                    type: "text"
                }
            ],
    check: {
       each: {
               statements: 100,
               branches: 100,
               functions: 100,
               lines: 100
                }
            }
        },
     reporters: ["progress", "coverage"],

    browsers: ["ChromeHeadless"],
    browserConsoleLogOptions: {
         level: "error"
    },
    singleRun: true
  });
};
