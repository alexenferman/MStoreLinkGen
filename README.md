# AEM Store Link Generator
A clean UI driven website that gets .appx links for microsoft store apps  
**Cannot be used to pirate apps!**  
  
[Visit the website project](https://alexenferman.github.io/MStoreLinkGen/main/index.html)

!(https://i.postimg.cc/BQrDL2Yy/str1.png)
!(https://i.postimg.cc/K8tTn4CY/str2.png)

Using the store.rg-adguard.net API  
```HTML
xmlhttp.open('POST', 'https://cors-anywhere.herokuapp.com/https://store.rg-adguard.net/api/GetFiles', true);
xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xmlhttp.send("type=url&url=" + document.getElementById("url").value + "&ring=RP&lang=en-US");
```
  
## Relies on  
`store.rg-adguard.net API`: Fetches html content for a given link.  
`cors-anywhere.herokuapp.com`: Used to make CORS request to the store "api" Editable.  
`Material Design Lite [MDL]`: Lightweight Material Design framework
  
