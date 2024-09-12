import { Box, Button, Container, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllProblems } from "../Api";
import AddAnswer from "./AddAnswer";
import AddProblem from "./AddProblem";

const Community = () => {
  const [textAnswer, setTextAnswer] = useState(false);
  const [problems, setProblems] = useState([]);
  const [change,setChange] = useState(false);
  const [answerCount,setAnswerCount] = useState(3)
  const theme = useTheme()
  const small = theme.breakpoints.down('sm')
  useEffect(() => {
    const getData = async () => {
      const res = await getAllProblems();
      setProblems(res.data);
      console.log(res);
    };
    getData();
  }, [change]);
  return (
    <Container sx={{ pt: 5 }}>
        <AddProblem change={change} setChange={setChange}/>
      <Box>
        {problems.map((item) => (
          <>
            <Typography sx={{ fontSize: "1.3rem",[small]:{fontSize:'1.2rem'} }} component="p">
              <Typography
                sx={{ fontSize: "1.4rem",[small]:{fontSize:'1.2rem'}, fontWeight: "bold" }}
                component="span"
              >
                Problem:{" "}
              </Typography>
              {item.problem}
              <Button
                sx={{ mt: 1, display: "block" }}
                onClick={() => setTextAnswer(!textAnswer)}
                variant="contained"
                color='success'
              >
                Add Your Answer
              </Button>
             <AddAnswer setTextAnswer={setTextAnswer} change={change} setChange={setChange} problemId={item._id} textAnswer={textAnswer}/>
              {item.answers.map((ans,ind) => (
               ind<answerCount&&<Typography
                  sx={{ ml: 4, fontSize: "1.3rem", [small]:{fontSize:'1.2rem',ml:2},mt: 3 }}
                  component="p"
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "1.4rem",[small]:{fontSize:'1.2rem'} }}
                    component="span"
                  >
                    Ans{ind+1}: 
                  </Typography>
                  {' '+ans.answer}
                  <Typography sx={{textAlign:'end'}}>
                    ~ {ans.name}
                  </Typography>
                </Typography>
              ))}
              {
                item.answers&&<Button onClick={()=>setAnswerCount(answerCount+3)}>show more answers</Button>
              }
            </Typography>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default Community;
