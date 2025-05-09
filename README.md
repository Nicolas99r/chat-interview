# Wizybot - Frontend Technical Assessment

This is a technical assessment submission for the **Frontend Developer Position** at Wizybot. The task was to build a chat interface that mimics the Wizybot AI Customer Support and Sales Agent UI/UX experience.

---

## 🛠️ Technologies Used

- **React**: Component-based architecture.
- **Vite**: Fast development server setup.
- **TypeScript**: Type safety and improved code maintainability.
- **Tailwind CSS**: Utility-first styling.
- **React Icons**: For visual enhancements without external libraries.

---

## 💬 Features Implemented

1. ✅ Initial message from the AI agent ("Hello there! Do you need any help?") displayed on the left.
2. ✅ Message input field with keyboard and button support.
3. ✅ User messages shown in bubbles on the right side.
4. ✅ Typing indicator animation shown for 3 seconds after each user message.
5. ✅ AI-generated response shown after the typing indicator disappears.
6. ✅ All messages are listed chronologically.
7. ✅ When the user types `"I want product recommendations"`, the bot fetches products from the Wizybot API and displays them in a **product recommendation carousel** with:
   - Product name
   - Image
   - Price
   - Link to product page

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wizybot-chat-interface.git
cd wizybot-chat-interface
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser (or the port shown in the terminal).

## 🌐 API Used

The product data used in the recommendation feature is fetched from:

```bash
GET https://api.wizybot.com/products/demo-product-list
```

More info about this endpoint can be found in Annex 1 of the technical assessment document.

## 🧪 Testing & Debugging

- Open the browser console to see logs during product fetching or error handling.
- Try sending different messages to test the flow.
- Sending "I want product recommendations" will trigger the product carousel.

## 🧱 Folder Structure

```bash
src/
├── assets/                  # Static images
├── components/              # Atomic Design pattern: atoms, molecules, organisms
├── hooks/                   # Custom hooks (e.g., useChat)
├── types/                   # TypeScript interfaces and types
├── App.tsx
└── main.tsx
```

## ✨ Notes

- This project follows good coding practices including separation of concerns, reusable components, and clean TypeScript interfaces.
- It is ready for deployment and serves as a solid base for further integrations with backend services.

## 📬 Contact

If you have any questions or need clarification, feel free to reach out via email or LinkedIn.
