# SPAPI - Service Providers API

SPAPI (Service Areas) is a Node.js application that provides information about service areas and service provider that operate on that area. The application uses MongoDB to store geospatial data and offers the ability to add service areas and query areas near a specific location.

## Getting Started

Follow the instructions below to set up and run the application on your local machine.

### Prerequisites

Before getting started, make sure you have the following tools installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone the repository.

2. Install the dependencies.

```
nvm install 16
npm install
```

## Configuration

Create or edit the existent `src/config/app.config.ts` file with your application's settings, such as the port on which the server will run and the MongoDB database configuration:

## Running the Application

1. Start the server:

```
npm start
```

2. Use the API routes to add service areas and query areas nearby.

## API Routes

- `POST /service-areas`: Add information about service areas. Use a JSON in the request body with the `providerName`, `areaName`, `price`, and `geojson` fields to define the area.

- `GET /service-areas`: Query service areas near a specific location. Pass the `lat` and `lng` coordinates as query parameters.

- `POST /providers`: Create a new provider.

## JSON Request Template

Here's an example JSON for adding a service provider:
```
{
  "name": "Provider023",
  "email": "provider001@example.com",
  "phoneNumber": "123-456-7890",
  "language": "en",
  "currency": "USD"
}

```

Here's an example JSON for adding a service area centered around *Guarulhos Airport*:

```
{
  "providerName": "Provider0223",
  "areaName": "São José dos Campos",
  "price": 32.73,
  "geojson": {
    "type": "Polygon",
    "coordinates": [
      [
        [-46.4692, -23.4322],  // Aeroporto de Guarulhos (Centro)
        [-46.4449, -23.2955],  // Ponto a 300 km ao norte
        [-46.2895, -23.4322],  // Ponto a 300 km a leste
        [-46.4692, -23.5689],  // Ponto a 300 km ao sul
        [-46.6489, -23.4322],  // Ponto a 300 km a oeste
        [-46.4692, -23.4322]   // Aeroporto de Guarulhos (Centro)
      ]
    ]
  }
}
```

Here's an example JSON for adding a service area centered around *Guarulhos Airport*:

```
http://localhost:3005/service-areas?lat=-23.205628819946803&lng=-45.86103846930933

(INPE - São José dos Campos Coordinates)

```

## Contributing

Feel free to contribute to this project. You can create issues or send pull requests to improve the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- Juliano Souza - julianoraphael@gmail.com

Enjoy using SPAPI!
