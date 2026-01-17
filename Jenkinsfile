pipeline {
  agent any

  stages {

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t astnjs74/devops-capstone:latest .'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        sh 'docker push astnjs74/devops-capstone:latest'
      }
    }

    stage('Deploy Container') {
      steps {
        sh '''
          docker stop devops-app || true
          docker rm devops-app || true
          docker run -d -p 3000:3000 --name devops-app astnjs74/devops-capstone:latest
        '''
      }
    }
  }
}
