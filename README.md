# Glasswall File Drop

Simple single page application written in react, which allows users to have a file processed with the Glasswall d-First Engine.

## Getting Started
You can view a live demo over at [https://glasswall-file-drop.azurewebsites.net/](https://glasswall-file-drop.azurewebsites.net/)

To get the frontend running locally:
* Clone this repo
* `npm install` to install all required dependencies
* `npm start` to star the local server (this project uses create-react-app)

The local web server will use the standard React port 3000.
We have a live API server running at https://glasswall-file-drop-api.azurewebsites.net for the application to make requests against.

## Running the tests

Tests can be run locally with `npm test`

## Deployment

Deployment is handled via Azure DevOps pipelines. Upon pushing to master a Build will take place, packaging up the application with Docker and pushing the image to an Azure Container Registry. Once the CI build has been completed a Release will upload the lastest docker image to the App Service running the React App.
