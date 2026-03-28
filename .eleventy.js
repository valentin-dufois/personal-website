module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  // Customize markdown-it to allow HTML
  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.set({ html: true });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
