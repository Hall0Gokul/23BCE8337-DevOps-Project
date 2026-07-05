pipeline {
    agent any

    environment {
        IMAGE_NAME = "corporate-website"
        CONTAINER_NAME = "corporate-container"
        HOST_PORT = "8080"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping and removing any existing container...'
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Container') {
            steps {
                echo 'Running new container...'
                sh "docker run -d -p ${HOST_PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Listing running containers...'
                sh "docker ps"
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully. Website deployed at http://localhost:8080'
        }
        failure {
            echo 'Pipeline failed. Check console output for details.'
        }
    }
}
