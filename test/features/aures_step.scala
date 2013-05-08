package features

import cucumber.api.scala.EN
import cucumber.api.scala.ScalaDsl
import cucumber.runtime.PendingException

class aures_step extends ScalaDsl with EN {

  Given( """^I create an event listener$""") {
    () =>
      println("Given")
      throw new PendingException()
  }

  When( """^the expected event is raised$""") {
    () =>
      println("when")
      throw new PendingException()
  }

  Then( """^I verify that the message is retrievable from Aures$""") {
    () =>
     println("then")
     throw new PendingException()
  }


}
