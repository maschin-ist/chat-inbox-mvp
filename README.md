# Woven City Business Chat — MVP (Q2 2026)

Stripped-down prototype for dev handoff. The **full** design lives in the project root (`../index.html`).

## MVP scope (Confluence)

### In scope
- **Contacts** — basic Weaver directory with tags visible; bulk select + **Add Tags** (one tag per apply)
- **Broadcasts** — one tag → **Project Updates** or **Free text message** → **Send now** → **Sent** audit log
- **Chats (limited)** — thread list + compose; **Template** only (Project Updates / Free text); plain text + links in thread
- **Delivery accountability** — every send creates a durable record (source, target, template type, payload ref, outcome)

### Out of scope (removed or hidden)
- Search, filters, sorting, pagination, role column, inline row tagging, chat jump from Contacts
- Supervisor mode, escalation, reassign, Done / Ask for help
- Multi-tag audience, recipient counts, sample preview cards, drafts, schedule
- Survey / RSVP / Consent composers and rich action cards
- CREATE TEMPLATE from Contacts selection bar

## Flow

1. **Contacts** (default) — select Weavers → **Add Tags** → apply one tag
2. **Broadcasts** → **+ Create new** → pick **one tag** → compose (2 template cards) → **Review** → **Send now**
3. **Chats** — open thread → **+ → Template** → send Project Updates or Free text (1:1 messaging for demo; may be removed after PM review)

## Preview

```
file:///Users/maria.belova/chat-inbox-mvp/index.html
```

Sync from Open Design project:

```bash
cp mvp/index.html mvp/styles.css mvp/app.js mvp/mqt4rpf5-image.png ~/chat-inbox-mvp/
```
