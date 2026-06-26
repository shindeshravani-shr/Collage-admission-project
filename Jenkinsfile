pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/shindeshravani-shr/Collage-admission-project.git',
                credentialsId: 'github-creds'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker rm -f college-app || true
                docker rmi college-app || true
                docker build -t college-app .
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker run -d \
                --name college-app \
                -p 5000:5000 \
                -e DB_HOST=college-db.co7yois848m6.us-east-1.rds.amazonaws.com \
                -e DB_USER=admin \
                -e DB_PASSWORD=College-db \
                -e DB_NAME=college_admission \
                college-app
                '''
            }
        }

    }

}
