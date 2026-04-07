pipeline {
    agent any

    stages {

        stage('Frontend Build') {
            steps {
                script {
                    docker.image('node:20').inside {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Backend Build') {
            steps {
                script {
                    docker.image('node:20').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Backend') {
            steps {
                script {
                    docker.image('node:20').inside {
                        sh 'node app.js'
                    }
                }
            }
        }
    }
}