# TrekBag - Travel Packing List Manager

TrekBag is a modern web application built with React that helps users manage their travel packing lists efficiently. It provides features for adding, organizing, and tracking items for your trips.

## 🚀 Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Zustand** - State management library
- **React Select** - Custom select input component
- **CSS** - Styling and layout

## 📁 Project Structure

The project follows a well-organized structure:

```
src/
├── components/
│   ├── common/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── ButtonGroup.jsx
│   │   ├── Counter.jsx
│   │   ├── EmptyView.jsx
│   │   └── BackgroundHeading.jsx
│   ├── features/       # Feature-specific components
│   │   ├── ItemList.jsx
│   │   └── AddItemForm.jsx
│   └── layout/         # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Sidebar.jsx
│       └── Logo.jsx
├── stores/            # State management
│   └── ItemsStore.js
├── styles/           # Global styles
└── main.jsx         # Application entry point
```

## 🎯 Features

1. **Item Management**

   - Add new items to your packing list
   - Mark items as packed/unpacked
   - Delete items from the list
   - Empty list view with helpful message

2. **Sorting and Organization**

   - Sort items by default order
   - Sort by packed status
   - Sort by unpacked status

3. **Bulk Actions**

   - Mark all items as complete
   - Mark all items as incomplete
   - Reset to initial state
   - Remove all items

4. **Progress Tracking**
   - Counter showing total items
   - Counter showing packed items
   - Visual feedback for item status

## 🔧 How It Works

1. **State Management**

   - Uses Zustand for state management
   - Centralized store for items data
   - Actions for adding, removing, and updating items

2. **Component Architecture**

   - Modular component structure
   - Separation of concerns
   - Reusable components
   - Feature-based organization

3. **User Interface**
   - Clean and intuitive design
   - Responsive layout
   - Interactive elements
   - Real-time updates

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## 📝 Usage

1. **Adding Items**

   - Use the form in the sidebar to add new items
   - Enter item name and click "Add to list"

2. **Managing Items**

   - Check/uncheck items to mark them as packed/unpacked
   - Use the delete button (❌) to remove items
   - Use the sorting dropdown to organize items

3. **Bulk Actions**
   - Use the button group to perform bulk actions
   - Reset, clear, or mark all items at once

## 🎨 Styling

- Custom CSS for styling
- Responsive design
- Clean and modern UI
- Intuitive user experience

## 🔄 Future Improvements

- [ ] Add categories for items
- [ ] Implement item search
- [ ] Add item quantity tracking
- [ ] Save lists to local storage
- [ ] Add user authentication
- [ ] Enable list sharing
# trekbag
