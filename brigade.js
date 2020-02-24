const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("test-job", "bitnami/kubectl");
  job.tasks = [
    "echo Hello",
    "echo World",
    "kubectl get pods --all-namespaces",
    "kubectl cluster-info"
  ];
  job.run();
});


