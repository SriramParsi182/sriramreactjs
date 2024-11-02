import React, { useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton }  from 'react-social-login-buttons'
function FacebookLoginComponent() {

  const [profile, setProfile] = useState('');



  return (
    <>
      {profile ? (
        <>
          <LoginSocialFacebook
            appId="439699102138154"
            onResolve={(response)=>{
                setProfile(response.data);
            } }
            onReject={(error)=>{
                console.log(error);
            }}
            >
                <FacebookLoginButton />
                </LoginSocialFacebook >
        </>
      ) : (
        <h2>Welcome {profile.name}</h2>
      )}
    </>
  );
}

export default FacebookLoginComponent;
