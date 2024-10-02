function clickableHero(){
    console.log("click ran")
    heroButtonsDiv = document.querySelector(".hero-banner__button-collection");
    firstHeroButton = heroButtonsDiv.querySelector(".button--primary")

    firstHeroButton.click()
}