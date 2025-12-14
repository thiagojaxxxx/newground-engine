# NewGround Engine

A minimal Node.js + Express API.

## Installation

```bash
npm install
```

## Running

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## Testing

```bash
npm test
```

## API Endpoints

### GET /health
Returns health status.

**Response:**
```json
{ "ok": true }
```

### POST /crs/calculate
Calculates CRS score.

**Response:**
```json
{
  "result": { "score": 0 },
  "reasons": ["placeholder"],
  "assumptions": ["rules not implemented"],
  "ruleVersion": "v0"
}
```

