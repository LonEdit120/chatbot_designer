
function Select(event, SelectedBlock,OptionSwitch) {
    var i, ShowBlock, PropertyTab, OptionTab, StyleTabContent;


    
    PropertyTab = document.getElementsByClassName("PropertyTab");
    for (i = 0; i < PropertyTab.length; i++) {
        PropertyTab[i].className = PropertyTab[i].className.replace(" active", "");
    }


    if (OptionSwitch) {
        OptionTab = document.getElementsByClassName("OptionTab");
        for (i = 0; i < OptionTab.length; i++) {
            OptionTab[i].className = OptionTab[i].className.replace(" active", "");
        }
        for (i = 0; i < PropertyTab.length; i++) {
            PropertyTab[i].style.display = "none";
        }
    }
    
    
    StyleTabContent = document.getElementsByClassName("StyleTabContent");
    for (i = 0; i < StyleTabContent.length; i++) {
        StyleTabContent[i].style.display = "none";
    }
    

    ShowBlock = document.getElementsByClassName(SelectedBlock);
    for (i = 0; i < ShowBlock.length; i++) {
        ShowBlock[i].style.display = "inline";
    }

    event.currentTarget.className += " active";
}

//test color select
function selectTest(event) {

    var test = document.getElementsByClassName("DEBUG");
    for (let i = 0; i < test.length; i++) {
        test[i].style.backgroundColor = event.currentTarget.style.backgroundColor;
    }
}