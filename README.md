# Shop Demo 🛍️

a simple shop using Fakestore api

[![Demo](https://img.shields.io/badge/Demo-Live%20Site-blue)](https://test-frontend-engineer-xi.vercel.app/products)

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser - the app will be running at `http://localhost:3000`

## 🏗️ Architecture & Technical Decisions

I started with the network first because I hadn't used the fakestore api before and I wanted to get that out of the way before i started.
I wanted to make sure the network would fail nicely so I included try and catch and I returned custom throw errors to prevent leaking of information from the api error return. 
I used a `result` & `error` pattern from the api that were used so i can clearly see the states when i use them in the page of the site.

I originally wanted to use the login and cart endpoint from fakeapi with a light local react state using the network as the source of truth but
reading the docs there is a note at the bottom of cart saying it won't return constant carts when adding products. this also ment there was not reason
to use the user endpoint.

I moved to using a global state pattern using `zustand` and `immer` to create an immutable state, this allowed me to do things like opening the cart when a new product for better UX.


## 🔧 Tech Stack

- React
- Zustand (State Management)
- Immer (Immutable State Updates)
- FakeStore API
- Vercel (Deployment)

## 🌐 Live Demo

Experience the application live at [https://test-frontend-engineer-xi.vercel.app/products](https://test-frontend-engineer-xi.vercel.app/products)