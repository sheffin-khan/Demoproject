# LUM_Quotation_App

LUM Quotation App efficiently streamlines metal quotation generation and finalization by utilizing historical purchase data. By requiring approval from multiple departments, it ensures accuracy and consensus in pricing, making it a reliable tool for businesses in the metal industry.

## Project Structure

```bash
project-root/
│
├── pages/                               # Legacy Next.js pages (not App Router)
│   └── api/                             # Old API routes (still supported by Next.js)
│
├── public/                              # Publicly accessible static assets
│   ├── files/                           # Uploaded/generated files
│   │   └── document.dotm
│   ├── next.svg                         # Next.js logo
│   └── vercel.svg                       # Vercel logo
│
├── src/                                 # Application source code
│   │
│   ├── app/                             # Next.js App Router (modern routing system)
│   │   ├── api/                         # API routes (App Router version)
│   │   │   └── sentry-example-api/      # Example API integration (Sentry)
│   │   ├── login/                       # Login page route
│   │   ├── offer/                       # Offer-related routes
│   │   │   └── [id]/                    # Dynamic route by offer ID
│   │   │       ├── [slug]/              # Nested dynamic route by slug
│   │   │       └── .gitkeep             # Keeps empty folder in Git
│   │   └── favicon.ico                  # Application favicon
│   │
│   ├── components/                      # UI components (atomic design structure)
│   │   ├── atoms/                       # Smallest UI pieces
│   │   │   ├── alerts/                  # Alert messages
│   │   │   ├── app-loader/              # Loading spinners
│   │   │   ├── autocomplete/            # Autocomplete inputs
│   │   │   ├── button/                  # Buttons
│   │   │   ├── date-picker/             # Date picker inputs
│   │   │   ├── dialogs/                 # Simple dialog boxes
│   │   │   ├── dropdown/                # Dropdown menus
│   │   │   ├── exampe-dialog-use/       # Example dialog usage
│   │   │   ├── formbutton/              # Form buttons
│   │   │   ├── ghost-button/            # Secondary (ghost) buttons
│   │   │   ├── input/                   # Input fields
│   │   │   ├── input-adornment/         # Input adornments/icons
│   │   │   ├── keys/                    # Keyboard shortcuts / key components
│   │   │   ├── multi-select/            # Multi-select inputs
│   │   │   ├── piechart/                # Pie chart visualization
│   │   │   ├── progress/                # Progress indicators
│   │   │   ├── single-notification/     # Single notification item
│   │   │   ├── snack-bars/              # Snackbar notifications
│   │   │   ├── subtitle/                # Subtitle text
│   │   │   ├── tableinput/              # Table input fields
│   │   │   ├── textarea/                # Textarea input
│   │   │   ├── title/                   # Title text
│   │   │   ├── toaster-wrapper/         # Toast notification wrapper
│   │   │   └── tooltip/                 # Tooltip component
│   │   │
│   │   ├── molecules/                   # Medium-sized composed components
│   │   │   ├── card/                    # Card components
│   │   │   │   ├── addoffer/            # Card for adding offers
│   │   │   │   ├── chartdetails/        # Card for chart details
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── infooffer/           # Card with offer info
│   │   │   │   └── .gitkeep
│   │   │   ├── chart/                   # Chart components
│   │   │   ├── confirmation-modal/      # Confirmation modal
│   │   │   ├── footer/                  # Footer UI
│   │   │   │   ├── control/             # Control buttons in footer
│   │   │   │   ├── progress/            # Footer progress bar
│   │   │   │   ├── save/                # Save section in footer
│   │   │   │   └── start/               # Start section in footer
│   │   │   ├── header/                  # Header UI
│   │   │   │   ├── iconbar/             # Header icon bar
│   │   │   │   ├── menuicons/           # Header menu icons
│   │   │   │   ├── menuitem/            # Header menu items
│   │   │   │   └── menulink/            # Header menu links
│   │   │   ├── modal/                   # Modals grouped by feature
│   │   │   │   ├── avb/                 # AVB-related modals
│   │   │   │   ├── ekf/                 # EKF-related modals
│   │   │   │   ├── fst/                 # FST-related modals
│   │   │   │   ├── kue/                 # KUE-related modals
│   │   │   │   ├── log/                 # Log-related modals
│   │   │   │   ├── master/              # Master data modals
│   │   │   │   ├── offer/               # Offer management modals
│   │   │   │   ├── offer-timeline/      # Offer timeline modals
│   │   │   │   ├── overview/            # Overview modals
│   │   │   │   └── vtb/                 # VTB-related modals
│   │   │   ├── notifications-card/      # Single notification card
│   │   │   ├── notifications-container/ # Container for notifications
│   │   │   ├── offer-timeline/          # Offer timeline components
│   │   │   └── table/                   # Table-related components
│   │   │       ├── avb/                 # AVB tables
│   │   │       ├── dashboard/           # Dashboard tables
│   │   │       ├── industrie-norm/      # Industry norm tables
│   │   │       ├── layer/               # Layer tables
│   │   │       ├── material/            # Material tables
│   │   │       ├── scenario/            # Scenario tables
│   │   │       └── supplier/            # Supplier tables
│   │   │
│   │   ├── organisms/                   # Large reusable UI sections
│   │   │   ├── footer/                  # Footer section
│   │   │   ├── header/                  # Header section
│   │   │   ├── menu/                    # Menu section
│   │   │   └── submenu/                 # Submenu section
│   │   │
│   │   ├── protected/                   # Components that require authentication
│   │   └── templates/                   # Page-level templates
│   │       ├── chat/                    # Chat templates
│   │       ├── dashboard/               # Dashboard templates
│   │       ├── demo/                    # Demo pages
│   │       ├── error/                   # Error pages
│   │       ├── file-upload/             # File upload pages
│   │       ├── formular/                # Formular pages grouped by dept
│   │       │   ├── avb/                 
│   │       │   ├── ekf/                 
│   │       │   ├── fst/                 
│   │       │   ├── gf/                  
│   │       │   ├── kue/                 
│   │       │   ├── log/                 
│   │       │   ├── overview/            
│   │       │   ├── qsg/                 
│   │       │   └── vtb/                 
│   │       ├── login/                   # Login templates
│   │       ├── offer/                   # Offer templates
│   │       └── offers/                  # Offers listing templates
│   │
│   ├── config/                          # App configuration
│   │   ├── graphql/                     # GraphQL queries/mutations
│   │   │   ├── queries/                 
│   │   │   │   ├── create/              # Create mutations
│   │   │   │   ├── delete/              # Delete mutations
│   │   │   │   ├── read/                # Read queries
│   │   │   │   └── update/              # Update mutations
│   │   ├── lib/                         # Utility libraries
│   │   │   └── calc/                    # Calculation helpers
│   │   ├── redux/                       # Redux store setup
│   │   │   └── features/                # Redux feature slices
│   │   │       ├── chat/                
│   │   │       ├── file-upload/         
│   │   │       ├── project/             
│   │   │       └── .gitkeep
│   │   ├── redux-provider/              # Redux provider wrapper
│   │   └── .gitkeep
│   │
│   ├── hooks/                           # Custom React hooks
│   └── repository/                      # Repository assets
│       ├── docs/                        # Documentation
│       │   └── document.dotm
│       ├── icons/                       # Icons
│       ├── static/                      # Static files
│       └── .gitkeep
│
├── .dockerignore                        # Ignore rules for Docker build
├── .env.dev                             # Development environment variables
├── .env.local                           # Local machine env variables
├── .env.prod                            # Production environment variables
├── .env.stage                           # Staging environment variables
├── .eslintrc.json                       # ESLint config
├── .gitignore                           # Git ignore rules
├── .prettierrc                          # Prettier config
├── docker-compose.yml                   # Docker Compose setup
├── Dockerfile                           # Docker image build file
├── entrypoint.sh                        # Entrypoint script (used in CI/Docker)
├── package.json                         # NPM/Yarn dependencies
├── project_tree.txt                     # Auto-generated project tree
├── README.md                            # Project documentation
├── tsconfig.json                        # TypeScript config
├── tsconfig.tsbuildinfo                 # TypeScript build cache
└── yarn.lock                            # Yarn lockfile

```

