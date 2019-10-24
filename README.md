# gatsby-plugin-olark

[Olark](www.olark.com) is a widget you can add to your site to talk to your visitors. You can use it as live chat or leave it as an offline email form.

## Install

`npm install --save gatsby-plugin-olark`

## How to use

Go to Olark's [installation page](https://www.olark.com/install/) and click "Install as Plugin." This page will list your Site ID, which will look something like `####-###-##-####`. Use this in your plugin options as shown below.

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-olark`,
      options: {
        olarkSiteID: YOUR_SITE_ID,
      },
    },
  ],
}
```
