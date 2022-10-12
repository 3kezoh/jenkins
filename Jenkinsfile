pipeline {
  agent any

  parameters {
    choice(name: "NODE_VERSION", choices: ["Node 16.17.1", "Node 18.10"])
  }

  stages {
    stage("build") {
      steps {
        nodejs(nodeJSInstallationName: "${params.NODE_VERSION}") {
          sh "node --version"
          sh "yarn install"
          sh "yarn build"
        }
      }
    }
  }
}