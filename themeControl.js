const themes = {
    light: {
        background: "white"
    },
    dark: { 
        background: "grey"
    }
}

function changeCSSTheme(themeName){
    for (const variable in themes[themeName]) {
        console.log("themes[themeName][variable] is:\n" = themes[themeName][variable]);
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName]);
    }
}

function toggleLightDark(){
    let currentBacgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");
    if (currentBacgroundColour =="white") {
        changeCSSTheme("dark");
    } else {
        changeCSSTheme("light");
    }
}

// changeCSSTheme("dark");
// themes["light"]