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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});