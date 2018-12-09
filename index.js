var fs = require('fs');
var cheerio = require('cheerio');
var url = require('url');

var urls = [];

module.exports = {
  hooks: {
    "page:before": function (page) {

      if (this.output.name != 'website') return page;

      var $, $el, html;
      var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.layout && this.options.pluginsConfig.layout.footerPath;
      var tmpl = '';
      if (pathFile && fs.existsSync(pathFile)) tmpl = fs.readFileSync(pathFile, {encoding: 'utf-8'});

      console.log(page.content);
      page.content = page.content + tmpl;

      return page;
    }
  }
}
