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
        const resultTexts = {
            polite: [
                "<strong>NEI.</strong> Takk for interessen.",
                "Du er dessverre ikke blant de utvalgte denne gangen.",
                "Vi beklager, men lykken var ikke med deg i dag.",
                "Du er for gammel",
                "Du er for ung",
            ],
            sarcastic: [
                "Ja, se der ja. Det var jo nesten.",
                "Du ble nummer 100 001. Tett på!",
                "Oi. SÅ nær. Eller… ikke.",
                "Systemet vurderte deg lenge. I ca. 0,2 millisekunder.",
                "Du kjører for mye bil.",
                "Du har spist pepperkake i dag.",
                "Du drakk julebrus før desember."
            ],
            dark: [
                "Du er i kontrollgruppen. Gratulerer med det.",
                "Vi ser potensialet ditt. Ikke i dag, da.",
                "Håp er dessverre ikke en skattegodkjent valuta.",
                "Resultatet var allerede bestemt.",
                "Du står på rulleski",
                "Du kaster matavfallet i restavfallet"
            ],
            passiveAggressive: [
                "Ikke ring oss. Vi kommer definitivt ikke til å ringe deg.",
                "Dette er nok til ditt eget beste.",
                "Du har sikkert andre muligheter i livet. Antakelig.",
                "Staten setter pris på deg. Bare ikke økonomisk.",
                "Du betaler formueskatt.",
                "Du betaler ikke formueskatt."
            ],
            bureaucratic: [
                "Du oppfyller ikke kriteriene slik vi tolker dem i dag.",
                "Du kvalifiserer nesten, på en måte, teknisk sett.",
                "Dette er innenfor forventet utfallsrom.",
                "Resultatet er i henhold til våre interne retningslinjer.",
                "Du har et firma."
            ]
        };

        const allMessages = Object.values(resultTexts).flat();

        function biasedRandomIndex(max) {
            const rand = Math.random();
            return Math.floor(Math.pow(rand, 2) * max);
        }

        const message = allMessages[biasedRandomIndex(allMessages.length)];

        result.innerHTML = `<strong>NEI.</strong><br>${message}`;
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
