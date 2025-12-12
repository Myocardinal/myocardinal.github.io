export default function (eleventyConfig) {
    // Output directory: _site

    // Date filter for Nunjucks templates
    eleventyConfig.addFilter("dateFormat", function(date, format) {
        const d = new Date(date);
        const months = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
        return `${months[d.getMonth()]} ${d.getFullYear()}`;
    });

    // Copy `css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("css/");

    // Copy img/ to _site/img/
    eleventyConfig.addPassthroughCopy("img/")

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
