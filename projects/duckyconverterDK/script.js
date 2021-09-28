const input = document.getElementById("input")
const output = document.getElementById("output")
const button = document.getElementById("button")

button.addEventListener("click", function(){
    console.log(input.value)
    switch (input.value) {
        case "ENTER":
            output.value = '#include <Keyboard.h> \n'
            + '\n' + "FILL"
            + '// Init function\n'
            + "FILL" + '\n'
            + '{\n'
            + '  // Begining the stream\n'
            + '  Keyboard.begin();\n\n'
            + '  // Waiting 500ms for init\n'
            + '  delay(500);\n'
            + '\n' + "FILL"
            + '}\n'
            + '\n' + "FILL"
            + 'void typeKey(int key)\n'
            + '{\n'
            + '  Keyboard.press(key);\n'
            + '  delay(50);\n'
            + '  Keyboard.release(key);\n'
            + '}\n\n'
            + '// Unused\n'
            + 'void loop() {}';
      
            break;
    
        default:
            break;
    }
})
