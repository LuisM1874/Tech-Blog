const editBtn= document.querySelectorAll("#edit_Btn")

for (let i=0; i< editBtn.length; i++)
{
    editBtn[i].addEventListener("click",async function(event){
    
      
        let id=parseInt(event.target.dataset.id)

        console.log(id)
        document.location.replace('/comments')
   


    });
}