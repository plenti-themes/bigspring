# Bigspring

![Screenshot of Bigspring theme showing menu and hero image of two people designing a website](assets/bigspring.png?raw=true "Bigspring Plenti Theme")

## Adding Bigspring as a theme to existing Plenti site
1. Download as theme: `plenti theme add git@github.com:plenti-themes/bigspring`
2. Enable it: `plenti theme enable bigspring`
3. Use theme routes: copy the "types" key from your theme's `plenti.json` in your site's `plenti.json` (you'll need this for pagination to work)

**Note:**
- Files in your existing site with the same name will override templates from the theme.
- You can avoid pulling in content/assets/layout using `"exclude"` in your `"theme_config"`, see: https://plenti.co/docs/themes

## Making changes to Bigspring

Every theme in Plenti is just a regular Plenti site, so you can develop it like normal:
1. Download it: `git clone git@github.com:plenti-themes/bigspring`
2. Go inside the project: `cd bigspring`
3. Start up a local development server: `plenti serve`
