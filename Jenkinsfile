pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t simple-node .'
      }
    }

    stage('Push') {
      steps {
        sh 'docker tag simple-node your-dockerhub/simple-node:latest'
        sh 'docker push your-dockerhub/simple-node:latest'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}