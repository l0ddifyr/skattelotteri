(function () {
  const wheel = document.getElementById("wheel");
  const btn = document.getElementById("spinButton");
  const result = document.getElementById("resultText");

  let spinning = false;
  let rotation = 0;

  function spin() {
    if (spinning) return;
    spinning = true;

    result.textContent = "Spinner…";

    const extra = 4 + Math.floor(Math.random() * 3);
    rotation += 360 * extra;

    wheel.style.transition = "transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      const messages = [
        "<strong>NEI.</strong> Du er kontrollgruppen.",
        "I følge våre skattekalkulasjoner tror vi at du kanskje har tjent en ørliten granne for mye. Vil du prøve igjen?",
        "Du er dessverre ikke plukket ut. Ikke ring oss, vi ringer deg.",
        "Ja, se der. Det var nært. Du ble nummer 100 001. Vil du prøve igjen?",
        "Du er med å bygge landet, men det ble dessverre ingen gevinst. Vil du prøve igjen?",
          "Det ble neste gevinst",
        "Takk for ditt bidrag.",
        "Prøv igjen."
      ];
      result.innerHTML = messages[Math.floor(Math.random() * messages.length)];
      spinning = false;
    }, 2600);
  }

    btn.addEventListener("click", function () {
        if (typeof gtag === "function") {
            gtag("event", "spin_button_click", {
                button_name: "SPINN HJULET",
                page_path: window.location.pathname
            });
        }

        spin();
    });
})();
