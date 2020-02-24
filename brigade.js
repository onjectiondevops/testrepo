const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("test-job", "bitnami/kubectl");
  job.tasks = [
    "echo Hello",
    "echo World",
    "get pods"
  ];
  job.run();
});


