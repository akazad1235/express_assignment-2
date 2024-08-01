# batch-3-express_assignment-2

Objective: Develop a Express js project. Using Typescript, express js, mongoDB with mongoose. I also used code checker and formatter eslint & prettier

### Install the project, follow these steps:

1. Clone the repository.
2. Install dependencies (npm install).
3. create env
4. Run the application.

### Configuration Environment (env)

1. NODE_ENV=development
2. PORT=5000
3. DATABASE_URL= include local or cloud mongodb database url

### Some npm command

1. npm run dev (run the application)
2. npm run lint (lint check)
3. npm run lint-fix (lint error fix)
4. npm run format (for prettier)
5. npm run build (compile typescript to js)

### Api endpoints

##### Product Management

1.  Create a New Product - Endpoint: /api/products - Method: POST - Sample Request Body:
    ```json
    {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
    {
    "type": "Color",
    "value": "Midnight Blue"
    },
    {
    "type": "Storage Capacity",
    "value": "256GB"
    }
    ],
    "inventory": {
    "quantity": 50,
    "inStock": true
    }
    }
    ```

    ```
