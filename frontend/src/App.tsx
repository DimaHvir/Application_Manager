import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import Dashboard from './Dashboard';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);



function App() {
    return (
        <main className="d-flex justify-content-center">
            <Authenticator>
                {({ signOut, user }) => (<Dashboard signOut={signOut} user={user} />)}
            </Authenticator>
        </main>
    );
}

export default App;
