System Architecture – Retail Sales Management System

This document describes the architectural design of the Retail Sales Management System, covering backend and frontend structure, data flow, and module responsibilities.

---

Backend Architecture

The backend follows a layered architecture to ensure clear separation of concerns and maintainability.

Layers
1.   Routes
   - Defines REST API endpoints
   - Maps incoming requests to controller methods

2.   Controllers
   - Handle request validation and parsing
   - Manage API responses and HTTP status codes
   - Act as an interface between routes and services

3.   Services
   - Contain core business logic
   - Implement search, filtering, sorting, and pagination
   - Coordinate data processing workflows

4.   Utilities
   - Handle CSV loading and streaming
   - Perform row-level parsing and normalization
   - Enable memory-efficient data processing

Data Handling
- Sales data is stored in CSV format
- Data is processed using streams to avoid loading the entire dataset into memory
- All query operations (search, filters, sorting) are applied during streaming

This approach ensures the backend remains scalable and performant even with large datasets.

---

   Frontend Architecture

The frontend follows a component-based architecture with predictable state management.

### Structure
1.   Layout Components
   - Handle application-level structure (sidebar, header)
   - Provide consistent layout across the dashboard

2.   UI Components
   - Reusable components for filters, tables, pagination, and summary cards
   - Focused on presentation and user interaction

3.   Custom Hooks
   - Encapsulate API interaction logic
   - Manage search, filter, sorting, and pagination state
   - Trigger data refetches based on state changes

4.   Styles
   - Custom CSS for layout and styling
   - Designed to match the provided Figma structure
   - No external UI libraries used

---

Data Flow

1. User interacts with UI controls (search, filters, sorting, pagination)
2. Frontend updates local state via custom hooks
3. API request is sent with query parameters to the backend
4. Backend processes the request using streaming data logic
5. Paginated and processed results are returned
6. Frontend updates the UI while maintaining active state

---

Folder Structure Overview

root/
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── utils/
│ │ └── index.js
│ └── README.md
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── layout/
│ │ ├── hooks/
│ │ ├── styles/
│ │ └── App.jsx
│ └── README.md
└── docs/
└── architecture.md

Module Responsibilities

Backend
- Routes: Endpoint definitions
- Controllers: Request handling and response formatting
- Services: Business logic implementation
- Utils: Data streaming and processing helpers

Frontend
- Layout Components: Structural UI elements
- UI Components: Interactive visual components
- Hooks: State and API management
- Styles: UI consistency and theming

---

Design Considerations

- Clear separation of frontend and backend concerns
- Stateless backend APIs
- Predictable client-side state transitions
- Scalable data handling strategy
- Code readability and maintainability

---

Summary

This architecture is designed to reflect real-world software engineering practices by emphasizing clean separation of responsibilities, scalability, and maintainability. It closely mirrors the type of system design expected from a production-grade application while remaining suitable for an SDE Intern assignment.