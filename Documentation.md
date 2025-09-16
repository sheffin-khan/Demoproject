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

## GraphQl
### How GraphQL Queries Work
GraphQL enables precise data fetching in a single request, minimizing over/under-fetching compared to REST. In this project, GraphQL connects to Directus’s API to query and mutate collection data.

 - Queries: Fetch data (e.g., list or single item from a collection).
 - Mutations: Modify data (create, update, delete).
 - Subscriptions: Support real-time updates (not covered here).

A GraphQL client (e.g., Apollo Client, graphql-request) sends queries/mutations to Directus’s /graphql endpoint (or /graphql/system for authentication). Directus auto-generates a GraphQL schema from collections.
### Connecting to Directus Collections
Directus maps collections (e.g., articles, users) to GraphQL types with fields like id, title. To connect:

 - Configure the GraphQL client with the Directus endpoint (e.g., http://your-directus-instance.com/graphql).
 - Write queries/mutations using the gql tag.
 - Handle authentication via /graphql/system or static tokens.
 - Optionally, use the Directus SDK (@directus/sdk) for streamlined queries (e.g., createDirectus().with(graphql())).

### Fetching Data (Read)
Fetch data with GraphQL queries, specifying needed fields:
```bash
query GetArticles {
  articles {
    id
    title
    content
    status
  }
}
```

 - Use Apollo Client’s useQuery for client-side fetching.
 - Use getServerSideProps/getStaticProps for SSR/SSG.
 - Directus supports filters (e.g., filter: { status: { _eq: "published" } }).

### Adding Data (Create)
Create items with mutations:
```bash
mutation CreateArticle($data: create_articles_input!) {
  create_articles_item(data: $data) {
    id
    title
    content
  }
}
```
 - Pass variables: { "data": { "title": "New Article", "content": "Content", "status": "draft" } }.
 - Execute via Apollo’s useMutation in a form submission.
 - Update UI with returned data or refetch.

### Editing Data (Update)
Update items with mutations:
```bash
mutation UpdateArticle($id: ID!, $data: update_articles_input!) {
  update_articles_item(id: $id, data: $data) {
    id
    title
    content
  }
}
```
 - Pass variables: { "id": "1", "data": { "title": "Updated Title" } }.
 - Execute via form submission; supports partial updates.
 - Reflect changes in UI via refetch or state update.

### Deleting Data (Delete)
Delete items with mutations:
```bash
mutation DeleteArticle($id: ID!) {
  delete_articles_item(id: $id) {
    id
  }
}
```
 - Pass variables: { "id": "1" }.
 - Trigger via button click; update UI by refetching or removing locally.

### Handling Relationships
Manage relationships (e.g., customers to orders) with nested mutations:
```bash
mutation UpdateCustomer($id: ID!, $data: update_customers_input!) {
  update_customers_item(id: $id, data: $data) {
    id
    orders {
      orders_id {
        id
      }
    }
  }
}
```
## VTB Page

The VTB page uses a form  to manage project-related data, scenarios, scenario tables, and additional costs, interfacing with a Directus CMS backend via GraphQL. This section explains how the component works, how it handles CRUD operations, and how data is passed between pages.
### How VTBForm Works
VTBForm is a client-side React component ("use client") that provides a user interface for managing project data, including material quantities, tool capacities, calculations, scenarios, and additional costs. It integrates with Directus via GraphQL queries and mutations to perform CRUD operations on collections like Project, Scenario, Scenario_Table, and Additional_Cost.
#### Key Features

 - Form Inputs: Allows users to input and edit project data (e.g., material quantities, weights, tool capacities) using Material-UI components like NumericFormat, Autocomplete, and DatePickerComponent.
 - Calculations: Performs real-time calculations for fields like vtb_overview_quantity_minstk, vtb_overview_tool_annual, and vtb_overview_calc_totalscrap using helper functions (e.g., calcTotalScrap, calcToolAnnual).
 - Scenarios and Tables: Manages multiple scenarios and their associated tables, allowing users to add, edit, clone, or delete them.
 - Additional Costs: Supports adding, editing, cloning, and deleting additional costs linked to a project.
 - Modals: Uses modals (e.g., AddCostModal, EditTableModal) for CRUD operations, triggered by buttons or icons.
 - Export: Exports project data to a Word document with customizable remarks and language options (English/German).

#### GraphQL Integration with Directus
The component uses Apollo Client’s useMutation hook to interact with Directus’s GraphQL API (/graphql endpoint) for CRUD operations:

 - Queries: Fetches data (e.g., FETCH_SCENARIOS) to populate the form with project details, scenarios, tables, and costs.
 - Mutations: Performs create, update, and delete operations using predefined GraphQL mutations (e.g., CREATE_NEW_SCENARIO, UPDATE_ADDITIONAL_COST).
 - Directus Collections:

   - Project: Stores project-level data (e.g., vtb_overview_quantity_material, vtb_additional_cost).
   - Scenario: Stores scenario data (e.g., name, package, scenario_tables).
   - Scenario_Table: Stores table data for each scenario (e.g., year, amount_of_enquiries).
   - Additional_Cost: Stores additional cost entries (e.g., name, value, sum).


 - Relationships: Manages relationships, such as linking Scenario to Scenario_Table or Additional_Cost to Project, using nested mutations.
 - State Management: Uses React’s useState and useEffect to manage local state (formData, localScenarios, localAdditionalCosts) and sync with Directus data. The Redux store (updateProjectForm) updates the global project state.

#### CRUD Operations
 - Create:
   - Scenarios: handleAddScenario creates a new scenario with calculated fields (e.g., material_per_pallet) and updates the project’s vtb_scenario_item relation.
   - Scenario Tables: handleCreateAddTableItem adds a table to a scenario, recalculates metrics like indication_target_profit, and updates the scenario’s scenario_tables relation.
   - Additional Costs: handleAddAdditionalCost creates a new cost entry linked to the project.

 - Read:
   - Fetches initial data (e.g., scenarios, scenarioTables, additionalCosts) via props and updates local state.
   - Uses client.writeQuery to update the Apollo cache after creating a new scenario.

 - Update:
   - Scenarios: handleScenarioNameChange and handleScenarioValueChange update scenario fields (e.g., name, average_fgk).
   - Scenario Tables: handleEditScenarioTable updates table fields with recalculated values.
   - Additional Costs: handleEditAdditionalCost updates cost entries.
   - Project: Updates project fields (e.g., vtb_overview_calc_matbasicprice) and syncs with Redux.

 - Delete:
   - Scenarios: handleDeleteScenario removes a scenario and updates the project’s vtb_scenario_item relation.
   - Scenario Tables: handleDeleteScenarioTable removes a table and updates the scenario’s scenario_tables relation.
   - Additional Costs: handleDeleteAdditionalCost removes a cost entry and updates the project’s vtb_additional_cost relation.

#### Error Handling and Feedback
 - Uses CustomizedSnackbars to display success or error messages after GraphQL operations.
 - Handles loading states with AppLoaderAtom during mutations.

### Data Passing Between Pages
In a Next.js project, data is passed to VTBForm and between pages as follows:
#### Props

 - Input Props: The component receives data via props (project, packageTypes, scenarios, scenarioTables, additionalCosts, materialTypes, logs) from a parent component or page.
 - Fetching Data: Data is typically fetched in a Next.js page using getServerSideProps or getStaticProps, querying Directus’s GraphQL API. For example:
```bash
javascriptexport async function getServerSideProps(context) {
  const { data } = await client.query({ query: FETCH_SCENARIOS });
  return { props: { scenarios: data.Scenario, ... } };
}
```
 - Passing to VTBForm: The page passes fetched data as props to VTBForm. For example, a project page (/projects/[id]) fetches a project and its related scenarios, tables, and costs, then renders <VTBForm project={project} scenarios={scenarios} ... />.

#### State Management

 - Local State: useState manages form inputs (formData), scenarios (localScenarios), tables (localScenarioTables), and costs (localAdditionalCosts).
 - Redux: Updates to formData are dispatched to the Redux store via updateProjectForm, ensuring project data is accessible across pages.
 - Directus Sync: Mutations update Directus, and useEffect hooks sync local state with mutation responses (e.g., adding a new scenario updates localScenarios and formData.vtb_scenario_item).

#### Navigation and Data Persistence

 - Page Navigation: Next.js handles navigation between pages (e.g., from a project list to a project detail page). Data is fetched per page or shared via Redux.
 - Cache Management: Apollo Client caches GraphQL query results, reducing redundant fetches when navigating back to the same page.
 - Dynamic Routes: Pages like /projects/[id] use Next.js dynamic routes to fetch specific project data, passing it to VTBForm.

#### Example Data Flow

 1. Page Load: /projects/[id] fetches project data from Directus using getServerSideProps and passes it to VTBForm.
 2. Form Interaction: User edits a scenario name, triggering handleScenarioNameChange, which sends an UPDATE_SCENARIO mutation to Directus.
 3. State Update: The mutation response updates localScenarios and formData.vtb_scenario_item, then dispatches to Redux.
4. Navigation: Navigating to another page (e.g., a project list) retains project data in Redux or refetches from Directus.
5. Export: Clicking “Export in Word” opens modals (RemarksSelectModal, LanguageSelectModal) to configure export settings, then calls handleExport with project and scenario data.

#### Integration Notes

 - Directus Relationships: The component handles many-to-many relationships (e.g., Project to Scenario, Scenario to Scenario_Table) by updating relation arrays in mutations (e.g., scenario_tables: [{ id: newTableId }]).
 - Performance: Uses local state to minimize API calls, with Apollo’s cache for query optimization.
 - Modularity: Separates concerns with modular modals and calculation logic, improving maintainability.
 - Error Handling: Displays errors via snackbars and logs to the console for debugging.

This setup ensures VTBForm efficiently manages complex project data, integrates seamlessly with Directus via GraphQL, and supports data persistence across pages in a Next.js application.
