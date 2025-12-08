Backend – Retail Sales Management System

Overview
This backend service powers the Retail Sales Management System by providing APIs to query structured sales data. It supports full-text search, advanced filtering, sorting, and pagination, and is designed to simulate real-world backend data processing requirements.

The system processes CSV-based sales data efficiently and exposes RESTful endpoints consumed by the frontend dashboard.

Tech Stack
- Node.js
- Express.js
- CSV streaming utilities
- JavaScript

Architecture Overview
The backend follows a clean layered architecture:
- **Routes**: Define API endpoints
- **Controllers**: Handle request validation and responses
- **Services**: Implement business logic for search, filtering, sorting, and pagination
- **Utils**: CSV streaming and parsing helpers

This separation ensures maintainability, testability, and scalability.

Key Features
- Case-insensitive full-text search on Customer Name and Phone Number
- Multi-dimensional filtering (region, gender, age range, category, tags, payment method, date range)
- Server-side sorting (Date, Quantity, Customer Name)
- Pagination with stable query state
- Memory-efficient CSV processing using streams

API Endpoints
- `GET /api/sales`
  - Supports query params for search, filters, sorting, and pagination
  - Returns paginated sales records and metadata

Performance Considerations
- CSV data is streamed line-by-line instead of loading the entire dataset into memory
- Filters, search, and sorting are applied during streaming to reduce memory footprint

Running Locally
```bash
npm install
npm start
