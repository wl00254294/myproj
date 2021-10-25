pipeline {
    agent any

    tools {
        nodejs  "Mynodejs"
    }

    stages {
        stage('Build') {
            steps {
               echo 'Building..'
               sh "cd /projects/myproj && git pull"
               sh "cd /projects/myproj && rm -rf dist"
               sh "cd /projects/myproj && npm install"
               sh "cd /projects/myproj && npm run build"

            }
            post {
                success {
                    echo 'Deployment to Azure..'
                    sh "cd /projects/myproj/dist && az webapp up --name VueWin --plan ASP-JYRG-946c --html"
                    echo 'Done !'
                }
            }
        }
    }
}
