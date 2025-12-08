Frontend – Retail Sales Management System

Overview
This frontend application provides a dashboard-style interface for interacting with retail sales data. It is designed to closely follow the provided Figma layout and enables users to efficiently search, filter, sort, and paginate transaction records.

The frontend communicates with the backend through REST APIs and maintains a predictable and consistent state across all user interactions.

Tech Stack
- React (Vite)
- JavaScript (ES6+)
- CSS (custom styling, no external UI libraries)
- REST API integration

UI Structure
The application UI is structured into the following sections:
- Sidebar with navigation
- Header containing the page title and search bar
- Single-row filter bar with reset functionality
- Sorting control aligned with filter row
- Summary metric cards
- Paginated transaction table

This structure mirrors the hierarchy and layout defined in the provided Figma design.

Key Features
- Case-insensitive search on Customer Name and Phone Number
- Multi-criteria filtering with persistent state
- Server-driven sorting (Date, Quantity, Customer Name)
- Pagination with Next and Previous navigation
- Clean, modern, and responsive dashboard UI
- Seamless integration with backend APIs

State Management
- React state and custom hooks are used for managing search, filters, sorting, and pagination
- State changes automatically trigger API refetches
- Active UI state is preserved across interactions (search, filters, sort, pagination)

Folder Structure
- `components/` – Reusable UI components (filters, table, pagination)
- `layout/` – Layout-level components (sidebar, header)
- `hooks/` – Custom hooks for API communication and state management
- `styles/` – Global and modular CSS styling
- `utils/` – Helper utilities (if required)

Running Locally
```bash
npm install
npm run dev
