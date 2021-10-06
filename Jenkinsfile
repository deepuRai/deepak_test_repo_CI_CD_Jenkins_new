pipeline {
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Cloning Git') {
            steps {
                git 'https://github.com/deepuRai/deepak_test_repo_CI_CD_Jenkins_new'
            }
        }
 
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
 
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}