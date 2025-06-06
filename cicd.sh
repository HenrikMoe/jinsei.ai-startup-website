#!/bin/bash

# Step 1: Pull the latest changes from git
echo "Pulling latest changes..."
git pull

# Step 2: Get the container ID of the running frontend container
echo "Getting running frontend container ID..."
CONTAINER_ID=$(docker ps -q --filter ancestor=jinseiai-startup-website-frontend)

if [ -n "$CONTAINER_ID" ]; then
    # Step 3: Stop and remove the running container
    echo "Stopping and removing container: $CONTAINER_ID"
    docker stop "$CONTAINER_ID"
    docker rm "$CONTAINER_ID"
else
    echo "No running container found for jinseiai-startup-website-frontend."
fi

# Step 4: Get the image ID of the frontend image
echo "Getting frontend image ID..."
IMAGE_ID=$(docker images -q jinseiai-startup-website-frontend)

if [ -n "$IMAGE_ID" ]; then
    # Step 5: Remove the image
    echo "Removing image: $IMAGE_ID"
    docker rmi "$IMAGE_ID"
else
    echo "No image found for jinseiai-startup-website-frontend."
fi

# Step 6: Prune Docker system including volumes to free up space
echo "Pruning Docker system..."
docker system prune -a --volumes -f

# Step 7: Start the services with Docker Compose
echo "Starting Docker services..."
docker-compose up -d

echo "Done."