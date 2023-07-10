pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('Docker-hub-repo')
    }
    stages {
        stage('Checkout'){
            agent any
            steps{
                git credentialsId: 'GITHUB_CREDENTIEL' url: 'https://github.com/Akram6Trimech9/GT-CLIENT-PART.git', branch: 'main'
            }
        }
        stage('init'){
            agent any
            steps{
               sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('web Analysis ') {
            agent any
            when {
                changeset "*.*"
                beforeAgent true
            }
            steps {
                     nodejs(nodeJSInstallationName: 'nodejs'){
                    sh 'npm install'
                             script {
                                def scannerHome = tool 'SonarQube';
                                withSonarQubeEnv('sonar') {
                                sh "${tool("SonarQube")}/bin/sonar-scanner -Dsonar.projectKey=reactapp -Dsonar.projectName=reactapp"
                                }
                             }
                    }
             }
        }
        stage('Sonarqube quality gate') {
            agent any
            = 
            when {
                changeset "*.*"
                beforeAgent true
            } 
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Build client') {
            agent any
            when {
                changeset "*.*"
             }
            steps {
                dir('auth-api and Analysis'){
                    sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/client-front .'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/client-front '
                    sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/client-front '
                    sh 'docker logout'
                }
            }
        }
    }
}