# Contact form → Google Sheet setup

The website's **Contact** page saves each enquiry as a row in a Google Sheet
that lives in **your own Google Drive**. Nothing is emailed and no third‑party
service holds the data — only you can open the sheet.

This works by deploying a tiny **Google Apps Script** as a *web app*. The form
sends each submission to that web app's URL, and the script appends a row.

You only have to do this once (~3 minutes).

---

## Step 1 — Create the spreadsheet

1. Go to <https://sheets.google.com> and create a **new blank spreadsheet**.
2. Name it something like **`Turbová enquiries`**.

## Step 2 — Add the script

1. In that spreadsheet, open **Extensions → Apps Script**.
2. Delete any code that's there and paste in everything from
   [`google-apps-script.gs`](google-apps-script.gs) (also shown below).
3. Click the **Save** icon (💾).

## Step 3 — Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** `Contact form`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Click **Deploy**.
5. Google will ask you to **authorize** — approve it. (You may see an
   "unverified app" screen; click *Advanced → Go to … (unsafe)*. This is your
   own script, so it's safe.)
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfyc…/exec`

## Step 4 — Plug the URL into the site

Open `assets/scripts/site-data.js` and paste your URL into `contactEndpoint`:

```js
contactEndpoint: "https://script.google.com/macros/s/AKfyc…/exec",
```

Then commit and push (or just send me the URL and I'll do it). That's it — new
enquiries will start landing as rows in your sheet.

---

## What gets saved

Each submission adds one row with these columns:

| Timestamp | First name | Last name | Email | Phone | Country | Looking to | Timeframe | Preferred contact | Message | Language |
|-----------|-----------|-----------|-------|-------|---------|-----------|-----------|-------------------|---------|----------|

The `Phone` value already includes the country dial code (e.g. `+420 601234567`).

---

## Is the data safe?

- **The spreadsheet is private** to your Google account — sharing it is entirely
  under your control. The website never reads it.
- The web‑app **URL only *appends* rows** — it can't read or return any existing
  data, so even though the URL is public it can't leak your enquiries.
- The only realistic downside of a public append URL is that someone could send
  junk rows (spam). If that ever becomes a problem, see **Optional hardening**
  in `google-apps-script.gs` to require a shared secret.

## Updating the script later

If you edit the Apps Script, redeploy with **Deploy → Manage deployments →
(edit) → Version: New version → Deploy**. The URL stays the same.
