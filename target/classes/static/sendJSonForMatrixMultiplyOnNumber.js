function sendingJSON(){
    let  formData = new FormData(document.forms.matrixForm)
    let xhr = new XMLHttpRequest()
    xhr.responseType = "json"
    xhr.open("POST","http://217.73.80.14:8080/calcmultiplymatrixonnumber")
    xhr.onload =  function() {
    let resMatrixArr = xhr.response
                       let messageP = document.createElement('p')
                       messageP.innerHTML = 'Result matrix'
                       let divRes = document.getElementById('resContainer')
                       divRes.appendChild(messageP)
                       let tableRes = document.getElementById('resTable')
                       divRes.appendChild(tableRes)
                      let indexM = 0
                       for(let i = 0;i < Math.sqrt(resMatrixArr.length); i++){
                       let tr = document.createElement('tr')
                       tableRes.appendChild(tr)
                            for(let j = 0; j < Math.sqrt(resMatrixArr.length);j++){
                            let th = document.createElement('th')
                            th.innerText = resMatrixArr[indexM]
                            tr.appendChild(th)
                            indexM++
                            }

                       }
 }
    xhr.setRequestHeader("Content-Type", "application/json");
    let resArr = []
    for(var pair of formData.entries()) {
    resArr.push(pair[1])
    }
 resMul = Number(document.getElementById('multiplier').value)
    let resObj = {
    "matrix": resArr,
    "multiplier": resMul
    }

    xhr.send(JSON.stringify(resObj))




    }