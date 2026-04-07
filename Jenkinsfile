pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    // Use Node 20 container for build
                    docker.image('node:20').inside {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    docker.image('node:20').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir('backend') {
                    docker.image('node:20').inside {
                        sh 'node app.js'
                    }
                }
            }
        }
    }
}