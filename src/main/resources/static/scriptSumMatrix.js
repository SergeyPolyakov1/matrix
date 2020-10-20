
let resultMatrix



const choiceSizeMatrixDouble  = () =>{
    let selectedIndex  = document.getElementById('sizeMatrix').options.selectedIndex
     sizeMatrix = document.getElementById('sizeMatrix').options[selectedIndex].value

     sizeMatrix = Number(sizeMatrix)

     const form = document.getElementById('sumMatrixs')
     const matrix1 = document.getElementById('matrix1')
     const matrix2 = document.getElementById('matrix2')
     form.appendChild(matrix1)
     form.appendChild(matrix2)


   while(matrix1.firstChild){
    matrix1.removeChild(matrix1.firstChild)
   }
   while(matrix2.firstChild){
    matrix2.removeChild(matrix2.firstChild)
   }

   let b1 = document.createElement('b')
   b1.innerText = 'MATRIX 1'
   matrix1.append(b1)
     for(let i = 0; i< sizeMatrix;i++){
        let tr = document.createElement('tr')
        tr.id = 'row'+(i+1)
        matrix1.appendChild(tr)
        for(let j = 0;j < sizeMatrix;j++){
            let th =  document.createElement('th')
            let input = document.createElement('input')
            input.type='number'
            input.name='matrix1'
            th.appendChild(input)
            tr.appendChild(th)
        }

     }
     let b2 = document.createElement('b')
     b2.innerText = 'MATRIX 2'
     matrix2.append(b2)

     for(let i = 0; i< sizeMatrix;i++){
      let tr = document.createElement('tr')
      tr.id = 'row'+(i+1)
      matrix2.appendChild(tr)
      for(let j = 0;j < sizeMatrix;j++){
          let th =  document.createElement('th')
          let input = document.createElement('input')
          input.type='number'
          input.name='matrix2'
          th.appendChild(input)
          tr.appendChild(th)
      }

   }



     const sendButtom = document.getElementById('send')
     if(!sendButtom){
     const sendButtom = document.createElement('button')
     sendButtom.type='submit'
     sendButtom.innerText='calculate'
     sendButtom.id='send'
     sendButtom.name='send'
     sendButtom.addEventListener('click',sendForm)
     form.append(sendButtom)
  }else{
    form.append(sendButtom)
  }


}



function sendTwoMtarix(){

  let  formData = new FormData(document.forms.sumMatrixs)

    let xhr = new XMLHttpRequest()
    xhr.responseType = "json"


    xhr.open("POST","http://217.73.80.14:8080/sumtwomatrix")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload =function() {
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

    let resArr = []
    let matrix = []
    let matrix2 = []

    for(var pair of formData.entries()) {
    resArr.push(pair[1])
    }

let index =0
for(let i =0;i<resArr.length/2;i++){
matrix.push(resArr[i])
}
for(let i =resArr.length/2;i<resArr.length;i++){
  matrix2.push(resArr[i])
  }
    let resObj = {
    "matrix": matrix,
    "matrix2": matrix2
    }

    xhr.send(JSON.stringify(resObj))

}
