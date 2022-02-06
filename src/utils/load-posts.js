export const loadPosts = async()=>{

    const postResponse= fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse=fetch('https://jsonplaceholder.typicode.com/photos');

    const[posts,photos]= await Promise.all([postResponse,photoResponse]);

    const postJson=await posts.json();
    const photoJson=await photos.json();

    const fullPost=postJson.map((p,index)=>{
      return({...p,cover:photoJson[index].url});
    })
    return fullPost;
}

