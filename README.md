# Modern FastFood 🍕

A modern fast-food web application built with **React** that simulates an online food ordering experience.
Users can enter their name, browse the pizza menu, add items to the cart, adjust quantities, remove items, and place an order with their details. They can also choose **priority delivery** for an extra fee and track how long it will take until the order is ready.

---

## ✨ Features

- Dynamic pizza menu with API integration
- Add, remove, and update cart items
- View cart summary and total price
- Submit orders with name, phone number, and address
- Option to prioritize orders (with additional cost)
- Order tracking with estimated delivery time
- Error handling and loading states
- Responsive design with modern UI

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router Dom, Redux Toolkit and Styled Components
- **State Management:** Redux Toolkit (user & cart slices)
- **Async Logic:** createAsyncThunk, useFetcher (React Router)
- **API Services:**
  - `apiRestaurant.js` (menu, orders)
  - `apiGeocoding.js` (location & address lookup)
- **UI Components:** Buttons, Inputs, Loader, Error messages, Forms
- **Build Tools:** Vite, ESLint, Prettier

---

## 📸 Demo

👉 [Live Demo on Vercel](https://modern-fastfood.vercel.app/)


---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/merajparsazad/modern-fastfood.git

# Navigate to the project folder
cd modern-fastfood

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔮 Future Improvements
- Add authentication (sign up & login)
- Persist orders in a real database
- Integrate online payment options
- Admin panel for managing orders

## 📜 License
This project is licensed under the [MIT License](./LICENSE)