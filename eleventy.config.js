export default function (eleventyConfig) {
    // Output directory: _site

    // Copy `css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};

