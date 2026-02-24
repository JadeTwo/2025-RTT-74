# Setting Up Parcel with TypeScript

After completing the initial setup of your TypeScript project, follow these steps to get a development environment running in your browser.

---

## 1. TypeScript Entry Point
Inside `index.html`, add a script tag. Ensure the `type` is set to `module` so Parcel can handle the TypeScript compilation automatically. 

```html
<script type="module" src="./main.ts"></script>
```

In this example, `./main.ts` is used as the src - which means `index.html` is in the same folder. Make sure whatever file you use, the src attribute points to it with the correct path. 

## 2. Install Parcel
From the root directory of your project, install Parcel as a dev dependency:

`` npm i --save-dev parcel ``

## 3. Update package.json
Replace `"main": "index.js"` with:
```json
"source": "main.ts"
``` 
Add scripts (next to `"test"`):
```json
"dev": "parcel index.html"
"build": "parcel build index.html"
``` 
The first script is for running the development server. The second is for creating a production ready build (for deployment). 

## 4. Run the server

In the terminal, type: 

`npm run dev` 

Go to your browser and enter to the localhost server mentioned (ex: `http://localhost:1234`). You can also hold down Ctrl (or Cmd) and click it.