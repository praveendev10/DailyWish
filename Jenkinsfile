pipeline {
    agent any

    stages {

        // stage('Frontend Build') {
        //     steps {
        //         dir('frontend') {
        //             sh 'npm install'
        //             sh 'npm run build'
        //         }
        //     }
        // }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir('backend') {
                    sh 'node app.js'
                }
            }
        }
    }
}