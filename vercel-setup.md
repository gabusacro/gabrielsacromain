# Vercel Setup

Environment variables for your portfolio on Vercel.

---

## Step 1: Open your project

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click your portfolio project (e.g. `gabrielsacromain` or `mainwebsite`).

---

## Step 2: Go to Environment Variables

1. Click the **Settings** tab.
2. In the left sidebar, click **Environment Variables**.

---

## Step 3: Add the variables

Add these one by one:

### GMAIL_USER

| Field | Value |
|-------|--------|
| **Key** | `GMAIL_USER` |
| **Value** | `gabu.sacro@gmail.com` |
| **Environment** | Production (and optionally Preview, Development) |

Click **Save**.

### GMAIL_APP_PASSWORD

| Field | Value |
|-------|--------|
| **Key** | `GMAIL_APP_PASSWORD` |
| **Value** | Your 16-character Gmail App Password (no spaces) |
| **Environment** | Production (and optionally Preview, Development) |

Click **Save**.

- Gmail App Password: Google Account → Security → 2-Step Verification → App passwords → Generate.
- Remove any spaces from the password (e.g. `abcd efgh ijkl mnop` → `abcdefghijklmnop`).

### NEXT_PUBLIC_GA_MEASUREMENT_ID (optional)

| Field | Value |
|-------|--------|
| **Key** | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **Value** | `G-WLND3LE2LQ` (or your GA4 Measurement ID) |
| **Environment** | Production (and optionally Preview, Development) |

Click **Save**.

### NEXT_PUBLIC_SITE_URL (optional)

| Field | Value |
|-------|--------|
| **Key** | `NEXT_PUBLIC_SITE_URL` |
| **Value** | `https://gabrielsacro.com` (or your custom domain) |
| **Environment** | Production (and optionally Preview, Development) |

Click **Save**.

---

## Step 4: Redeploy

1. Go to the **Deployments** tab.
2. Open the **⋮** menu on the latest deployment.
3. Click **Redeploy** and confirm.

---

After redeploy, the contact form will send emails to your inbox.
