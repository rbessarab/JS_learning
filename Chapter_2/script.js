function heeHaw() {
    for (let i = 1; i <= 100; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            document.write("Hee Haw!" + "<br>");
        }
        else if(i % 3 == 0) {
            document.write("Hee!" + "<br>");
        }
        else if(i % 5 == 0) {
            document.write("Haw!" + "<br>");
        }
        else {
            document.write(i + "<br>");
        }
    }
}

heeHaw();