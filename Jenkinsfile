pipeline {
    agent any

    stages {

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir('backend') {
                    bat 'node app.js'
                }
            }
        }
    }
}