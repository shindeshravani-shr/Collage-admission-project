pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/shindeshravani-shr/Collage-admission-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t college-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f college-app || true
                docker run -d -p 80:80 --name college-app college-app
                '''
            }
        }
    }
}