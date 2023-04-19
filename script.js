const apiLink = "https://api.adviceslip.com/advice"

const adviceNumber = document.querySelector('.advice-number')

const adviceText = document.querySelector('.advice-text')

const adviceBtn = document.querySelector('.dice-container')

const fetchAdvice = async () => {
    const response = await fetch(apiLink)
    const advice = response.json().catch((error) => console.log(error))
    return advice
}

const generateAdvice = async () => {
    const data = await fetchAdvice()
    const advice = data.slip

    renderAdvice(advice)
}

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj

    adviceNumber.textContent = `ADVICE #${id}`
    adviceText.textContent = `"${advice}"`

    adviceBtn.classList.add("red");

    setTimeout(() => {
        adviceBtn.classList.remove("red");
    }, 2000);
};


window.addEventListener('DOMContentLoaded', () => {
    adviceBtn.addEventListener("click", () => {
        generateAdvice()
    })
})