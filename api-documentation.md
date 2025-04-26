# Incident Log API Documentation

## Base URL

```
http://localhost:3000
```

---

## Endpoints

### 1. Health Check

- **URL:** `/health`
- **Method:** `GET`
- **Description:** Check if server is running.
- **Response:**
  ```json
  {
    "status": "OK",
    "message": "Server is healthy"
  }
  ```

---

### 2. Create a New Incident

- **URL:** `/api/v1/incidents`
- **Method:** `POST`
- **Description:** Create a new incident.
- **Request Body:**
  ```json
  {
    "title": "Power Failure",
    "description": "Power failure in building A",
    "status": "open", // optional (default: "open")
    "severity": "high", // optional (default: "low")
    "reportedBy": "Vikas"
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "data": {
      "incident": {
        "_id": "id",
        "title": "Power Failure",
        "description": "Power failure in building A",
        "status": "open",
        "severity": "high",
        "reportedBy": "Vikas",
        "createdAt": "timestamp"
      }
    }
  }
  ```

---

### 3. Get All Incidents

- **URL:** `/api/v1/incidents`
- **Method:** `GET`
- **Description:** Retrieve all incidents without filtering or pagination.

- **Response:**
  ```json
  {
    "status": "success",
    "results": 5,
    "data": {
      "incidents": [
        {
          "_id": "id",
          "title": "Power Failure",
          "description": "Power failure in building A",
          "status": "open",
          "severity": "high",
          "createdAt": "timestamp"
        }
      ]
    }
  }
  ```

---

### 4. Filter Incidents

- **URL:** `/api/v1/incidents/filter`
- **Method:** `GET`
- **Description:** Retrieve incidents based on filter criteria.

- **Query Parameters:**
  | Parameter | Type | Description |
  |------------|--------|-----------------------------------------------------|
  | `status` | String | Filter by incident status (`open`, `closed`) |
  | `severity` | String | Filter by severity (`low`, `medium`, `high`) |

- **Example Request:**

  ```
  GET /api/v1/incidents/filter?status=open&severity=high
  ```

- **Response:**
  ```json
  {
    "status": "success",
    "results": 2,
    "data": {
      "incidents": [
        {
          "_id": "id",
          "title": "Power Failure",
          "description": "Power failure in building A",
          "status": "open",
          "severity": "high",
          "createdAt": "timestamp"
        }
      ]
    }
  }
  ```

---

### 5. Paginate Incidents

- **URL:** `/api/v1/incidents/pagination`
- **Method:** `GET`
- **Description:** Retrieve incidents with pagination.

- **Query Parameters:**
  | Parameter | Type | Description |
  |------------|--------|-----------------------------------------------------|
  | `page` | Number | Page number (default: 1) |
  | `limit` | Number | Number of records per page (default: 10) |

- **Example Request:**

  ```
  GET /api/v1/incidents/pagination?page=2&limit=5
  ```

- **Response:**
  ```json
  {
    "status": "success",
    "results": 5,
    "data": {
      "incidents": [
        {
          "_id": "id",
          "title": "Power Failure",
          "description": "Power failure in building A",
          "status": "open",
          "severity": "high",
          "createdAt": "timestamp"
        }
      ]
    }
  }
  ```

---

### 6. Get Single Incident by ID

- **URL:** `/api/v1/incidents/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a specific incident by ID.

- **Response:**
  ```json
  {
    "status": "success",
    "data": {
      "incident": {
        "_id": "id",
        "title": "Power Failure",
        "description": "Power failure in building A",
        "status": "open",
        "severity": "high",
        "createdAt": "timestamp"
      }
    }
  }
  ```

---

### 7. Update Incident (Status or Severity)

- **URL:** `/api/v1/incidents/:id`
- **Method:** `PATCH`
- **Description:** Update the status and/or severity of an existing incident.

- **Request Body:**

  ```json
  {
    "status": "closed", // optional
    "severity": "medium" // optional
  }
  ```

- **Response:**
  ```json
  {
    "status": "success",
    "data": {
      "incident": {
        "_id": "id",
        "title": "Power Failure",
        "description": "Power failure in building A",
        "status": "closed",
        "severity": "medium",
        "createdAt": "timestamp"
      }
    }
  }
  ```

---

### 8. Delete Incident

- **URL:** `/api/v1/incidents/:id`
- **Method:** `DELETE`
- **Description:** Delete an incident by ID.

- **Response:**
  ```json
  {
    "status": "success",
    "message": "Incident deleted successfully"
  }
  ```

---

## Features

- **Filtering:** `/filter` endpoint allows filtering by `status` and/or `severity`.
- **Pagination:** `/pagination` endpoint supports `page` and `limit` query parameters.
- **Validation:** Requests are validated for required fields and correct enum values.
- **Error Handling:** Structured error responses for validation and server errors.

---

## Example Error Response

```json
{
  "status": "fail",
  "message": "Invalid Incident ID"
}
```

---

# Author

- **Built with ❤️ by Vikas**

---

# Ready for Use! 🚀
