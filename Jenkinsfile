pipeline {
 
    environment {
        dockerregistry = 'https://registry.hub.docker.com'
        dockerhuburl = "raideepu/deepak-test1"
        githuburl = "deepuRai/deepak_test_repo_CI_CD_Jenkins_new"
        dockerhubcrd = 'dockerhub'
    }
 
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Clone git repo') {
            steps {
                git 'https://github.com/' + githuburl
            }
        }
 
        stage('Install Node.js dependencies') {
            steps {
                bat 'npm install'
            }
        }
 
        stage('Test App') {
            steps {
                bat 'npm test'
            }
        }
 
        stage('Build image') {
          steps{
            script {
              dockerImage = docker.build(dockerhuburl)
            }
          }
        }
 
        stage('Test image') {
            steps {
                 bat "docker run -p 3000:3000 $dockerhuburl npm install -g mocha npm test"
            }
        }
 
        stage('Deploy image') {
          steps{
            script {
              docker.withRegistry(dockerregistry, dockerhubcrd ) {
                dockerImage.push("${env.BUILD_NUMBER}")
                dockerImage.push("latest")
              }
            }
          }
        }
 
        stage('Remove image') {
          steps{
            bat "docker rmi $dockerhuburl:$BUILD_NUMBER"
          }
        }
    }
}