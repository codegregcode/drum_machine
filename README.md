# drum_machine

Creating a drum machine as part of one of the front end development libraries projects on freeCodeCamp.

## tech

A React app built with Vite

```
npm create vite@latest drum_machine -- --template react
```

### dependencies

- `react` ^18.3.1 - JS library for building a UI with components
- `react-dom` ^18.3.1 - Provides DOM methods to render React
- `react-router-dom` ^6.26.2 - Manages navigation and routing within the app

### devDependencies

- `@eslint/js` ^9.11.1 - ESLint config for JS linting
- `@vitejs/plugin-react` ^4.3.2 - Vite plugin for React
- `eslint` ^9.11.1 - JS linter for code quality
- `eslint-plugin-react` ^7.37.0 - ESLint rules for React
- `eslint-plugin-react-hooks` ^5.1.0-rc.0 - Rules for React hooks usuage
- `eslint-plugin-react-refresh` ^0.4.12 - Rules for React Fast Refresh
- `globals` ^15.9.0 - List of global variables for ESLint
- `vite` ^5.4.8 - Build tool

## objectives

Build an app that is functionally similar to this: [https://drum-machine.freecodecamp.rocks/](https://drum-machine.freecodecamp.rocks/).

Fulfill the below user stories and get all of the tests to pass. Use
whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React,
Redux, and jQuery to complete this project. You should use a frontend
framework (like React for example) because this section is about
learning frontend frameworks. Additional technologies not listed above
are not recommended and using them is at your own risk. We are looking
at supporting other frontend frameworks like Angular and Vue, but they
are not currently supported. We will accept and try to fix all issue
reports that use the suggested technology stack for this project. Happy
coding!

~~**User Story #1:** I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.~~

~~**User Story #2:** Within `#drum-machine` I can see an element with a corresponding `id="display"`.~~

~~**User Story #3:** Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`,
a unique id that describes the audio clip the drum pad will be set up
to trigger, and an inner text that corresponds to one of the following
keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.~~

~~**User Story #4:** Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).~~

~~**User Story #5:** When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.~~

~~**User Story #6:** When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).~~

~~**User Story #7:** When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).~~

## incompabatibilities

**React 18 has known incompatibilities with the tests for this project (see [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

## diary

5/10 - [am] Yesterday evening I started this project, I didn't get much done apart from creating the basic project structure and importing the tests from freeCodeCamp.

This morning I've worked on the routing in the app, so that you land on a title page and then click into the `<DrumMachine />` component. I've also been working on the design/styling of the drum machine, it is inspired by the [Roland 909](https://en.wikipedia.org/wiki/Roland_TR-909). I created a colour palette using the [Image Picker from Coolors](https://coolors.co/image-picker) and used a [free font from dafont](https://www.dafont.com/pbio.font) that matches the typeface used by Roland. The 909 will also be the source of the sounds, ~~as I'll record/export the 909 samples included in [Logic Pro X](https://www.apple.com/uk/logic-pro/). For the time being I've used the sounds provided by freeCodeCamp.~~

[pm (late commit 😅)] Worked a bit more on the styling. I removed some packages that won't be used, and added a tech section to this doc. I also realised that I won't be able to use the sounds from Logic, as whilst they can be used in free/commericial creative works; using them within this context would count as redistrubution, which isn't allowed free or paid.

So, now, I'm in two minds - I could either try and find some royalty free ones, or I could create some drum sounds of my own. I own a Behringer K2 (modelled after a Korg MS20), which I can make drum sounds on. Plus I also own the R6, so I can record some of those sounds, too.

For now, I'll continue using the sounds from freeCodeCamp.

12/10 - Today I managed to get all the tests passing! Pleased with the overall look of the app, especially with the drum pad animation on click and on keypress!

I would really like to improve the sounds, but also improve the retriggering of a sound. ATM it sounds like the sample won't replay/retrigger until it's stopped playing. So a couple extra things to improve before deploying
