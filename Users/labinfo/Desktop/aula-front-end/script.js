document.querySelector('#formEndereco').addEventListener("submit", async(event)=>{
    event.preventDefault();

    const rua= document.querySelector('#rua').value;
    const cidade= document.querySelector('#cidade').value;
    const estado= document.querySelector('#estado').value;
    const cep= document.querySelector('#cep').value;

    const addressData ={
        rua,
        cidade,
        estado,
        cep
    }
    try{
        const response = await fetch('http://localhost:3000/api/enderecos',{
            method="POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(addressData)
        });
        const result = await response.json();

        if(response.ok){
            document.querySelector('#message').innerText = 'Endereco enviado com sucesso!';
            document.querySelector('#formEndereco').reset();

        }else{
            document.querySelector('#message').innerText=`Erro: ${result.message}`;
            
        }

    }
    catch(error){
        document.querySelector('#message').innerText='Erro na comunicacao com o servidor.'
    }
});