# Frontend Coding Challenge

This feature is a Sign up Banner component which consists of an input field (user email) and a submit button.

## Demo
![Alt Text](http://g.recordit.co/AXBlAtnj1q.gif)


## Brief

Figma Design: https://www.figma.com/file/nd7KIdqz6qnu3Q02APVbRR/CRO-Tests?node-id=103%3A90

Format: Desktop only



## Technology used

```bash
React
```

React is one of the most popular framework/library. By using React to build this feature we can easily re-use this feature/component in other larger components or Apps. Thanks to React we can separate our concerns, we can easily include the logic (email input/ post request), input field and styles in the components.

## Questions

The sticky banner experiment is desktop only, at least the way it is designed for
now. How can we adapt this on mobile?

For mobile we need two inputs:
  - A figma design for the mobile banner
  - Using media queries we can switch to the mobile-friendly design

How can we verify if this new sticky banner is an improvement for the conversion
rate? How can we know it doesn’t worsen the UX on the blog?

To verify the Marketing team hypothesis, we split the traffic, 50% of the visitors will see the Sign Up banner (A/B testing). After a XX time (XX defined by the amounts of visits needed to validate the hypothesis) we compare if the conversion rate (CR) improved or declined. Depending on CR, we can decide to pursue having a Sign Up banner or not.

What else could we do to improve CR on the blog?

-Incentive the sign up process (e.g. -10% on the first 3 months, offer an introduction call to support with the use of the product)
-Test out appealing tag lines (e.g. Do you feel like you don't get any tax returns?)
-Show social proof (e.g. Already 20K people are saving money in Belgium)
-Have a trial period for the paying version (e.g. first month is for free)
-Improve product offer (e.g. only charge user if he uses more than the free version)
-Add animation on design (e.g. the man waving instead of static)
-Add a confidentialy message ensuring the company respects GDPR rules.

## Extra thoughts

- Add testing to improve reliability
- Add further validations on email input field to improve lead quality
- Add a mobile version to improve conversion rate

## How to use this feature?

### react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

### Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
