pipeline {
  agent any

  stages {
    stage("build") {
      steps {
        nodejs(nodeJSInstallationName: "Node 16.17.1") {
          sh "yarn install"
          sh "yarn build"
        }
      }
    }
  }
}