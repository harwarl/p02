import Header from "./Header";
import Content from "./Content";
import { useState, useEffect } from "react";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [ itemState, setItemState ] = useState('');
  const [ userData, setUserData ] = useState('');
  const [ postData, setPostData ] = useState('');
  const [ commentData, setCommentData ] = useState('');
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState('')


  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const userResponse = await fetch(`${API_URL}/users`);
        const postResponse = await fetch(`${API_URL}/posts`);
        const commentResponse = await fetch(`${API_URL}/comments`);
        if(!userResponse || !postResponse || !commentResponse) throw Error('Error Loading Data')
        const users = await userResponse.json();
        const posts = await postResponse.json();
        const comments = await commentResponse.json();
        setUserData(users);
        setPostData(posts);
        setCommentData(comments);
        setFetchError(null);
      }catch(err){
        setFetchError(err.message)
      }finally{
        setIsLoading(false);
      }
    }

    (async()=>fetchData())();

  }, [])

  const handleClick = (item) =>{
    setItemState(item);
    if(itemState==="Item1"){
      setData(userData);
    } else if(itemState==="Item2"){
      setData(postData);
    }else if(itemState==="Item3"){
      setData(commentData);
    }else{
      setData('')
    }
  }


  return (
    <div className="App">
      <Header 
      itemState={itemState}
      setItemState={setItemState}
      handleClick={handleClick}
      />

      {fetchError && <p style={{color: 'red'}}>Error: {`${fetchError}`}</p>}
      {isLoading && <p>Loading Data...</p>}
      {!fetchError && !isLoading && <Content 
      data={data? data: []}
      />}
    
    </div>
  );
}

export default App;