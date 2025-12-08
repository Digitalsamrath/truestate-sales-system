Retail Sales Management System

1. Overview
A full-stack Retail Sales Management System built to handle structured sales data with advanced search, filtering, sorting, and pagination. The system is designed with clean separation of frontend and backend responsibilities and mirrors real-world SDE workflows.

2. Tech Stack
- Frontend: React (Vite), JavaScript, CSS
- Backend: Node.js, Express
- Data Source: CSV-based structured sales dataset
- Deployment: Vercel (Frontend), Render (Backend)

3. Search Implementation Summary
Implemented case-insensitive full-text search on Customer Name and Phone Number. Search works seamlessly alongside filters, sorting, and pagination without resetting state.

4. Filter Implementation Summary
Supports multi-select and range-based filtering including Customer Region, Gender, Age Range, Product Category, Tags, Payment Method, and Date Range. Filters work independently and in combination while preserving state.

5. Sorting Implementation Summary
Supports sorting by Date (Newest First), Quantity, and Customer Name (A–Z). Sorting is applied server-side and respects active search and filter criteria.

6. Pagination Implementation Summary
Pagination is implemented with a page size of 10 records. Supports Next and Previous navigation while maintaining active search, filter, and sort states.

7. Setup Instructions

1. Clone the repository
2. Install backend dependencies and start server
3. Install frontend dependencies and start development server
4. Ensure backend API URL is correctly configured in frontend
