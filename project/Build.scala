import sbt._
import play.Project._
import templemore.xsbt.cucumber.CucumberPlugin

object ApplicationBuild extends Build {

  val appName         = "aures"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    jdbc,
    anorm,
    "info.cukes" % "cucumber-core" % "1.1.1" % "test",
    "info.cukes" % "cucumber-junit" % "1.1.1" % "test",
    "info.cukes" % "cucumber-scala" % "1.1.1" % "test",
    "se.radley" % "play-plugins-salat_2.9.2" % "1.1",
    "templemore" % "xsbt-cucumber-plugin" % "0.6.2"
  )

  val buildSettings = Defaults.defaultSettings ++
    CucumberPlugin.cucumberSettings ++
    Seq ( CucumberPlugin.cucumberFeaturesDir := file("./test/features/"),
      CucumberPlugin.cucumberJunitReport := true,
      CucumberPlugin.cucumberHtmlReport := true)



  val main = play.Project(appName, appVersion, appDependencies, settings = buildSettings).settings(
    routesImport += "se.radley.plugin.salat.Binders._",
    templatesImport += "org.bson.types.ObjectId"
  )

}
