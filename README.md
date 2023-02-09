<div align="center">
  <img style="width:50%" src="https://github.com/Lucas-zz/Midjourney/blob/main/src/assets/openai-logo.png" alt="OpenAI logo" />
</div>

<h1 align="center">
  <a href="#"> Midjourney - DALL • E 2 Clone </a>
</h1>

<h3 align="center">
  Write what you want and let the AI show you the image! 
</h3>

<h4 align="center"> 
  Status: <b>Finished</b>
</h4>

<h6 align="center"> 
  This is a <a href="https://reactjs.org/docs/getting-started.html">React.js</a> project bootstrapped with <a href="https://vitejs.dev/">Vite</a>.
</h6>

---

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-it-works">How It Works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#available-scripts">Available Scripts</a> •
 <a href="#how-to-contribute">How to contribute</a> • 
 <a href="#learn-more">Learn More</a> •
 <a href="#author">Author</a>
</p>

---

## About

<p>This project was my first time interacting with AIs!</p>
<p>With the boom of <a href="https://openai.com/about/">OpenAI</a>'s <a href="https://openai.com/blog/chatgpt/">ChatGPT</a> and <a href="https://openai.com/dall-e-2/">DALL • E 2</a> I got really curious about this technology so new and yet so great at the same time, so I ended up trying to make a really simple clone of <a href="https://midjourney.com/showcase/recent/">Midjourney</a>!
<p>OpenAI's <a href="https://platform.openai.com/docs/guides/images/introduction">image generation API</a> were used on this project.

<h3>This project's backend is available <a href="https://github.com/Lucas-zz/Midjourney-backend">here</a>.</h3>

---

## How It Works

<p>Right off the bat, the Home page is shown when entering the web app. In there, the Community Showcase is available - showing all the images in the database. On hover, the prompts used to generate that image, name of the person that made the prompt and a button that allows the user to download the image are shown.</p>

<div align="center">
  <img style="width:50%" src="https://github.com/Lucas-zz/Midjourney/blob/main/src/assets/homepage-view.png" alt="OpenAI logo" />
</div>

<p>To be able to interact with the API, you need to click on the button at the top right side of the screen 'Create'. By blicking on the button, the user is redirected to the Create Post page.</p>

<div align="center">
  <img style="width:50%" src="https://github.com/Lucas-zz/Midjourney/blob/main/src/assets/createpost-view.png" alt="OpenAI logo" />
</div>

<p>In this page, the user can fill in the form fields with their name and the prompt that they want to be make a image of or simply click on the 'Surprise Me' button to get a random prompt. Following that, by clicking on Generate, the API will return an AI generated image.</p>
<p>The user can decide if they want to share that image with the community or not or simply make the prompt again to get a better image.</p>

<h4>Be aware, to be able to download the image, it is needed to share it with the community first.</h4>

---

## Tech Stack

The following tools were used in the construction of this application:

-   **[React](https://pt-br.reactjs.org/docs/getting-started.html)**
-   **[React Router](https://reactrouter.com/en/main/start/tutorial#setup)**
-   **[TailwindCSS](https://tailwindcss.com/docs/installation)**
-   **[File Saver](https://www.npmjs.com/package/file-saver)**

> See the file  [package.json](https://github.com/Lucas-zz/Midjourney/blob/main/package.json)

**Workspace**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   OS: **[Ubuntu](https://releases.ubuntu.com/22.04/)**
-   Browser: **[Microsoft Edge](https://www.microsoft.com/en-us/edge)** (Edge on Ubuntu!? Yeah, I know...)

---

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[npm](https://www.npmjs.com/), [Git](https://git-scm.com), [VSCode](https://code.visualstudio.com/).

### Intial configs

``` bash

// Clone this repository
$ git clone https://github.com/Lucas-zz/Midjourney.git

// Access the project folder cmd/terminal
$ cd Midjourney

// Install the dependencies
$ npm install

```

After this, you can start using the scripts below.

---

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npx vite` 

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` or `npx vite build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [building for production](https://vitejs.dev/guide/build.html) for more information.

### `npm run preview` or `npx vite preview`

Once you've built the app, you may test it locally by running `npm run preview` command.

The `preview` command will boot up a local static web server that serves the files from dist at [http://localhost:4173](http://localhost:4173). It's an easy way to check if the production build looks OK in your local environment.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feat/myFeatureName`
3. For each feature implemented, make a commit specifying what was done
4. Submit your changes: `git push -u origin feat/myFeatureName`

---

## Author

| [<img src="https://avatars.githubusercontent.com/Lucas-zz" width=150 title="Lucas-zz"><br><sub>Lucas Azzolini Vieira</sub>](https://github.com/Lucas-zz) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: |
