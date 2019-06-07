plugins {
    `java-library-distribution`
}

description = "Allure TRX Plugin"

dependencies {
    compileOnly("io.qameta.allure:allure-plugin-api:2.12.1")
}

artifacts.add("allurePlugin", tasks.distZip)
artifacts.add("archives", tasks.distZip)
