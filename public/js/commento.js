const newFormHandler = async (event) => {

    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
   
    if (title && description) {
      console.log(title && description);
      
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({title, description}),  
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {  
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  
  };
  
    
    document
      .querySelector('.comments-form')
      .addEventListener('submit', newFormHandler);
    
  