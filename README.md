# Module Federation Micro Frontend

This workspace contains one shell application and two independently buildable remotes:

```text
MFE/
├── src/                  # shell application
├── apps/accounts/        # Accounts remote, port 5001
└── apps/payments/        # Payments remote, port 5002
```

## Step 1: Install

Install the shell dependencies from the workspace root:

```bash
npm install
```

Each remote has its own package manifest. To install a remote independently:

```bash
cd apps/accounts && npm install
cd ../payments && npm install
```

## Step 2: Build remotes

Module Federation generates `remoteEntry.js` during each remote build:

```bash
cd apps/accounts && npm run build
cd ../payments && npm run build
```

## Step 3: Start the remotes

Run each command in a separate terminal:

```bash
cd apps/accounts && npm run preview
cd apps/payments && npm run preview
```

The remotes serve their federation entries at:

- `http://localhost:5001/assets/remoteEntry.js`
- `http://localhost:5002/assets/remoteEntry.js`

## Step 4: Start the shell

From the workspace root:

```bash
npm run dev
```

Open `http://localhost:5000/`. The shell loads the Accounts and Payments applications lazily at `/accounts` and `/payments`.

The shell configuration is in [vite.config.js](vite.config.js). Remote teams expose `./App` from their own Vite configurations.
