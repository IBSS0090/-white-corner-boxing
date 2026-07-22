module.exports = function (eleventyConfig) {
  // copy static assets straight through to the output root
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
