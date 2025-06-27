server/
├── config/
│   ├── db.js                   # MongoDB connection
│   └── openai.js               # OpenAI setup (optional wrapper)
│
├── controllers/
│   ├── jobController.js        # Handles job post logic
│   ├── formController.js       # Handles candidate submissions
│   ├── testController.js       # Handles test generation & evaluation
│   └── emailController.js      # Handles emails to HR/candidates
│
├── routes/
│   ├── jobRoutes.js
│   ├── formRoutes.js
│   ├── testRoutes.js
│   └── emailRoutes.js
│
├── models/
│   ├── Job.js                  # Job schema
│   ├── Candidate.js            # Candidate schema
│   └── Test.js                 # Test schema
│
├── services/
│   ├── openaiService.js        # Handles GPT calls
│   ├── emailService.js         # Sends email using Nodemailer
│   └── linkedinService.js      # Placeholder for LinkedIn posting
│
├── middleware/
│   ├── errorMiddleware.js      # Central error handler
│   └── asyncHandler.js         # Wrapper to catch async errors
│
├── utils/
│   ├── promptTemplates.js      # AI prompts for JD, Test, Emails
│   ├── cronJobs.js             # Scheduled jobs (e.g., auto-send emails)
│   └── scoreUtils.js           # Calculate test score
│
├── uploads/                    # Resume uploads (via Multer)
│
├── .env                        # Environment variables
├── app.js                      # Express app config
├── index.js                    # Server entry point
├── package.json
└── README.md


hirewise-ai/
├── client/                         # Frontend (Vite + React)
│   ├── public/                    # Static files (favicon, etc.)
│   └── src/
│       ├── assets/               # Images, logos, etc.
│       ├── components/           # Reusable components (Navbar, Button, etc.)
│       ├── pages/                # Route-level pages (Home, Dashboard, Form, Test)
│       ├── services/             # Axios API calls
│       ├── context/              # React Context API (AuthProvider, etc.)
│       ├── utils/                # Utility functions (scoreCalc, validators, etc.)
│       ├── App.jsx               # Main app structure
│       └── main.jsx              # Vite entry point
│
├── server/                        # Backend (Node.js + Express)
│   ├── config/                   # MongoDB, OpenAI, etc.
│   ├── controllers/             # Business logic (jobController.js, testController.js)
│   ├── routes/                  # API routes (jobRoutes.js, formRoutes.js)
│   ├── models/                  # Mongoose models (Job.js, Candidate.js, Test.js)
│   ├── services/                # External APIs (OpenAI, Nodemailer, LinkedIn)
│   ├── middleware/              # Error handler, auth, etc.
│   ├── utils/                   # Helpers (promptTemplates.js, cronJobs.js)
│   ├── uploads/                 # Resume uploads (via Multer)
│   ├── app.js                   # Express app setup
│   └── index.js                 # Server entry point
│
├── .env                           # Env vars (API keys, DB URI)
├── .gitignore
├── README.md
└── package.json                   # Optional monorepo config
