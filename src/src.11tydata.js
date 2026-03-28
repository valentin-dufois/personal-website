module.exports = {
  layout: "base.njk",
  locale: "en",
  eleventyComputed: {
    baseUrl: data => data.locale === "fr" ? "/fr" : "",
    altUrl: data => {
      if (data.locale === "en") {
        return "/fr" + (data.page.url === "/" ? "/" : data.page.url);
      }
      const stripped = data.page.url.replace(/^\/fr/, "");
      return stripped || "/";
    },
    altLocale: data => data.locale === "en" ? "fr" : "en"
  }
};
