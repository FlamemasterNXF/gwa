let currentPage = 0
let previousPage = 0
let currentSubPage = 0
let pageNumbers = [`0`,`1`,`2`,`3`,]
let subPageNumbers = [`0`,`1`,]
const pages = []
for (let i=0;i<pageNumbers.length;i++){
    pages[i] = document.getElementById(`page${pageNumbers[i]}`)
}
const subPages = []
for (let i=0;i<subPageNumbers.length;i++){
    subPages[i] = document.getElementById(`subPage${subPageNumbers[i]}`)
}
function switchPage(x){
    pages[currentPage].style.display = `none`
    previousPage = currentPage
    currentPage = x
    currentSubPage = 0
    for (let i=0;i<subPages.length;i++){subPages[i].style.display=`none`}
    pages[currentPage].style.display = `flex`
}
function switchSubPage(x){
    subPages[currentSubPage].style.display = `none`
    currentSubPage = x
    for (let i=0;i<pages.length;i++){pages[i].style.display=`none`}
    subPages[currentSubPage].style.display = `flex`
}
function backPage(){
    if (currentPage!==0){
        if (currentSubPage===0){
            pages[currentPage].style.display = `none`
            currentPage = previousPage
            currentSubPage = 0
            for (let i=0;i<subPages.length;i++){subPages[i].style.display=`none`}
            pages[currentPage].style.display = `flex`
        }
        else{
            pages[currentPage].style.display = `flex`
            currentSubPage = 0
            for (let i=0;i<subPages.length;i++){subPages[i].style.display=`none`}
        }
    }
}
window.onload = function(){
    for (let i=1;i<pages.length;i++){pages[i].style.display = `none`}
    for (let i=0;i<subPages.length;i++){subPages[i].style.display=`none`}
}