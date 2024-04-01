const released = new Date(
  new Date("4/1/2024 7:00 PM").toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  })
);
$(".releasedIn").timeTo({
  timeTo: released,
  displayDays: 1,
  theme: "black",
  displayCaptions: true,
  fontSize: 48,
  captionSize: 14,
});
