import { FC, useEffect, useState } from "react";
import { Container, Content, Input } from "./style";
import { Props } from "./types";
import { getRepos } from "../../api/getRepos";

export const Modal: FC<Props> = ({ showModal, setShowModal, setRepos, setIsLoading }) => {
 const [textInput, setTextInput] = useState('');
 const [isDisabled, setIsDisabled] = useState(false); 


  const fetch = async () => {

    setIsLoading(true);

    try {
      const data = await getRepos(textInput);
      setRepos(data);
    } catch (e) {
      alert("ERROR");
    }finally{
     
      setIsLoading(false);
    }
  };


   useEffect(() => {
    if(textInput.length <= 3){
        setIsDisabled(true)
    } else setIsDisabled(false)

   },[textInput])

   const clearSatethread = () =>{
    fetch()
    setTextInput('');   
    setShowModal(false);

   }

  return (
    showModal && (
      <Container >
        <Content>
       { isDisabled ? 
            <span  style={{marginRight: '30px',backgroundColor: 'lightgray', padding: '12px'}}>X</span> :
            <span onClick={() => clearSatethread()} style={{marginRight: '30px',backgroundColor: 'cyan', padding: '12px'}}>X</span>
       }
            

<Input onChange={(e) => setTextInput(e.target.value)}/>


          <h1>Modal</h1>
        </Content>
      </Container>
    )
  );
};

