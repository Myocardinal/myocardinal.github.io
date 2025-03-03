export default function (eleventyConfig) {
    // Output directory: _site

    // Copy `css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("css/");

    // Copy CNAME for github pages to point to my domain
    eleventyConfig.addPassthroughCopy({"config/CNAME": "CNAME"})

    eleventyConfig.setServerOptions({
        mimeTypes: {
            "css": "text/css"
        }
    })

    return {
        templateFormats: ['njk', 'md', 'html', 'css'],
        dir: {

        }
    }
};
