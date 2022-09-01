# Docker Setup

## Development

### Build image

    docker build --tag aci-dev .

### Run compose

    docker compose --file compose.dev.yaml up

## Production

### Copilot

    copilot svc deploy --name front-end --env production
