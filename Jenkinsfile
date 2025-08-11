pipeline {
    agent any
    
    environment {
        DOCKERHUB_USER = 'gauravsaini2311'
        IMAGE_NAME = 'mobile-shop-app'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'pipeline {
    agent any
    
    environment {
        DOCKERHUB_USER = 'gauravsaini2311'
        IMAGE_NAME = 'mobile-shop-app'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/Mobile-Shop-App.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER} .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER}'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl set image deployment/mobile-shop-deployment mobile-shop-container=$DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER} --record'
            }
        }
    }
}
'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER} .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER}'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl set image deployment/mobile-shop-deployment mobile-shop-container=$DOCKERHUB_USER/$IMAGE_NAME:${BUILD_NUMBER} --record'
            }
        }
    }
}
