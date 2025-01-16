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

I'll help clean up the grammar while maintaining the technical content and meaning of your explanation.

I started with the network implementation first since I hadn't used the FakeStore API before and wanted to get that out of the way before starting the main development.

To ensure robust error handling, I implemented try-catch blocks that return custom thrown errors to prevent sensitive information from leaking through API error responses.

I implemented a `result` & `error` pattern for the API to clearly visualize states when they're used in the site's pages.

Initially, I planned to use the login and cart endpoints from FakeAPI with lightweight local React state, using the network as the source of truth. However, after reading the documentation, I noticed a warning that the cart endpoint wouldn't return consistent cart data when adding products. This also meant there was no reason to use the user endpoint.

Instead, I opted for a global state pattern using `zustand` and `immer` to create an immutable state. This approach enabled enhanced UX features, such as automatically opening the cart when adding a new product.


## 🔧 Tech Stack

- React
- Zustand (State Management)
- Immer (Immutable State Updates)
- FakeStore API
- Vercel (Deployment)

## 🌐 Live Demo

Experience the application live at [https://test-frontend-engineer-xi.vercel.app/products](https://test-frontend-engineer-xi.vercel.app/products)