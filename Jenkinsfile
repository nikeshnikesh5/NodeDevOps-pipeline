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
        sh 'docker tag simple-node techhunt/simple-node:latest'
        sh 'docker push techhunt/simple-node:latest'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}