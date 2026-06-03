pipeline {

agent any

stages {

stage('Clone') {

steps {

git branch: 'main',
url: 'https://github.com/shindeshravani-shr/Collage-admission-project.git',
credentialsId: 'github-creds

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

docker run -d -p 5000:5000 \
--name college-app \
college-app

'''

}

}

}

}
