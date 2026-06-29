pipeline {
    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    environment {
        IMAGE_NAME = "college-app"
        CONTAINER_NAME = "college-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/shindeshravani-shr/Collage-admission-project.git'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true
                '''
            }
        }

        stage('Remove Old Image') {
            steps {
                sh '''
                docker rmi $IMAGE_NAME || true
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build --memory=512m --no-cache -t $IMAGE_NAME .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                -p 5000:5000 \
                --name $CONTAINER_NAME \
                -e DB_HOST=college-db.co7yois848m6.us-east-1.rds.amazonaws.com \
                -e DB_USER=admin \
                -e DB_PASSWORD=College-db \
                -e DB_NAME=college_admission \
                $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Build & Deploy Successful"
        }
        failure {
            echo "❌ Build Failed - Check Logs"
        }
    }
}
