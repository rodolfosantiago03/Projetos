function sortNumber(){

    const input1 = Math.ceil(document.querySelector(".my-input-1").value)
    const input2 = Math.floor(document.querySelector(".my-input-2").value)

    const result = Math.floor(Math.random() * (input2 - input1) + input1);

    alert(result)
}