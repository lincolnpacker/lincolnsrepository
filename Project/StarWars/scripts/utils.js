
export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    letstart= end - 2
    console.log(`start is: ${url.charAt(start)} and end is: ${url.charAt(end)}`)
    console.log(url.slice(start,end))
    if(url.charAt(start) === '/') {
        start++
    }
    Return url.slice(start,end)
    }
    

export function removeChildren(element){
    while (Element.firstChild){
        Element.removeChild(element.firstChild);
    }}