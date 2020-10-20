



let sizeMatrix
const choiceSizeMatrix = () =>{
    let selectedIndex  = document.getElementById('sizeMatrix').options.selectedIndex
     sizeMatrix = document.getElementById('sizeMatrix').options[selectedIndex].value
     console.log(typeof sizeMatrix)
     sizeMatrix = Number(sizeMatrix)

     const form = document.getElementById('matrixForm')
     const tableForInsertElements = document.getElementById('tableMatrix')
     form.appendChild(tableForInsertElements)


   while(tableForInsertElements.firstChild){
    tableForInsertElements.removeChild(tableForInsertElements.firstChild)
   }


     for(let i = 0; i< sizeMatrix;i++){
        let tr = document.createElement('tr')
        tr.id = 'row'+(i+1)
        tableForInsertElements.appendChild(tr)
        for(let j = 0;j < sizeMatrix;j++){
            let th =  document.createElement('th')
            let input = document.createElement('input')
            input.type='number'
            input.name='matrix'
            th.appendChild(input)
            tr.appendChild(th)
        }

     }


     const sendButtom = document.getElementById('send')
     if(!sendButtom){
     const sendButtom = document.createElement('button')
     sendButtom.type='submit'
     sendButtom.id='send'
     form.append(sendButtom)
  }else{
    form.append(sendButtom)
  }
}
