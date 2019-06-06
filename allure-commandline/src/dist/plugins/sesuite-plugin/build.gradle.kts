repositories {
    jcenter()
}

apply plugin: 'java-library-distribution'

jar {
    archiveName = 'plugin.jar'
}

dependencies {
    compileOnly('io.qameta.allure:allure-plugin-api:2.12.1')
}

