import org.junit.runner.RunWith
import cucumber.api.junit.Cucumber

@RunWith(classOf[Cucumber])
@Cucumber.Options(glue = Array("features"))
class RunCukesTest {}
