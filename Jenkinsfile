pipeline {
    agent any

    stages {

        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'YOUR_GIT_REPO_URL'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
