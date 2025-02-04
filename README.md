# Task Manager Application

A modern task management application built with React, TypeScript, and Vite, featuring drag-and-drop functionality, charts, and real-time updates.

## 🚀 Features

- Task creation, editing, and deletion
- Drag-and-drop task management
- Real-time statistics and charts
- User authentication and authorization
- Responsive design
- Toast notifications

## 🛠️ Tech Stack

### Core Technologies

- React 18.3
- TypeScript 5.6
- Vite 6.0

### Key Libraries

- **State Management**: Redux Toolkit
- **UI Components**:
  - React DnD (Drag and Drop)
  - Chart.js & React-Chartjs-2
  - FontAwesome Icons
- **Form Handling**: React Hook Form
- **Routing**: React Router
- **API Client**: Axios
- **Notifications**: React Hot Toast
- **Styling**: TailwindCSS

## 📦 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd task-manager
```

2. Create `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_AUTH_SECRET=your_auth_secret
VITE_ENV=development
```

3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

## 🔧 Environment Variables

| Variable         | Description                          | Required |
| ---------------- | ------------------------------------ | -------- |
| VITE_API_URL     | Backend API URL                      | Yes      |
| VITE_AUTH_SECRET | Authentication secret key            | Yes      |
| VITE_ENV         | Environment (development/production) | Yes      |

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
task-manager/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/        # Page components
│   ├── store/        # Redux store setup
│   ├── services/     # API services
│   ├── hooks/        # Custom hooks
│   ├── types/        # TypeScript types
├── public/           # Static assets
└── .env             # Environment variables
```

## 🔒 Security Best Practices

- Environment variables for sensitive data
- Authentication token management
- API request interceptors
- Input validation and sanitization
- Secure routing guards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.
