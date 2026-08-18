const nappi = document.getElementById("haeTuotteet");
const tuotteetDiv = document.getElementById("tuotteet");

nappi.addEventListener("click", async () => {

    tuotteetDiv.textContent = "Haetaan tuotteita...";

    try {

        const vastaus = await fetch("http://localhost:3000/api/products");

        const tuotteet = await vastaus.json();

        tuotteetDiv.innerHTML = "";

        tuotteet.forEach((tuote) => {

            const tuoteElementti = document.createElement("div");

            tuoteElementti.className = "tuote";

            tuoteElementti.innerHTML = `
                <strong>${tuote.nimi}</strong>
                <br>
                ${tuote.hinta.toFixed(2)} €
            `;

            tuotteetDiv.appendChild(tuoteElementti);
        });

    } catch (virhe) {

        tuotteetDiv.textContent =
            "API-kutsussa tapahtui virhe.";

        console.error(virhe);
    }
});