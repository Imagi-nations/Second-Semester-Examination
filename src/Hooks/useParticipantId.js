import {useState} from "react";
function useParticipantid() {
  
  let [participantid, setParticipantId] = useState(0);

  const participantNumber = () => setParticipantId(() => Math.random()*100);

  console.log(useParticipantid)
  
  return [participantid, setParticipantId, participantNumber];
}
export default useParticipantid;