## Getting Started
```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to the project directory
cd LUM_Quotation_App

# Install dependencies
npm install

# Start development server
yarn start-dev
```

## Available Scripts
```bash
# Development
yarn start-dev             # Start development server

# Building
yarn build                 # for build

# Linting and Formatting
yarn lint                  # Run ESLint

# Git Hooks
yarn prepare               # Set up Husky
```

## Project Approval Workflow
This section outlines the step-by-step workflow for creating and approving a project quotation. The process involves multiple departments, each adding details to the quotation before approval. If any department rejects the submission, the workflow reverts to the previous department for revisions.
Workflow Steps

#### 1. Grunddaten 
Upon new project creation navigates to the Grunddaten tab and fill in the basic project details.
#### 2. VTB Department 
VTB users review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the GF department.
 - On Rejection: An email notification is sent to the Grunddaten for revisions.
#### 3. GF Department 
GF users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the QSG department.
 - On Rejection: An email notification is sent to the VTB department for revisions.
#### 4. QSG Department 
QSG users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the KUE department.
 - On Rejection: An email notification is sent to the GF department for revisions.
#### 5. KUE Department 
KUE users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the AVB department.
 - On Rejection: An email notification is sent to the QSG department for revisions.
#### 6. AVB Department 
AVB users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the FST department.
 - On Rejection: An email notification is sent to the KUE department for revisions.
#### 7. FST Department 
FST users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the LOG department.
 - On Rejection: An email notification is sent to the AVB department for revisions.
#### 8. LOG Department 
LOG users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the EKF department.
 - On Rejection: An email notification is sent to the FST department for revisions.
#### 9. EKF Department 
EKF users receive the email notification, review, add quotation details, and either approve or reject.
 - On Approval: An email notification is sent to the VTB department for final approval.
 - On Rejection: An email notification is sent to the LOG department for revisions.
#### 10. VTB Final 
VTB provides final review and approval, completing the quotation process.

## App Config for Email Notification
Email notifications are managed via the App Config/Emailversand-Verwaltung settings in the Directus Collection. The configuration options determine which users receive email notifications for approvals and rejections:
#### 0: Keine User (No User)
 - No email notifications are sent to any users.
#### 1: Nur an beyondbots-User (Client Domain Only)
 - Email notifications are sent only to users within the beyondbots domain (e.g., @beyondbots.com).
#### 2: Alle User (All Users)
 - Email notifications are sent to all relevant users, regardless of their domain.

## Configuring the Directus Host

To connect the application to a new Directus instance, update the Directus host URL in the .env file:
#### 1. Edit the .env File:
 - Open the .env file in the project’s root directory
 - Update or add the Directus host variable:
```bash
DIRECTUS_HOST=https://your-new-directus-host.com
```
 - Replace https://your-new-directus-host.com with the new Directus URL (include https:// or http://, no trailing slash).
#### 2. Save and Restart:
 - Save the .env file.
 - Restart the application
#### 3. Verify the Connection:
 - Test a feature that uses Directus.
 - Check application logs for connection errors.
 - Ensure the Directus URL is accessible and any required API tokens are valid.
