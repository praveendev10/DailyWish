pipeline {
  agent any

  stages {

    stage('Frontend Build') {
      steps {
        dir('Frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Backend Build') {
      steps {
        dir('Backend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Backend') {
      steps {
        dir('Backend') {
          sh 'node index.js'
        }
      }
    }

  }
}