import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";


function Dashboard(AuthEventData : signOut, CognitoUserAmplify : user) { //fix var declarations
    const [userCompanies, setUserCompanies] = useState({}); //fix declaration
    
    //useEffect hook to retrieve users opportunities

    return (
	<main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
    );
}

export default Dashboard;
