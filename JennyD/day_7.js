    var main = document.getElementById("main");
    console.log(main.children)
    for (i = 0; i < main.children.length; i++)
    {
        main.children[i].addEventListener("mouseenter",
            paintBox);
    }
};