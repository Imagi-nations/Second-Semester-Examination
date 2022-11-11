import { useState } from "react";
function useParticipantId(initialValue) {

  let [value, setValue] = useState(initialValue || 0);

  const participantId = () => setValue((x) => x + Math.floor(Math.random() * 1000001));

  return [value, setValue, participantId];
}

export default useParticipantId;
