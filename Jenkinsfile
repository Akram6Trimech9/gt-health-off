pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('DODKCER_HUB_CREDENTIEL')
    }
    stages {
        stage('Checkout'){
            agent any
            steps{
                git url: 'https://github.com/Akram6Trimech9/gt-health-off.git', branch: 'master'
            }
        }
        stage('testddd'){
            steps{
               sh 'ls'
            }
        }
        stage('init'){
            steps{
               sh 'env'
               sh 'echo $DOCKERHUB_CREDENTIALS_PSW | /usr/bin/docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('web Analysis ') {
            when {
                changeset "*.*"
                beforeAgent true
            }
            steps {
                     nodejs(nodeJSInstallationName: 'nodejs'){
                    // sh 'npm install'
                             script {
                                def scannerHome = tool 'SonarQube';
                                withSonarQubeEnv('sonar') {
                                sh "${tool("SonarQube")}/bin/sonar-scanner -Dsonar.projectKey=app -Dsonar.projectName=app"
                                }
                             }
                    }
             }
        }
        stage('Build client') {
            when {
                changeset "*.*"
            }
            steps {
                    sh 'docker build -t $DOCKERHUB_CREDENTIALS_USR/client-front:1 .'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/client-front:1 '
                    sh 'docker rmi $DOCKERHUB_CREDENTIALS_USR/client-front:1 '
                    sh 'docker logout'
            }
        }
        stage('Deploy using helm '){
            when {
                changeset "*.*"
            }  
            steps {
                script {
                    sh 'helm lint helmclient/'
                    sh 'helm uninstall helmclient'
                    // sh 'helm uninstall helmclient'
                    sh 'helm upgrade --install helmclient helmclient/'
                } 
            }
        }

    }
}