pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/<username>/<repo-name>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                npm install -g pm2
                pm2 stop node-app || true
                pm2 start npm --name node-app -- start
                '''
            }
        }
    }
}
