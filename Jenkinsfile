pipeline {
    agent any

    tools {
        nodejs  "Mynodejs"
    }

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
               sh "npm install"
               sh "npm run build"

            }
            post {
                success {
                    echo 'Deployment to Azure..'
                    sh "cd dist && az webapp up --name VueWin --plan ASP-JYRG-946c --html"
                    echo 'Done !'
                }
            }
        }
    }
}
