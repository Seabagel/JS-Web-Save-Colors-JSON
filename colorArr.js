var webSafeColors = {}
webSafeColors.name = []
webSafeColors.hex = []

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
      for (j = 0; j < 2; j++) {
         var result = (c.children[i].children[j].innerText).toString()
         if (j == 0) {
            webSafeColors.name.push(result.substring(result.indexOf(" "), result.length - 1))
         }
         if (j == 1) {
            webSafeColors.hex.push(result.substring(result.indexOf(" "), result.length - 1))
         }
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