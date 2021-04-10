var webSafeColors = {}

function doStuff() {
   // c.children[1].children[1].innerText
   // "#F0F8FF"
   c = document.getElementById("colorTable")

   // for (i = 0; i < c.children.length - 1; i++) {
   //    for (j = 0; j < c.children[i].children.length; j++) {
   //       console.log(c.children[i].children[j].innerText + "\n");
   //    }
   // }

   for (i = 1; i < c.children.length - 1; i++) {
      var name = c.children[i].children[0].innerText.substring(0, name.indexOf(" ") - 1)
      webSafeColors[name] = {
         name: c.children[i].children[0].innerText,
         hex: c.children[i].children[1].innerText
      }
   }

   download(JSON.stringify(webSafeColors), 'webSafeColor.json', 'application/json')
}

function download(text, name, type) {
   var a = document.createElement("a")
   var file = new Blob([text], { type: type })
   a.href = URL.createObjectURL(file)
   a.download = name
   a.click()
}