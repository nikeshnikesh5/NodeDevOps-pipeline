pipeline {
  agent any

  environment {
    IMAGE_NAME = "techhunt/node-moni"
    TAG = "latest"
  }

  stages {

    stage('Clone Code') {
      steps {
        git 'https://github.com/nikeshnikesh5/NodeDevOps-pipeline.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$TAG .'
      }
    }

    stage('Login to Docker Hub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'docker-cred',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
        }
      }
    }

    stage('Push Image') {
      steps {
        sh 'docker push $IMAGE_NAME:$TAG'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }

  post {
    success {
      echo '✅ Deployment Successful!'
    }
    failure {
      echo '❌ Pipeline Failed!'
    }
  }
}
