pipeline {
  agent any

  stages {

    stage('Check Files') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run App') {
      steps {
        sh 'node index.js'
      }
    }

  }
}