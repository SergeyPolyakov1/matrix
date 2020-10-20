let column1
let row1

const createMatrix  = () =>{
    let matrix1 = document.getElementById('matrix1')
    let column = column1 = document.getElementById('column1').value
     let row = row1 = document.getElementById('row1').value
let  c1 =  Number(document.getElementById('column1').value )
let r2 = Number(document.getElementById('row2').value )

if(c1 != r2){
alert('the number of columns does not equal the number of rows')
location.reload()
return
}
let clearMatrix1 = document.getElementById('matrix1');
while (clearMatrix1.firstChild) {
    clearMatrix1.removeChild(clearMatrix1.firstChild);
}
let clearMatrix2 = document.getElementById('matrix2');
while (clearMatrix2.firstChild) {
    clearMatrix2.removeChild(clearMatrix2.firstChild);
}


     for(let i = 0; i<  row   ;i++){
        let tr = document.createElement('tr')
        tr.id = 'row'+(i+1)
        matrix1.appendChild(tr)
        for(let j = 0;j <  column;j++){
            let th =  document.createElement('th')
            let input = document.createElement('input')
            input.type='number'
            input.value='0'
            input.name='matrix1'
            th.appendChild(input)
            tr.appendChild(th)
        }
     }

     let matrix2 = document.getElementById('matrix2')
          column = document.getElementById('column2').value
          row = document.getElementById('row2').value

     for(let i = 0; i<  row   ;i++){
             let tr = document.createElement('tr')
             tr.id = 'row'+(i+1)
             matrix2.appendChild(tr)
             for(let j = 0;j < column ;j++){
                 let th =  document.createElement('th')
                 let input = document.createElement('input')
                 input.type='number'
                 input.value='0'
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

  let  formData = new FormData(document.forms.multiplyMatrix)

    let xhr = new XMLHttpRequest()
    xhr.responseType = "json"


    xhr.open("POST","http://217.73.80.14:8080/multiplymatrix")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload =function() {
                   let resMatrixArr = xhr.response
                   let messageP = document.createElement('p')
                   messageP.innerHTML = 'Result matrix'
                   let divRes = document.getElementById('resContainer')
                   divRes.appendChild(messageP)
                   let tableRes = document.getElementById('resTable')

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
alert(resArr)
let allElementsMatrix1 = column1 * row1

alert(allElementsMatrix1)
for(let i =0;i<allElementsMatrix1;i++){

matrix.push(resArr[i])
}

for(let i =resArr.length - allElementsMatrix1 ;i<resArr.length;i++){
  matrix2.push(resArr[i])
  }
    let resObj = {
    "matrix": matrix,
    "matrix2": matrix2
    }

    xhr.send(JSON.stringify(resObj))

}


