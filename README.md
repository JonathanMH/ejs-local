# Compile EJS templates locally

A quick demo of how to locally compile ejs templates with data from a .json file.

* build.js - the script
* data.json - your data
* test.ejs - your template with placeholders
* done.html - your result

## installation & usage
```
npm install
node build.js
```

## example

test.ejs
```
<style>
body {
  background-color: <%- layout.color1 %>;
}
</style>
<h1>Hello, <%= user.name %>, my darling.</h1>
<p class="tagline"><%= content.tagline %></p>
```

data.json
```
{
  "user": {
    "name": "Jonathan"
  },
  "content" : {
    "tagline": "AMAAAAAAAAZING, BUY ALL OF THIS NOW!"
  },
  "layout": {
    "color1": "magenta"
  }
}
```

turn into done.html:
```
<style>
body {
  background-color: magenta;
}
</style>
<h1>Hello, Jonathan, my darling.</h1>
<p class="tagline">AMAAAAAAAAZING, BUY ALL OF THIS NOW!</p>
```
