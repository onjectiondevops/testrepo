const { events, Job } = require("brigadier");
events.on("exec", () => {
  var job = new Job("test-job", "alpine:3.8");
  job.tasks = [
    "echo Hello",
    "echo World",
    "ls -lhtr ; pwd"
  ];
  job.run();
});
