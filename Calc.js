function calculate(){
    const km = document.getElementById('km').value || 0;
    const electricity = document.getElementById('electricity').value || 0;

    const totalC02 = (km * 30 * 0.12) + (electricity * 0.45);

    document.getElementById('result').innerText = 'Monthly CO2: ' + totalC02.toFixed(2) + 'kg';
    let adviceDiv = document.getElementById('advice');
    let resultDiv = document.getElementById('result');

    let result = 'Monthly CO2: ' + totalC02.toFixed(2) + ' kg';

    adviceDiv.innerHTML = "";

    if (totalC02 > 270) {
        result += "  Your carbon footprint is high! Consider reducing travel or electricity use.";

        let adviceButton = document.createElement("a");
        adviceButton.href = "https://www.nrdc.org/stories/how-you-can-stop-global-warming"; // Replace with your preferred link
        adviceButton.target = "_blank";
        adviceButton.innerText = "Learn How to Reduce Your Carbon Footprint";
        adviceButton.style.display = "block";
        adviceButton.style.marginTop = "10px";
        adviceButton.style.padding = "10px 15px";
        adviceButton.style.backgroundColor = "#ff4c4c";
        adviceButton.style.color = "white";
        adviceButton.style.textDecoration = "none";
        adviceButton.style.borderRadius = "5px";
        adviceButton.style.textAlign = "center";
        adviceButton.style.width = "fit-content";

        adviceDiv.appendChild(adviceButton);
    } else {
        result += "  Great job! Your carbon footprint is low.";
    }
    resultDiv.innerText = result;

  

}