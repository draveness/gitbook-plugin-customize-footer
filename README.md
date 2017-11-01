# Custom Footer for Gitbook

Super simple pluging to add footer to gitbooks

## Add to book.json

add to `book.json`

```
{
  "plugins": [
    "footer"
  ],
  "pluginsConfig": {
    "layout": {
      "footerPath" : "layouts/footer.html"
    }
  }
}
```

## Install dependencies

`gitbook install`

### Note

_forked from [gitbook-plugin-footer](https://www.npmjs.com/package/gitbook-plugin-footer)_