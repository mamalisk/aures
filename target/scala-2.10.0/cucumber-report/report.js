$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027aures.feature\u0027");
formatter.feature({
  "id": "listening-to-events",
  "description": "",
  "name": "Listening to events",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "listening-to-events;listen-to-a-queue",
  "description": "",
  "name": "Listen to a queue",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I create an event listener",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "the expected event is raised",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "I verify that the message is retrievable from Aures",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "aures_step.scala:9"
});
formatter.result({
  "duration": 124442000,
  "status": "pending",
  "error_message": "cucumber.runtime.PendingException: TODO: implement me\n\tat features.aures_step$$anonfun$1.apply(aures_step.scala:12)\n\tat features.aures_step$$anonfun$1.apply(aures_step.scala:10)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$23.applyOrElse(ScalaDsl.scala:55)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$23.applyOrElse(ScalaDsl.scala:55)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:33)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:27)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:112)\n\tat cucumber.runtime.Runtime.run(Runtime.java:105)\n\tat cucumber.runtime.Runtime.run(Runtime.java:93)\n\tat cucumber.api.cli.Main.run(Main.java:20)\n\tat cucumber.api.cli.Main.main(Main.java:12)\n\tat ✽.Given I create an event listener(aures.feature:4)\n"
});
formatter.match({
  "location": "aures_step.scala:15"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "aures_step.scala:21"
});
formatter.result({
  "status": "skipped"
});
});